'use client';

import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Eye, EyeOff, X } from 'lucide-react';
import { track } from '@vercel/analytics';
import {
  MAX_ROWS,
  activeRows,
  buildIcs,
  computeStack,
  crossesTier,
  dealShares,
  formatLongDate,
  formatMonthYear,
  groupDigits,
  hoursOfWork,
  lastDueDate,
  parseRands,
  paydaysUntilClear,
  pct,
  rands,
  rowBucket,
  tierFor,
  toISODate,
  todayDate,
  type Interval,
  type PaydayChoice,
  type Row,
  type Tier,
} from '@/lib/januaryStack';
import { SLIP_FILENAME, canvasToFile, downloadBlob, drawSlip } from '@/lib/januarySlip';

// ===========================================================================
// RESULT_COPY — every visible string in the tool. Edit wording here; the
// logic below only reads from this object.
// ===========================================================================
export const RESULT_COPY = {
  inputs: {
    takeHomeLabel: 'Monthly take-home pay',
    takeHomePlaceholder: 'R18 500',
    paydayLabel: 'Payday',
    paydayOptions: [
      { value: '1', label: '1st' },
      { value: '15', label: '15th' },
      { value: '25', label: '25th' },
      { value: 'last', label: 'Last day' },
    ] as { value: PaydayChoice; label: string }[],
    rowsLabel: "What you're paying off",
    rowHeading: (i: number) => `Item ${i + 1}`,
    itemLabel: 'Item',
    itemPlaceholder: 'Sneakers',
    priceLabel: 'Total price',
    pricePlaceholder: 'R2 000',
    instalmentsLabel: 'Instalments',
    instalmentOptions: [3, 4, 6, 12, 24],
    everyLabel: 'Every',
    everyOptions: [
      { value: 'fortnight', label: '2 weeks' },
      { value: 'month', label: 'Month' },
    ] as { value: Interval; label: string }[],
    firstPaymentLabel: 'First payment',
    removeRow: 'Remove item',
    leaveOut: 'Leave this out',
    addAnother: '+ Add another',
    maxRows: 'That is the maximum of ten.',
    quickAddLabel: 'Quick add',
    quickAdd: [
      { key: 'pay4', label: 'Pay in 4', instalments: 4, interval: 'fortnight' },
      { key: 'store', label: 'Store account', instalments: 6, interval: 'month' },
      { key: 'card', label: 'Credit card', instalments: 12, interval: 'month' },
    ] as { key: string; label: string; instalments: number; interval: Interval }[],
    quickAddHelp: 'Rough is fine. Use the total price and how many payments.',
  },
  deal: {
    label: 'Thinking about a deal?',
    helper: 'Add it here before you buy. It shows as a ghost layer on your paydays.',
    priceLabel: 'Deal price',
    instalmentOptions: [1, 3, 4, 6, 12],
    add: 'Add it to my list',
    clear: 'Clear',
    defaultItem: 'The deal',
    withDeal: (focus: string, from: number, to: number) => `With this deal: ${focus} goes from ${from}% to ${to}%.`,
    crossing: (a: string, b: string) => `That moves you from ${a} to ${b}.`,
  },
  stack: {
    label: 'Your next six paydays',
    empty: 'Add your take-home pay and one price. Your paydays fill in here.',
    over: 'over',
    ariaPrefix: 'Share of each payday already committed: ',
    clearsOn: 'Your last instalment clears on',
    nothingToClear: 'Nothing left to clear.',
    paydaysUntilClear: (n: number) => `${n} payday${n === 1 ? '' : 's'} until you are clear.`,
    clearBeforePayday: 'Clear before your next payday.',
    hoursNote: 'Hours are estimated from your take-home pay over a 40-hour week.',
    privacy: 'These numbers stay in your browser. Nothing is sent anywhere until you choose to send it.',
    calendar: 'Add these dates to my calendar',
    calendarFile: 'my-instalments.ics',
    ghostLegend: 'Dashed: the deal you are thinking about',
  },
  hours: {
    under: 'under an hour of work',
    hours: (n: number) => `≈ ${n} hour${n === 1 ? '' : 's'} of work`,
  },
  headline: {
    gone: (amount: string, focus: string) => `${amount} of your ${focus} salary is`,
    goneGold: 'already gone.',
    nothing: (focus: string) => `Nothing is committed against ${focus} yet.`,
    nothingGold: 'Keep it that way.',
  },
  tiers: {
    manageable: { title: () => 'Manageable.', body: (f: string) => `Your ${f} pay arrives mostly intact.` },
    crowded: { title: () => 'Crowded.', body: () => 'A quarter of a payday can disappear before you notice it.' },
    spoken: {
      title: (f: string) => `${f} is already spoken for.`,
      body: () => 'Instalments come off the top. Everything else has to fit around what is left.',
    },
  } as Record<Tier, { title: (focus: string) => string; body: (focus: string) => string }>,
  tierNames: { manageable: 'manageable', crowded: 'crowded', spoken: 'spoken for' } as Record<Tier, string>,
  whatIf: {
    one: (name: string, focus: string, from: number, to: number) =>
      `Without ${name}: ${focus} drops from ${from}% to ${to}%.`,
    many: (k: number, focus: string, from: number, to: number) =>
      `Without ${k} purchases: ${focus} drops from ${from}% to ${to}%.`,
    fallbackName: 'that purchase',
    same: (focus: string, p: number) => `Nothing from that is due against ${focus}. It stays at ${p}%.`,
  },
  stats: {
    running: 'Running instalments',
    heaviest: 'Heaviest payday',
    owedAfter: 'Still owed after six paydays',
  },
  whatsapp: {
    label: 'Send me this result on WhatsApp',
    number: '27773866299',
    note: 'Opens WhatsApp with the message already written. No form, no call-back list.',
    // Percentage and count only. Never rand amounts.
    message: (sharePct: number, focus: string, rowCount: number) =>
      `Hi Gert. I ran the January test on your site. ` +
      `${sharePct}% of my ${focus} pay is already committed across ` +
      `${rowCount} instalment${rowCount === 1 ? '' : 's'}. What would you do first?`,
  },
  share: {
    label: (focus: string) => `Share my ${focus} number`,
    copied: 'Link copied',
    // Never include rand amounts or percentages here.
    text: (tierHeadline: string) => `${tierHeadline} Ninety seconds to check yours:`,
    title: 'How much of January have you already spent?',
  },
  slip: {
    button: 'Save my January slip',
    includePct: 'Include my percentage',
    shareTitle: 'My January slip',
  },
  email: { lead: 'Prefer email?', link: 'Contact me' },
};

const PAGE_PATH = '/guides/january-already-spent';

// Analytics: event names and properties only. Never amounts, percentages,
// item names or dates.
function send(name: string, props?: Record<string, string | boolean>) {
  try {
    track(name, props);
  } catch {
    /* analytics must never break the tool */
  }
}

let rowSeq = 0;
function newRow(over: Partial<Row> = {}): Row {
  rowSeq += 1;
  return {
    id: `row${Date.now().toString(36)}${rowSeq}`,
    item: '',
    price: 0,
    instalments: 4,
    interval: 'month',
    firstPayment: '', // '' means "today"
    included: true,
    ...over,
  };
}

const isBlank = (r: Row) => !r.item.trim() && !(r.price > 0);

type Deal = { price: number; instalments: number; interval: Interval };
const EMPTY_DEAL: Deal = { price: 0, instalments: 4, interval: 'month' };

// ===========================================================================

export default function JanuaryStack() {
  const reduce = useReducedMotion();
  const [today, setToday] = useState<Date | null>(null);
  const [takeHome, setTakeHome] = useState(0);
  const [payday, setPayday] = useState<PaydayChoice>('25');
  const [rows, setRows] = useState<Row[]>(() => [newRow({ id: 'row-initial' })]);
  const [deal, setDeal] = useState<Deal>(EMPTY_DEAL);
  const [includePct, setIncludePct] = useState(false);
  const [copied, setCopied] = useState(false);
  const [focusRowId, setFocusRowId] = useState<string | null>(null);
  const fired = useRef<Set<string>>(new Set());

  // Today is read after mount: the page is prerendered, so a build-time date
  // would be stale and would not match the visitor's own calendar.
  useEffect(() => setToday(todayDate()), []);

  const once = useCallback((name: string, props?: Record<string, string | boolean>) => {
    if (fired.current.has(name)) return;
    fired.current.add(name);
    send(name, props);
  }, []);
  const started = useCallback(() => once('jan_started'), [once]);

  // Move focus to the price field of a row that was just added.
  useEffect(() => {
    if (!focusRowId) return;
    document.getElementById(`${focusRowId}-price`)?.focus();
    setFocusRowId(null);
  }, [focusRowId]);

  // ---------------------------------------------------------------- derived
  const priced = rows.some((r) => r.price > 0);
  const hasResult = !!today && takeHome > 0 && priced;

  const calc = useMemo(() => {
    if (!today) return null;
    const stack = computeStack({ takeHome, payday, rows, today });
    const allOn = computeStack({ takeHome, payday, rows: rows.map((r) => ({ ...r, included: true })), today });
    const focus = stack.cycles[stack.focusIndex];
    const share = focus.share;
    const tier = tierFor(share);
    const ghost =
      deal.price > 0
        ? dealShares({ ...deal, firstPayment: '' }, stack.paydays, today, takeHome)
        : new Array(stack.cycles.length).fill(0);
    const last = lastDueDate(rows, today);
    const heaviest = stack.cycles.reduce((m, c, i) => (c.share > stack.cycles[m].share ? i : m), 0);
    return {
      stack,
      focus,
      share,
      sharePct: pct(share),
      tier,
      oldPct: pct(allOn.cycles[stack.focusIndex].share),
      ghost,
      withDealPct: pct(share + ghost[stack.focusIndex]),
      dealCrosses: deal.price > 0 && crossesTier(share, share + ghost[stack.focusIndex]),
      last,
      paydaysToClear: paydaysUntilClear(today, payday, last),
      heaviest,
      running: activeRows(rows).length,
    };
  }, [today, takeHome, payday, rows, deal]);

  const offRows = rows.filter((r) => !r.included && r.price > 0);
  const focusLabel = calc?.stack.focusLabel ?? 'January';
  const tierHeadline = calc ? RESULT_COPY.tiers[calc.tier].title(focusLabel) : '';

  // ---------------------------------------------------------------- tracking
  // Result shown: wait until typing settles, so the tier reported is the
  // visitor's real one rather than a half-typed number.
  useEffect(() => {
    if (!hasResult || !calc || fired.current.has('jan_result_shown')) return;
    const t = setTimeout(() => once('jan_result_shown', { tier: calc.tier }), 1500);
    return () => clearTimeout(t);
  }, [hasResult, calc, once]);

  // Deal check: wait until the visitor stops typing, then report once.
  useEffect(() => {
    if (!(deal.price > 0) || !hasResult || !calc || fired.current.has('jan_deal_check')) return;
    const t = setTimeout(() => once('jan_deal_check', { crossesTier: calc.dealCrosses }), 1500);
    return () => clearTimeout(t);
  }, [deal.price, hasResult, calc, once]);

  // ---------------------------------------------------------------- actions
  const updateRow = (id: string, patch: Partial<Row>) => {
    started();
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const removeRow = (id: string) => {
    started();
    setRows((rs) => {
      const next = rs.filter((r) => r.id !== id);
      return next.length ? next : [newRow()];
    });
  };

  const toggleRow = (id: string) => {
    started();
    const row = rows.find((r) => r.id === id);
    if (row?.included) once('jan_row_toggle');
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, included: !r.included } : r)));
  };

  // Adds a row; an untouched empty row is filled instead of left above it.
  const addRow = (over: Partial<Row> = {}) => {
    started();
    const blank = rows.find(isBlank);
    if (blank && Object.keys(over).length) {
      setRows((rs) => rs.map((r) => (r.id === blank.id ? { ...r, ...over } : r)));
      setFocusRowId(blank.id);
      return;
    }
    if (rows.length >= MAX_ROWS) return;
    const row = newRow(over);
    setRows((rs) => [...rs, row]);
    setFocusRowId(row.id);
  };

  const addDealToList = () => {
    if (!(deal.price > 0)) return;
    addRow({ item: RESULT_COPY.deal.defaultItem, price: deal.price, instalments: deal.instalments, interval: deal.interval });
    setDeal(EMPTY_DEAL);
  };

  const downloadCalendar = () => {
    if (!today) return;
    const { ics, events } = buildIcs(rows, today);
    if (!events) return;
    downloadBlob(new Blob([ics], { type: 'text/calendar;charset=utf-8' }), RESULT_COPY.stack.calendarFile);
    send('jan_calendar');
  };

  const shareResult = async () => {
    if (!calc) return;
    const url = `${window.location.origin}${PAGE_PATH}?t=${calc.tier}`;
    const text = RESULT_COPY.share.text(tierHeadline);
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: RESULT_COPY.share.title, text, url });
        send('jan_share', { tier: calc.tier, method: 'native' });
        return;
      } catch (err) {
        if ((err as DOMException)?.name === 'AbortError') return; // visitor closed the sheet
      }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      send('jan_share', { tier: calc.tier, method: 'copy' });
    } catch {
      /* clipboard blocked: nothing sensible to do */
    }
  };

  const saveSlip = async () => {
    if (!calc) return;
    // Built synchronously inside the click so iOS keeps the user gesture
    // for navigator.share.
    const canvas = drawSlip({
      focusLabel,
      tierHeadline,
      pct: includePct ? calc.sharePct : null,
      clearsOn: calc.last ? formatMonthYear(calc.last) : null,
    });
    const file = canvasToFile(canvas, SLIP_FILENAME);
    const props = { withPct: includePct };
    if (typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: RESULT_COPY.slip.shareTitle });
        send('jan_slip', { ...props, method: 'native' });
        return;
      } catch (err) {
        if ((err as DOMException)?.name === 'AbortError') return;
      }
    }
    downloadBlob(file, SLIP_FILENAME);
    send('jan_slip', { ...props, method: 'download' });
  };

  const whatsappHref = calc
    ? `https://wa.me/${RESULT_COPY.whatsapp.number}?text=${encodeURIComponent(
        RESULT_COPY.whatsapp.message(calc.sharePct, focusLabel, calc.running),
      )}`
    : '#';

  // ---------------------------------------------------------------- render
  const C = RESULT_COPY;

  return (
    <section
      id="january-test"
      aria-label="The January test"
      className="jan-tool scroll-mt-24 border-y border-[rgba(242,239,230,.12)] bg-[#0a231a] py-12 text-[var(--cream)] md:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        {/* ------------------------------------------------ inputs */}
        <div className="min-w-0">
          <MoneyInput
            id="jan-takehome"
            label={C.inputs.takeHomeLabel}
            placeholder={C.inputs.takeHomePlaceholder}
            value={takeHome}
            onChange={(n) => {
              started();
              setTakeHome(n);
            }}
            large
          />

          <ChipGroup
            className="mt-6"
            label={C.inputs.paydayLabel}
            options={C.inputs.paydayOptions}
            value={payday}
            onChange={(v) => {
              started();
              setPayday(v);
            }}
          />

          <fieldset className="mt-8 min-w-0">
            <legend className="text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]">{C.inputs.rowsLabel}</legend>

            <ol className="mt-3 grid gap-4">
              {rows.map((row, i) => (
                <RowCard
                  key={row.id}
                  row={row}
                  index={i}
                  today={today}
                  takeHome={takeHome}
                  onChange={(patch) => updateRow(row.id, patch)}
                  onRemove={() => removeRow(row.id)}
                  onToggle={() => toggleRow(row.id)}
                />
              ))}
            </ol>

            <button
              type="button"
              onClick={() => addRow()}
              disabled={rows.length >= MAX_ROWS}
              className="mt-4 min-h-[44px] w-full rounded-md border border-dashed border-[#c8a45c]/70 px-4 text-sm text-[#e6cf9c] transition-colors hover:bg-[#c8a45c]/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {C.inputs.addAnother}
            </button>
            {rows.length >= MAX_ROWS && <p className="mt-2 text-xs text-[#8aa094]">{C.inputs.maxRows}</p>}

            <div className="mt-5" role="group" aria-labelledby="jan-quick-label">
              <p id="jan-quick-label" className="text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]">
                {C.inputs.quickAddLabel}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {C.inputs.quickAdd.map((q) => (
                  <button
                    key={q.key}
                    type="button"
                    disabled={rows.length >= MAX_ROWS && !rows.some(isBlank)}
                    onClick={() => addRow({ instalments: q.instalments, interval: q.interval })}
                    className="min-h-[44px] rounded-full border border-[rgba(242,239,230,.2)] px-4 text-sm text-[var(--cream)] transition-colors hover:border-[#c8a45c] disabled:opacity-40"
                  >
                    + {q.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[.82rem] text-[#8aa094]">{C.inputs.quickAddHelp}</p>
            </div>
          </fieldset>

          <DealCard
            deal={deal}
            takeHome={takeHome}
            canAdd={rows.length < MAX_ROWS || rows.some(isBlank)}
            onChange={(patch) => {
              started();
              setDeal((d) => ({ ...d, ...patch }));
            }}
            onAdd={addDealToList}
            onClear={() => setDeal(EMPTY_DEAL)}
          />
        </div>

        {/* ------------------------------------------------ stack + result */}
        <div className="min-w-0 lg:sticky lg:top-24">
          <p className="mb-4 text-[.68rem] uppercase tracking-[.18em] text-[#c8a45c]">{C.stack.label}</p>

          {calc && hasResult ? (
            <Stack calc={calc} reduce={!!reduce} />
          ) : (
            <EmptyStack labels={calc?.stack.cycles.map((c) => c.label)} />
          )}

          {calc && hasResult && deal.price > 0 && (
            <p className="mt-3 flex items-center gap-2 text-[.78rem] text-[#8aa094]">
              <span aria-hidden="true" className="jan-ghost inline-block h-3 w-6 rounded-[2px]" />
              {C.stack.ghostLegend}
            </p>
          )}

          {calc && hasResult && (
            <>
              {/* 2.4 Free-on date */}
              <div className="mt-7 border-t border-[rgba(242,239,230,.12)] pt-5">
                {calc.last ? (
                  <>
                    <p className="font-serif text-2xl font-light leading-snug">
                      {C.stack.clearsOn} <i className="text-[#e6cf9c]">{formatLongDate(calc.last)}.</i>
                    </p>
                    <p className="mt-1 text-[.86rem] text-[#8aa094]">
                      {calc.paydaysToClear > 0
                        ? C.stack.paydaysUntilClear(calc.paydaysToClear)
                        : C.stack.clearBeforePayday}
                    </p>
                  </>
                ) : (
                  <p className="font-serif text-2xl font-light leading-snug">{C.stack.nothingToClear}</p>
                )}
              </div>

              <div className="mt-4 flex flex-col items-start gap-1">
                {calc.last && (
                  <button
                    type="button"
                    onClick={downloadCalendar}
                    className="min-h-[44px] text-sm text-[#e6cf9c] underline decoration-[#c8a45c]/50 underline-offset-4 hover:text-white"
                  >
                    {C.stack.calendar}
                  </button>
                )}
                <p className="text-[.78rem] leading-relaxed text-[#8a9c91]">{C.stack.hoursNote}</p>
                <p className="text-[.78rem] leading-relaxed text-[#8a9c91]">{C.stack.privacy}</p>
              </div>

              <Result
                calc={calc}
                focusLabel={focusLabel}
                offRows={offRows}
                dealActive={deal.price > 0}
                whatsappHref={whatsappHref}
                includePct={includePct}
                setIncludePct={setIncludePct}
                copied={copied}
                onWhatsApp={() => send('jan_whatsapp_click', { tier: calc.tier, rows: rowBucket(calc.running) })}
                onShare={shareResult}
                onSlip={saveSlip}
              />
            </>
          )}

          {!(calc && hasResult) && <p className="mt-4 text-[.78rem] leading-relaxed text-[#8a9c91]">{C.stack.privacy}</p>}
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// Pieces
// ===========================================================================

type Calc = {
  stack: ReturnType<typeof computeStack>;
  focus: ReturnType<typeof computeStack>['cycles'][number];
  share: number;
  sharePct: number;
  tier: Tier;
  oldPct: number;
  ghost: number[];
  withDealPct: number;
  dealCrosses: boolean;
  last: Date | null;
  paydaysToClear: number;
  heaviest: number;
  running: number;
};

function Stack({ calc, reduce }: { calc: Calc; reduce: boolean }) {
  const { cycles, focusIndex } = calc.stack;
  const aria =
    RESULT_COPY.stack.ariaPrefix + cycles.map((c) => `${c.fullLabel} ${pct(c.share)} percent`).join(', ') + '.';

  return (
    <div role="img" aria-label={aria} className="grid gap-2.5">
      {cycles.map((c, i) => {
        const isFocus = i === focusIndex;
        const fill = Math.min(1, c.share);
        const ghost = Math.max(0, Math.min(calc.ghost[i], 1 - fill));
        const over = c.share > 1;
        return (
          <div key={c.payday.getTime()} className="grid grid-cols-[2.75rem_1fr_3.75rem] items-center gap-3" aria-hidden="true">
            <span className={`text-sm ${isFocus ? 'font-medium text-[#e6cf9c]' : 'text-[#a9bcb0]'}`}>{c.label}</span>
            <div
              className={`relative overflow-hidden rounded-[3px] border ${
                isFocus ? 'h-11 border-[#c8a45c]' : 'h-7 border-[#8aa094]/35'
              }`}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#c8a45c]"
                initial={false}
                animate={{ width: `${fill * 100}%` }}
                transition={reduce ? { duration: 0 } : { duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
              />
              {ghost > 0 && (
                <motion.div
                  className="jan-ghost absolute inset-y-0"
                  initial={false}
                  animate={{ left: `${fill * 100}%`, width: `${ghost * 100}%` }}
                  transition={reduce ? { duration: 0 } : { duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
                />
              )}
            </div>
            <span
              className={`text-right font-serif tabular-nums ${
                isFocus ? 'text-xl text-[#e6cf9c]' : over ? 'text-base text-[#e6cf9c]' : 'text-base text-[var(--cream)]'
              }`}
            >
              {pct(c.share)}%
              {over && (
                <span className="ml-1 align-middle font-sans text-[.6rem] uppercase tracking-[.12em] text-[#e6cf9c]">
                  {RESULT_COPY.stack.over}
                </span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function EmptyStack({ labels }: { labels?: string[] }) {
  const list = labels ?? ['', '', '', '', '', ''];
  return (
    <div>
      <div className="grid gap-2.5" aria-hidden="true">
        {list.map((l, i) => (
          <div key={i} className="grid grid-cols-[2.75rem_1fr_3.75rem] items-center gap-3">
            <span className="text-sm text-[#a9bcb0]/70">{l}</span>
            <div className="h-7 rounded-[3px] border border-[#8aa094]/25" />
            <span className="text-right font-serif text-base text-[#8aa094]/50">—</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[.9rem] text-[#a9bcb0]">{RESULT_COPY.stack.empty}</p>
    </div>
  );
}

function Result({
  calc,
  focusLabel,
  offRows,
  dealActive,
  whatsappHref,
  includePct,
  setIncludePct,
  copied,
  onWhatsApp,
  onShare,
  onSlip,
}: {
  calc: Calc;
  focusLabel: string;
  offRows: Row[];
  dealActive: boolean;
  whatsappHref: string;
  includePct: boolean;
  setIncludePct: (v: boolean) => void;
  copied: boolean;
  onWhatsApp: () => void;
  onShare: () => void;
  onSlip: () => void;
}) {
  const C = RESULT_COPY;
  const committed = calc.focus.committed;
  const tier = C.tiers[calc.tier];
  const heaviest = calc.stack.cycles[calc.heaviest];
  const checkboxId = useId();

  return (
    <div className="mt-8 border-t border-[rgba(242,239,230,.12)] pt-7">
      {/* 3.1 Headline */}
      <div aria-live="polite">
      <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-[-.015em] md:text-[2.4rem]">
        {Math.round(committed) > 0 ? (
          <>
            {C.headline.gone(rands(committed), focusLabel)} <i className="text-[#e6cf9c]">{C.headline.goneGold}</i>
          </>
        ) : (
          <>
            {C.headline.nothing(focusLabel)} <i className="text-[#e6cf9c]">{C.headline.nothingGold}</i>
          </>
        )}
      </h2>

      {/* 2.5 what-if */}
      {offRows.length > 0 && (
        <p className="mt-3 text-[.92rem] text-[#e6cf9c]">
          {calc.oldPct === calc.sharePct
            ? C.whatIf.same(focusLabel, calc.sharePct)
            : offRows.length === 1
            ? C.whatIf.one(offRows[0].item.trim() || C.whatIf.fallbackName, focusLabel, calc.oldPct, calc.sharePct)
            : C.whatIf.many(offRows.length, focusLabel, calc.oldPct, calc.sharePct)}
        </p>
      )}

      {/* 2.6 deal */}
      {dealActive && (
        <p className="mt-3 text-[.92rem] text-[#e6cf9c]">
          {C.deal.withDeal(focusLabel, calc.sharePct, calc.withDealPct)}
          {calc.dealCrosses && (
            <>
              {' '}
              {C.deal.crossing(
                C.tierNames[calc.tier],
                C.tierNames[tierFor(calc.share + calc.ghost[calc.stack.focusIndex])],
              )}
            </>
          )}
        </p>
      )}

      {/* 3.2 Tier */}
      <p className="mt-4 text-[1rem] leading-relaxed text-[#a9bcb0]">
        <strong className="font-medium text-[var(--cream)]">{tier.title(focusLabel)}</strong> {tier.body(focusLabel)}
      </p>
      </div>

      {/* 3.3 Stats */}
      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
        <Stat label={C.stats.running} value={String(calc.running)} />
        <Stat label={C.stats.heaviest} value={`${heaviest.label} ${pct(heaviest.share)}%`} />
        {Math.round(calc.stack.after) > 0 && <Stat label={C.stats.owedAfter} value={rands(calc.stack.after)} />}
      </dl>

      {/* 3.5 Primary CTA */}
      <div className="mt-8">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
          className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-center text-base font-medium text-[#0a231a] shadow-lg transition-colors hover:bg-white sm:inline-flex sm:w-auto"
        >
          {C.whatsapp.label}
        </a>
        <p className="mt-2 text-[.8rem] text-[#8aa094]">{C.whatsapp.note}</p>
      </div>

      {/* 3.6 + 3.7 */}
      <div className="mt-7 border-t border-[rgba(242,239,230,.12)] pt-6">
        <label htmlFor={checkboxId} className="inline-flex min-h-[44px] cursor-pointer items-center gap-3 text-sm text-[#a9bcb0]">
          <input
            id={checkboxId}
            type="checkbox"
            checked={includePct}
            onChange={(e) => setIncludePct(e.target.checked)}
            className="h-5 w-5 accent-[#c8a45c]"
          />
          {C.slip.includePct}
        </label>
        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={onSlip}
            className="min-h-[44px] rounded-full border border-[#c8a45c] px-6 text-sm text-[#e6cf9c] transition-colors hover:bg-[#c8a45c]/10"
          >
            {C.slip.button}
          </button>
          <button
            type="button"
            onClick={onShare}
            className="min-h-[44px] text-sm text-[#e6cf9c] underline decoration-[#c8a45c]/50 underline-offset-4 hover:text-white"
          >
            {C.share.label(focusLabel)}
          </button>
          <span role="status" className="text-sm text-[#e6cf9c]">
            {copied ? C.share.copied : ''}
          </span>
        </div>
      </div>

      {/* 3.8 Tertiary */}
      <p className="mt-6 text-[.85rem] text-[#8aa094]">
        {C.email.lead}{' '}
        <Link href="/contact" className="text-[#e6cf9c] underline underline-offset-4 hover:text-white">
          {C.email.link}
        </Link>
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[.66rem] uppercase tracking-[.16em] text-[#8aa094]">{label}</dt>
      <dd className="mt-1 font-serif text-2xl font-light tabular-nums text-[#e6cf9c]">{value}</dd>
    </div>
  );
}

function RowCard({
  row,
  index,
  today,
  takeHome,
  onChange,
  onRemove,
  onToggle,
}: {
  row: Row;
  index: number;
  today: Date | null;
  takeHome: number;
  onChange: (patch: Partial<Row>) => void;
  onRemove: () => void;
  onToggle: () => void;
}) {
  const C = RESULT_COPY.inputs;
  const off = !row.included;
  const hours = hoursOfWork(row.price, takeHome);
  const dateValue = row.firstPayment || (today ? toISODate(today) : '');

  return (
    <li className="rounded-md border border-[rgba(242,239,230,.14)] bg-black/15 p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[.66rem] uppercase tracking-[.16em] text-[#8aa094]">{C.rowHeading(index)}</p>
        <div className="flex items-center">
          <button
            type="button"
            onClick={onToggle}
            aria-label={C.leaveOut}
            aria-pressed={off}
            title={C.leaveOut}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/5 ${
              off ? 'text-[#e6cf9c]' : 'text-[#a9bcb0]'
            }`}
          >
            {off ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={onRemove}
            aria-label={C.removeRow}
            title={C.removeRow}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#a9bcb0] transition-colors hover:bg-white/5 hover:text-white"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`transition-opacity ${off ? 'opacity-40' : ''}`}>
        <div className="mt-1 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${row.id}-item`} className="text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]">
              {C.itemLabel}
            </label>
            <input
              id={`${row.id}-item`}
              type="text"
              value={row.item}
              placeholder={index === 0 ? C.itemPlaceholder : ''}
              maxLength={40}
              onChange={(e) => onChange({ item: e.target.value })}
              className={`${inputClass} ${off ? 'line-through' : ''}`}
            />
          </div>
          <div>
            <MoneyInput
              id={`${row.id}-price`}
              label={C.priceLabel}
              placeholder={C.pricePlaceholder}
              value={row.price}
              onChange={(n) => onChange({ price: n })}
            />
            {hours && <HoursChip hours={hours} />}
          </div>
        </div>

        <ChipGroup
          className="mt-4"
          label={C.instalmentsLabel}
          options={C.instalmentOptions.map((n) => ({ value: n, label: String(n) }))}
          value={row.instalments}
          onChange={(v) => onChange({ instalments: v })}
          compact
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ChipGroup
            label={C.everyLabel}
            options={C.everyOptions}
            value={row.interval}
            onChange={(v) => onChange({ interval: v })}
            compact
          />
          <div>
            <label htmlFor={`${row.id}-date`} className="text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]">
              {C.firstPaymentLabel}
            </label>
            <input
              id={`${row.id}-date`}
              type="date"
              value={dateValue}
              onChange={(e) => onChange({ firstPayment: e.target.value })}
              className={`${inputClass} [color-scheme:dark]`}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

function DealCard({
  deal,
  takeHome,
  canAdd,
  onChange,
  onAdd,
  onClear,
}: {
  deal: Deal;
  takeHome: number;
  canAdd: boolean;
  onChange: (patch: Partial<Deal>) => void;
  onAdd: () => void;
  onClear: () => void;
}) {
  const C = RESULT_COPY.deal;
  const hours = hoursOfWork(deal.price, takeHome);
  return (
    <div className="mt-8 rounded-md border border-dashed border-[#c8a45c]/70 p-4 sm:p-5">
      <p className="text-[.68rem] uppercase tracking-[.18em] text-[#c8a45c]">{C.label}</p>
      <p className="mt-1 text-[.88rem] text-[#a9bcb0]">{C.helper}</p>
      <div className="mt-4">
        <MoneyInput
          id="jan-deal-price"
          label={C.priceLabel}
          placeholder={RESULT_COPY.inputs.pricePlaceholder}
          value={deal.price}
          onChange={(n) => onChange({ price: n })}
        />
        {hours && <HoursChip hours={hours} />}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ChipGroup
          label={RESULT_COPY.inputs.instalmentsLabel}
          options={C.instalmentOptions.map((n) => ({ value: n, label: String(n) }))}
          value={deal.instalments}
          onChange={(v) => onChange({ instalments: v })}
          compact
        />
        <ChipGroup
          label={RESULT_COPY.inputs.everyLabel}
          options={RESULT_COPY.inputs.everyOptions}
          value={deal.interval}
          onChange={(v) => onChange({ interval: v })}
          compact
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onAdd}
          disabled={!(deal.price > 0) || !canAdd}
          className="min-h-[44px] rounded-full bg-[var(--gold)] px-5 text-sm font-medium text-[#0a231a] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {C.add}
        </button>
        <button
          type="button"
          onClick={onClear}
          disabled={!(deal.price > 0)}
          className="min-h-[44px] rounded-full border border-[rgba(242,239,230,.2)] px-5 text-sm text-[var(--cream)] transition-colors hover:border-[#c8a45c] disabled:opacity-40"
        >
          {C.clear}
        </button>
      </div>
    </div>
  );
}

function HoursChip({ hours }: { hours: NonNullable<ReturnType<typeof hoursOfWork>> }) {
  return (
    <p className="mt-2 flex justify-end">
      <span className="rounded-full border border-[rgba(242,239,230,.14)] px-3 py-1 text-[.75rem] text-[#8aa094]">
        {hours.underAnHour ? RESULT_COPY.hours.under : RESULT_COPY.hours.hours(hours.hours)}
      </span>
    </p>
  );
}

const inputClass =
  'mt-2 block min-h-[48px] w-full rounded-md border border-[rgba(242,239,230,.18)] bg-black/20 px-3 text-base text-[var(--cream)] placeholder:text-[#8aa094]/60 hover:border-[rgba(242,239,230,.3)]';

/**
 * Rand input. Text, not a slider: formatted with spaces as you type
 * ("R18 500"), with the caret kept after the same digit.
 */
function MoneyInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  large,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: number;
  onChange: (n: number) => void;
  large?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const caretDigits = useRef<number | null>(null);
  const text = value > 0 ? `R${groupDigits(value)}` : '';

  useLayoutEffect(() => {
    const el = ref.current;
    const want = caretDigits.current;
    if (!el || want === null || document.activeElement !== el) return;
    caretDigits.current = null;
    let pos = 0;
    let seen = 0;
    while (pos < text.length && seen < want) {
      if (/\d/.test(text[pos])) seen += 1;
      pos += 1;
    }
    if (want === 0) pos = text.length ? 1 : 0;
    el.setSelectionRange(pos, pos);
  }, [text]);

  return (
    <div>
      <label
        htmlFor={id}
        className="text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          const el = e.target;
          const before = el.value.slice(0, el.selectionStart ?? el.value.length);
          caretDigits.current = before.replace(/\D/g, '').length;
          onChange(parseRands(el.value));
        }}
        className={`${inputClass} ${large ? 'font-serif text-2xl tabular-nums text-[#e6cf9c]' : 'tabular-nums'}`}
      />
    </div>
  );
}

function ChipGroup<T extends string | number>({
  label,
  options,
  value,
  onChange,
  className = '',
  compact,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  className?: string;
  compact?: boolean;
}) {
  const id = useId();
  return (
    <div className={className} role="group" aria-labelledby={id}>
      <p id={id} className="text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.value)}
              className={`min-h-[44px] rounded-full border text-sm transition-colors ${compact ? 'min-w-[44px] px-3' : 'px-4'} ${
                on
                  ? 'border-[#c8a45c] bg-[#c8a45c] text-[#0a231a]'
                  : 'border-[rgba(242,239,230,.2)] text-[var(--cream)] hover:border-[#c8a45c]'
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
