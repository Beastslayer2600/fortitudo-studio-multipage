// Pure logic for the "How much of January have you already spent?" tool.
// No React, no browser APIs: everything here is unit-tested by
// lib/januaryStack.test.mjs (run with `npm test`).
//
// Dates are calendar days with no time zone. They are held as Date objects
// at 00:00 UTC and only ever manipulated with the UTC getters/setters, so a
// visitor's time zone or a daylight-saving change can never shift a payday.

export type PaydayChoice = "1" | "15" | "25" | "last";
export type Interval = "fortnight" | "month";
export type Tier = "manageable" | "crowded" | "spoken";

export type Row = {
  /** Stable id, used for React keys and calendar UIDs. */
  id: string;
  item: string;
  /** Total price in rand. 0 means "not filled in". */
  price: number;
  instalments: number;
  interval: Interval;
  /** First payment date, "YYYY-MM-DD". */
  firstPayment: string;
  /** False when the visitor has toggled the row off ("Leave this out"). */
  included: boolean;
};

export type Cycle = {
  /** Short month label of the payday that funds this cycle, e.g. "Jan". */
  label: string;
  /** Full month name, e.g. "January". */
  fullLabel: string;
  payday: Date;
  committed: number;
  share: number;
};

export type StackResult = {
  paydays: Date[]; // 7 entries: six cycles plus the boundary payday
  cycles: Cycle[]; // 6 entries
  focusIndex: number;
  focusLabel: string;
  /** Total due on or after the seventh payday ("plus R{x} after that"). */
  after: number;
};

/** Average working hours in a month: 40 hours × 52 weeks ÷ 12 months. */
export const HOURS_PER_MONTH = 173.33;

export const CYCLE_COUNT = 6;
export const MAX_ROWS = 10;

const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LONG_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_MS = 86_400_000;

// ---------------------------------------------------------------------------
// Dates
// ---------------------------------------------------------------------------

export function utcDate(y: number, m: number, d: number): Date {
  return new Date(Date.UTC(y, m, d));
}

/** Today's calendar date in the visitor's own time zone, as a UTC date. */
export function todayDate(now: Date = new Date()): Date {
  return utcDate(now.getFullYear(), now.getMonth(), now.getDate());
}

export function parseISODate(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s ?? "");
  if (!m) return null;
  const d = utcDate(+m[1], +m[2] - 1, +m[3]);
  return isNaN(d.getTime()) ? null : d;
}

export function toISODate(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function daysInMonth(y: number, m: number): number {
  return new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
}

/** Add calendar months, clamping to the month end (31 Jan + 1 month = 28/29 Feb). */
export function addMonths(d: Date, n: number): Date {
  const total = d.getUTCMonth() + n;
  const y = d.getUTCFullYear() + Math.floor(total / 12);
  const m = ((total % 12) + 12) % 12;
  return utcDate(y, m, Math.min(d.getUTCDate(), daysInMonth(y, m)));
}

export function addDays(d: Date, n: number): Date {
  return new Date(d.getTime() + n * DAY_MS);
}

export function formatLongDate(d: Date): string {
  return `${d.getUTCDate()} ${LONG_MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function formatMonthYear(d: Date): string {
  return `${LONG_MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

// ---------------------------------------------------------------------------
// Paydays and schedules
// ---------------------------------------------------------------------------

function paydayInMonth(y: number, m: number, choice: PaydayChoice): Date {
  const last = daysInMonth(y, m);
  const day = choice === "last" ? last : Math.min(+choice, last);
  return utcDate(y, m, day);
}

/**
 * The next `count` paydays from `today`. If today is a payday it counts as
 * the first one.
 */
export function buildPaydays(today: Date, choice: PaydayChoice, count = CYCLE_COUNT + 1): Date[] {
  const out: Date[] = [];
  let y = today.getUTCFullYear();
  let m = today.getUTCMonth();
  while (out.length < count) {
    const p = paydayInMonth(y, m, choice);
    if (p.getTime() >= today.getTime()) out.push(p);
    m += 1;
    if (m === 12) {
      m = 0;
      y += 1;
    }
  }
  return out;
}

/** Every payday from `today` up to and including `until`. */
export function paydaysUntil(today: Date, choice: PaydayChoice, until: Date): Date[] {
  const out: Date[] = [];
  let y = today.getUTCFullYear();
  let m = today.getUTCMonth();
  for (;;) {
    const p = paydayInMonth(y, m, choice);
    if (p.getTime() > until.getTime()) return out;
    if (p.getTime() >= today.getTime()) out.push(p);
    m += 1;
    if (m === 12) {
      m = 0;
      y += 1;
    }
  }
}

export type Instalment = { due: Date; amount: number; k: number; n: number };

/** All due dates for a row, from the first payment onwards. */
export function schedule(row: Pick<Row, "price" | "instalments" | "interval" | "firstPayment">, fallbackStart: Date): Instalment[] {
  const n = Math.max(1, Math.floor(row.instalments || 1));
  if (!(row.price > 0)) return [];
  const start = parseISODate(row.firstPayment) ?? fallbackStart;
  const amount = row.price / n;
  const out: Instalment[] = [];
  for (let k = 0; k < n; k++) {
    const due = row.interval === "fortnight" ? addDays(start, 14 * k) : addMonths(start, k);
    out.push({ due, amount, k: k + 1, n });
  }
  return out;
}

export function activeRows(rows: Row[]): Row[] {
  return rows.filter((r) => r.included && r.price > 0);
}

// ---------------------------------------------------------------------------
// The stack
// ---------------------------------------------------------------------------

/** Spread instalments across the six pay cycles. Pure sum; no shares. */
export function committedByCycle(rows: Row[], paydays: Date[], today: Date): { committed: number[]; after: number } {
  const committed = new Array(CYCLE_COUNT).fill(0);
  let after = 0;
  const first = paydays[0].getTime();
  const boundary = paydays[CYCLE_COUNT].getTime();
  for (const row of rows) {
    for (const inst of schedule(row, today)) {
      const t = inst.due.getTime();
      if (t < first) continue; // already paid from the current pay
      if (t >= boundary) {
        after += inst.amount;
        continue;
      }
      for (let i = CYCLE_COUNT - 1; i >= 0; i--) {
        if (t >= paydays[i].getTime()) {
          committed[i] += inst.amount;
          break;
        }
      }
    }
  }
  return { committed, after };
}

export function computeStack(input: {
  takeHome: number;
  payday: PaydayChoice;
  rows: Row[];
  today: Date;
}): StackResult {
  const paydays = buildPaydays(input.today, input.payday);
  const { committed, after } = committedByCycle(activeRows(input.rows), paydays, input.today);
  const takeHome = input.takeHome > 0 ? input.takeHome : 0;
  const cycles: Cycle[] = paydays.slice(0, CYCLE_COUNT).map((p, i) => ({
    label: SHORT_MONTHS[p.getUTCMonth()],
    fullLabel: LONG_MONTHS[p.getUTCMonth()],
    payday: p,
    committed: committed[i],
    share: takeHome > 0 ? committed[i] / takeHome : 0,
  }));

  let focusIndex = cycles.findIndex((c) => c.payday.getUTCMonth() === 0);
  if (focusIndex === -1) {
    focusIndex = 0;
    cycles.forEach((c, i) => {
      if (c.share > cycles[focusIndex].share) focusIndex = i;
    });
  }

  return { paydays, cycles, focusIndex, focusLabel: cycles[focusIndex].fullLabel, after };
}

/** Extra share per cycle from a not-yet-bought deal (the ghost layer). */
export function dealShares(
  deal: { price: number; instalments: number; interval: Interval; firstPayment: string },
  paydays: Date[],
  today: Date,
  takeHome: number,
): number[] {
  const row: Row = { id: "deal", item: "", included: true, ...deal };
  const { committed } = committedByCycle([row], paydays, today);
  return committed.map((c) => (takeHome > 0 ? c / takeHome : 0));
}

// ---------------------------------------------------------------------------
// Result helpers
// ---------------------------------------------------------------------------

export function pct(share: number): number {
  return Math.round(share * 100);
}

/** Tier from a share. Boundaries use the whole percentage the visitor sees. */
export function tierFor(share: number): Tier {
  const p = pct(share);
  if (p < 10) return "manageable";
  if (p <= 25) return "crowded";
  return "spoken";
}

export function crossesTier(before: number, after: number): boolean {
  return tierFor(before) !== tierFor(after);
}

/** Latest future due date across the given rows, or null. */
export function lastDueDate(rows: Row[], today: Date): Date | null {
  let last: Date | null = null;
  for (const row of activeRows(rows)) {
    for (const inst of schedule(row, today)) {
      if (inst.due.getTime() < today.getTime()) continue;
      if (!last || inst.due.getTime() > last.getTime()) last = inst.due;
    }
  }
  return last;
}

/**
 * Paydays between today and the last due date, counting the payday that
 * covers the last instalment.
 */
export function paydaysUntilClear(today: Date, choice: PaydayChoice, last: Date | null): number {
  if (!last) return 0;
  return paydaysUntil(today, choice, last).length;
}

export type HoursOfWork = { hours: number; underAnHour: boolean } | null;

export function hoursOfWork(price: number, takeHome: number): HoursOfWork {
  if (!(price > 0) || !(takeHome > 0)) return null;
  const hourlyRate = takeHome / HOURS_PER_MONTH;
  const raw = price / hourlyRate;
  if (raw < 1) return { hours: 0, underAnHour: true };
  return { hours: Math.round(raw), underAnHour: false };
}

export function rowBucket(count: number): "1" | "2-3" | "4+" {
  if (count <= 1) return "1";
  if (count <= 3) return "2-3";
  return "4+";
}

// ---------------------------------------------------------------------------
// Money formatting
// ---------------------------------------------------------------------------

/** "18 500" with ordinary spaces, for inputs. */
export function groupDigits(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** "R18 500" with non-breaking spaces, for display (matches the homepage). */
export function rands(n: number): string {
  return "R" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

export function parseRands(s: string): number {
  const digits = (s ?? "").replace(/\D/g, "").slice(0, 9);
  return digits ? parseInt(digits, 10) : 0;
}

// ---------------------------------------------------------------------------
// Calendar (.ics)
// ---------------------------------------------------------------------------

function icsDate(d: Date): string {
  return toISODate(d).replace(/-/g, "");
}

function icsStamp(now: Date): string {
  return now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function icsEscape(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

/** Fold lines longer than 75 octets, per RFC 5545. */
function icsFold(line: string): string {
  const bytes = new TextEncoder();
  if (bytes.encode(line).length <= 75) return line;
  const parts: string[] = [];
  let current = "";
  for (const ch of line) {
    const limit = parts.length === 0 ? 75 : 74; // continuation lines start with a space
    if (bytes.encode(current + ch).length > limit) {
      parts.push(current);
      current = ch;
    } else {
      current += ch;
    }
  }
  parts.push(current);
  return parts.join("\r\n ");
}

export function buildIcs(rows: Row[], today: Date, now: Date = new Date()): { ics: string; events: number } {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gert Fourie//January test//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  const stamp = icsStamp(now);
  let events = 0;
  for (const row of activeRows(rows)) {
    const name = row.item.trim() || "Purchase";
    for (const inst of schedule(row, today)) {
      if (inst.due.getTime() < today.getTime()) continue;
      events += 1;
      lines.push(
        "BEGIN:VEVENT",
        `UID:${row.id}-${inst.k}-of-${inst.n}-${icsDate(inst.due)}@fortitudostudios.com`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${icsDate(inst.due)}`,
        `DTEND;VALUE=DATE:${icsDate(addDays(inst.due, 1))}`,
        icsFold(`SUMMARY:${icsEscape(`Instalment: ${name} (${inst.k}/${inst.n})`)}`),
        icsFold(`DESCRIPTION:${icsEscape(`R${groupDigits(inst.amount)}. From the January test at fortitudostudios.com`)}`),
        "TRANSP:TRANSPARENT",
        "END:VEVENT",
      );
    }
  }
  lines.push("END:VCALENDAR");
  return { ics: lines.join("\r\n") + "\r\n", events };
}
