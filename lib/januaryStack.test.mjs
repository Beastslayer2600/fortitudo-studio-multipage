// Run with: npm test   (Node's built-in test runner; Node 22.18+ strips the
// TypeScript types from januaryStack.ts on import, so no build step is needed.)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  addMonths,
  buildIcs,
  buildPaydays,
  computeStack,
  crossesTier,
  dealShares,
  hoursOfWork,
  lastDueDate,
  paydaysUntilClear,
  parseRands,
  groupDigits,
  heaviestCycle,
  schedule,
  tierFor,
  toISODate,
  utcDate,
} from "./januaryStack.ts";

const iso = (d) => toISODate(d);
const row = (over = {}) => ({
  id: "r1",
  item: "Sneakers",
  price: 4000,
  instalments: 4,
  interval: "month",
  firstPayment: "2026-11-09",
  included: true,
  ...over,
});

test("month-end clamping: 31 Jan + 1 month is the last day of February", () => {
  assert.equal(iso(addMonths(utcDate(2027, 0, 31), 1)), "2027-02-28");
  assert.equal(iso(addMonths(utcDate(2028, 0, 31), 1)), "2028-02-29");
  assert.equal(iso(addMonths(utcDate(2026, 11, 31), 2)), "2027-02-28");
  // schedule is computed from the first date each time, so it does not drift
  const s = schedule(row({ firstPayment: "2027-01-31", instalments: 3 }), utcDate(2027, 0, 1));
  assert.deepEqual(s.map((i) => iso(i.due)), ["2027-01-31", "2027-02-28", "2027-03-31"]);
});

test("'Last day' paydays land on each month end", () => {
  const p = buildPaydays(utcDate(2026, 10, 9), "last");
  assert.deepEqual(p.map(iso), [
    "2026-11-30", "2026-12-31", "2027-01-31", "2027-02-28", "2027-03-31", "2027-04-30", "2027-05-31",
  ]);
});

test("today counts as the first payday when it is one", () => {
  const p = buildPaydays(utcDate(2026, 10, 25), "25");
  assert.equal(iso(p[0]), "2026-11-25");
  const q = buildPaydays(utcDate(2026, 10, 26), "25");
  assert.equal(iso(q[0]), "2026-12-25");
});

test("fortnightly schedule crossing a payday splits across cycles", () => {
  // Paydays: 25 Nov, 25 Dec, 25 Jan... Pay in 4 from 18 Nov (today), every 2 weeks:
  // 18 Nov (paid at checkout), 2 Dec, 16 Dec (Nov cycle), 30 Dec (Dec cycle)
  const today = utcDate(2026, 10, 18);
  const r = computeStack({
    takeHome: 10000,
    payday: "25",
    today,
    rows: [row({ interval: "fortnight", firstPayment: "2026-11-18" })],
  });
  assert.deepEqual(r.cycles.map((c) => Math.round(c.committed)), [2000, 1000, 0, 0, 0, 0]);
  assert.equal(r.cycles[0].label, "Nov");
  assert.equal(r.current.committed, 0);
});

test("pay-in-4 started today: 2nd instalment lands in the 'Before' bar", () => {
  // Today 9 Nov, payday 25th. 9 Nov paid at checkout; 23 Nov -> Before 25 Nov;
  // 7 Dec and 21 Dec -> Nov cycle.
  const today = utcDate(2026, 10, 9);
  const r = computeStack({
    takeHome: 10000,
    payday: "25",
    today,
    rows: [row({ price: 6000, interval: "fortnight", firstPayment: "2026-11-09" })],
  });
  assert.equal(r.current.label, "Before 25 Nov");
  assert.equal(r.current.fullLabel, "Before 25 November");
  assert.equal(r.current.committed, 1500);
  assert.deepEqual(r.cycles.map((c) => c.committed), [3000, 0, 0, 0, 0, 0]);
  assert.equal(r.focusLabel, "January"); // never the Before bar
  // Nothing vanishes: 1 500 + 3 000 + 1 500 paid at checkout = 6 000
  assert.equal(r.current.committed + r.cycles.reduce((a, c) => a + c.committed, 0) + 1500, 6000);
});

test("the Before bar is in heaviestCycle; absent when today is payday", () => {
  const today = utcDate(2026, 10, 9);
  const r = computeStack({
    takeHome: 10000,
    payday: "25",
    today,
    rows: [row({ price: 3000, instalments: 1, firstPayment: "2026-11-20" })],
  });
  assert.equal(heaviestCycle(r).label, "Before 25 Nov");
  const onPayday = computeStack({ takeHome: 10000, payday: "25", today: utcDate(2026, 10, 25), rows: [] });
  assert.equal(onPayday.current, null);
});

test("instalments due before payday[0] go to the Before bar; past ones are dropped", () => {
  const today = utcDate(2026, 10, 9);
  const r = computeStack({
    takeHome: 10000,
    payday: "25",
    today,
    rows: [
      row({ id: "a", firstPayment: "2026-11-10", instalments: 1, price: 999 }),
      row({ id: "b", firstPayment: "2026-11-01", instalments: 1, price: 500 }), // already past
      row({ id: "c", firstPayment: "2026-11-09", instalments: 1, price: 700 }), // paid at checkout
    ],
  });
  assert.equal(r.current.committed, 999);
  assert.equal(r.cycles.reduce((a, c) => a + c.committed, 0), 0);
});

test("focus month is January when it is in the six; share can pass 100%", () => {
  const today = utcDate(2026, 10, 9);
  const r = computeStack({
    takeHome: 1000,
    payday: "25",
    today,
    rows: [row({ price: 3000, instalments: 1, firstPayment: "2027-01-26" })],
  });
  assert.equal(r.focusLabel, "January");
  assert.equal(r.cycles[r.focusIndex].share, 3);
  assert.equal(tierFor(r.cycles[r.focusIndex].share), "spoken");
});

test("focus falls back to the heaviest cycle when January is not in the six", () => {
  const today = utcDate(2027, 1, 1); // Feb: six paydays run Feb..Jul
  const r = computeStack({
    takeHome: 10000,
    payday: "25",
    today,
    rows: [row({ price: 3000, instalments: 1, firstPayment: "2027-04-26" })],
  });
  assert.equal(r.focusLabel, "April");
});

test("instalments after the six paydays are counted as 'after'", () => {
  const today = utcDate(2026, 10, 9);
  const r = computeStack({
    takeHome: 10000,
    payday: "25",
    today,
    rows: [row({ price: 12000, instalments: 12, firstPayment: "2026-11-26" })],
  });
  assert.equal(Math.round(r.after), 6000);
});

test("lastDueDate ignores rows that are toggled off", () => {
  const today = utcDate(2026, 10, 9);
  const rows = [
    row({ id: "a", firstPayment: "2026-11-26", instalments: 4 }),
    row({ id: "b", firstPayment: "2026-11-26", instalments: 24 }),
  ];
  assert.equal(iso(lastDueDate(rows, today)), "2028-10-26");
  rows[1].included = false;
  assert.equal(iso(lastDueDate(rows, today)), "2027-02-26");
  assert.equal(paydaysUntilClear(today, "25", lastDueDate(rows, today)), 4);
  assert.equal(lastDueDate([row({ included: false })], today), null);
  // a single payment made at checkout leaves nothing to clear
  assert.equal(lastDueDate([row({ instalments: 1, firstPayment: "2026-11-09" })], today), null);
});

test("the deal ghost is not counted in committed totals", () => {
  const today = utcDate(2026, 10, 9);
  const rows = [row({ firstPayment: "2026-11-26" })];
  const before = computeStack({ takeHome: 10000, payday: "25", today, rows });
  const ghost = dealShares(
    { price: 6000, instalments: 3, interval: "month", firstPayment: "2026-11-26" },
    before.paydays,
    today,
    10000,
  );
  const after = computeStack({ takeHome: 10000, payday: "25", today, rows });
  assert.deepEqual(after.cycles.map((c) => c.committed), before.cycles.map((c) => c.committed));
  assert.deepEqual(ghost.cycles.map((g) => Math.round(g * 100)), [20, 20, 20, 0, 0, 0]);
  assert.equal(ghost.current, 0);
  // A deal started today: first payment at checkout, the 2nd in the Before bar
  const g2 = dealShares({ price: 4000, instalments: 4, interval: "fortnight", firstPayment: "2026-11-09" }, before.paydays, today, 10000);
  assert.equal(Math.round(g2.current * 100), 10);
});

test("tier boundaries and crossing detection", () => {
  assert.equal(tierFor(0.094), "manageable");
  assert.equal(tierFor(0.1), "crowded");
  assert.equal(tierFor(0.25), "crowded");
  assert.equal(tierFor(0.26), "spoken");
  assert.equal(crossesTier(0.08, 0.12), true);
  assert.equal(crossesTier(0.12, 0.2), false);
});

test("hours of work rounding", () => {
  // R17 333 take-home -> R100/hour
  assert.deepEqual(hoursOfWork(2550, 17333), { hours: 26, underAnHour: false });
  assert.deepEqual(hoursOfWork(2449, 17333), { hours: 24, underAnHour: false });
  assert.deepEqual(hoursOfWork(50, 17333), { hours: 0, underAnHour: true });
  assert.equal(hoursOfWork(100, 0), null);
});

test("money parsing and grouping", () => {
  assert.equal(parseRands("R18 500"), 18500);
  assert.equal(parseRands(""), 0);
  assert.equal(groupDigits(1234567), "1 234 567");
});

test("valid .ics: CRLF endings and one VEVENT per future instalment", () => {
  const today = utcDate(2026, 10, 9);
  const rows = [
    row({ id: "a", item: "Shoes, red; size 9", firstPayment: "2026-10-26" }), // 1 in the past
    row({ id: "b", item: "", instalments: 3, firstPayment: "2026-11-30" }),
    row({ id: "c", included: false }),
    row({ id: "d", item: "Today", instalments: 2, interval: "fortnight", firstPayment: "2026-11-09" }), // 1 paid at checkout
  ];
  const { ics, events } = buildIcs(rows, today, new Date("2026-11-09T10:00:00Z"));
  assert.equal(events, 7);
  assert.equal((ics.match(/BEGIN:VEVENT/g) || []).length, 7);
  assert.equal((ics.match(/END:VEVENT/g) || []).length, 7);
  assert.ok(!ics.includes("Today (1/2)"), "checkout instalment must not be exported");
  assert.ok(ics.includes("SUMMARY:Instalment: Today (2/2)"));
  assert.ok(ics.startsWith("BEGIN:VCALENDAR\r\n"));
  assert.ok(ics.endsWith("END:VCALENDAR\r\n"));
  assert.equal(ics.replace(/\r\n/g, "").includes("\n"), false, "bare LF found");
  assert.ok(ics.includes("SUMMARY:Instalment: Shoes\\, red\\; size 9 (2/4)"));
  assert.ok(ics.includes("SUMMARY:Instalment: Purchase (1/3)"));
  assert.ok(ics.includes("DTSTART;VALUE=DATE:20261130"));
  assert.ok(ics.includes("DTSTAMP:20261109T100000Z"));
  const uids = ics.match(/^UID:.*$/gm);
  assert.equal(new Set(uids).size, uids.length, "UIDs must be unique");
  for (const line of ics.split("\r\n")) assert.ok(new TextEncoder().encode(line).length <= 75, line);
});
