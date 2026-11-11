'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { track } from '@vercel/analytics'
import GuideEndBlock from '../../components/GuideEndBlock'
import { groupDigits, parseRands, rands } from '@/lib/januaryStack'

// ===========================================================================
// WORTH_COPY — every user-facing string on this page. Edit wording here; the
// logic below only reads from this object.
// ===========================================================================
export const WORTH_COPY = {
  breadcrumb: 'Guide · Interactive · Protection',
  titleLine1: 'What are you',
  titleGold: 'worth?',
  subtitle:
    'You know what your car is worth. You have probably never worked out what you are. Sixty seconds to see the number.',
  opening: [
    'Your income is the asset every other plan depends on. The bond, the car, the retirement contributions, the debit orders that leave on the first of the month: each one assumes that income keeps arriving.',
    'Most people can tell you what their car is worth to within a few thousand rand. Very few have ever added up what their working years are worth.',
    'It is simple arithmetic, and the number is usually larger than people expect. The tool below works it out.',
  ],

  tool: {
    ariaLabel: 'What are you worth calculator',
    label: 'Your working years, added up',
    ageLabel: 'Your age',
    agePlaceholder: '28',
    ageHint: 'Enter an age from 18 to 64.',
    payLabel: 'Monthly take-home pay',
    payPlaceholder: 'R18 500',
    increaseLabel: 'Expected yearly increase',
    increaseHelper: 'Leave at 0% for the most cautious number.',
    privacy: 'These numbers stay in your browser. Nothing is sent anywhere until you choose to send it.',
  },

  result: {
    lead: 'Between now and 65, you are set to earn',
    asset: 'That is the largest asset you will ever own. It is also the one most people have never insured.',
    small: 'Arithmetic on what you entered. Before tax and inflation. Not a forecast.',
  },

  question: 'If you could not work for a year, how much of that income keeps arriving?',
  answers: [
    {
      key: 'all',
      label: 'All of it',
      reply: 'Good. Worth confirming what it pays, for how long, and after what waiting period.',
    },
    {
      key: 'some',
      label: 'Some of it',
      reply: "The gap between some and all is the part your debit orders don't know about.",
    },
    {
      key: 'none',
      label: 'None of it',
      reply: 'Then the asset paying for everything else is the one thing left uncovered.',
    },
    {
      key: 'unknown',
      label: "I don't know",
      reply: "That's the most common answer. It is also the cheapest one to fix: it's a question, not a purchase.",
    },
  ],

  whatsapp: {
    label: 'Send Gert my number on WhatsApp',
    number: '27773866299',
    note: 'Opens WhatsApp with the message already written. No form, no call list.',
    message: (lifetimeIncome: string, answer: string) =>
      `Hi Gert. I ran the What Are You Worth test. My number is R${lifetimeIncome}. ` +
      `Protected if I can't work: ${answer}. What should I check first?`,
  },
  email: { lead: 'Prefer email?', link: 'Contact page' },

  close: {
    number: '01',
    title: 'Income is protected in layers',
    paragraphs: [
      'No single decision protects an income. It is done in layers, each one covering what the one before it cannot.',
      'The first is a cash reserve. Money you can reach quickly, so a short interruption does not turn into debt.',
      'The second is cover that replaces income. If illness or injury stops you working, part of your pay keeps arriving while you recover, and the plans built on it carry on.',
      'The third is a plan that is reviewed. Income changes over a career. Cover arranged at the start drifts out of step unless someone checks it against what you earn now.',
      'None of this starts with a product. It starts with the number above, and an honest answer to what happens to it if you cannot work.',
    ],
  },

  seriesLabel: 'Guides',
  seriesLinks: [
    { href: '/guides', label: 'All guides' },
    { href: '/guides/building-wealth-on-a-starter-salary', label: 'Building Wealth on a Starter Salary' },
    { href: '/guides/the-cost-of-waiting', label: "Time Is the One Input You Can't Buy Back" },
  ],

  // Compliance footer: keep verbatim.
  compliance: {
    adviser: 'Gert Fourie, Financial Adviser, Liberty Group Limited (FSP 2409), Pretoria.',
    websiteLead: 'Website:',
    website: { label: 'www.fortitudostudios.com', href: 'https://www.fortitudostudios.com' },
    contactLead: 'Contact:',
    contact: { label: 'www.fortitudostudios.com/contact', href: 'https://www.fortitudostudios.com/contact' },
    disclaimer:
      'This tool provides general information, not personal financial advice. The result is an arithmetic estimate based only on what you entered. Any recommendation must follow a full analysis of your own circumstances, needs and objectives.',
  },
}

type AnswerKey = (typeof WORTH_COPY.answers)[number]['key']

// ===========================================================================
// Logic
// ===========================================================================
export const RETIREMENT_AGE = 65
const MIN_AGE = 18
const MAX_AGE = 64
const MAX_INCREASE = 8

/** Sum over each remaining year of pay x 12 x (1 + increase)^year, year 0 = this year. */
export function lifetimeIncome(age: number, monthlyPay: number, increasePct: number): number {
  const years = RETIREMENT_AGE - age
  const g = 1 + increasePct / 100
  let total = 0
  for (let year = 0; year < years; year++) total += monthlyPay * 12 * Math.pow(g, year)
  return Math.round(total)
}

function parseAge(s: string): number | null {
  if (!/^\d{1,2}$/.test(s.trim())) return null
  const n = parseInt(s, 10)
  return n >= MIN_AGE && n <= MAX_AGE ? n : null
}

// Analytics: event names and the answer key only. Never rand amounts or age.
function send(name: string, props?: Record<string, string>) {
  try {
    track(name, props)
  } catch {
    /* analytics must never break the tool */
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const labelClass = 'text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]'
const inputClass =
  'mt-2 block min-h-[48px] w-full rounded-md border border-[rgba(242,239,230,.18)] bg-black/20 px-3 text-base text-[var(--cream)] placeholder:text-[#8aa094]/60 hover:border-[rgba(242,239,230,.3)]'
const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]'

// ===========================================================================
// Page
// ===========================================================================
export default function WorthGuideClient() {
  const C = WORTH_COPY
  return (
    <main className="min-h-screen bg-[#0b0d10] text-zinc-300">
      {/* Hero */}
      <section className="relative min-h-[44vh] flex items-end overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-28 pb-14 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] mb-6"
          >
            {C.breadcrumb}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--cream)] leading-[1.05] tracking-tight mb-6"
          >
            {C.titleLine1} <i className="text-[#e6cf9c]">{C.titleGold}</i>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mb-10"
          >
            {C.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-px bg-gradient-to-r from-[var(--gold)]/40 via-zinc-700 to-transparent"
          />
        </div>
      </section>

      {/* Opening */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-14">
        {C.opening.map((p, i) => (
          <p key={i} className="text-zinc-400 leading-relaxed text-base mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </section>

      {/* The tool */}
      <WorthTool />

      {/* Close */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-[var(--gold)]/60">{C.close.number}</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h2 className="text-xl sm:text-2xl font-light text-white mb-6 leading-snug">{C.close.title}</h2>
          <div className="text-sm sm:text-base leading-relaxed space-y-5">
            {C.close.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <GuideEndBlock linksLabel={C.seriesLabel} links={C.seriesLinks} />

      {/* Compliance */}
      <section className="border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-10 text-[.82rem] leading-relaxed text-zinc-500 space-y-2">
          <p>{C.compliance.adviser}</p>
          <p className="whitespace-pre-wrap">
            {C.compliance.websiteLead}{' '}
            <a href={C.compliance.website.href} className="underline underline-offset-2 hover:text-zinc-300">
              {C.compliance.website.label}
            </a>
            {'   '}
            {C.compliance.contactLead}{' '}
            <a href={C.compliance.contact.href} className="underline underline-offset-2 hover:text-zinc-300">
              {C.compliance.contact.label}
            </a>
          </p>
          <p>{C.compliance.disclaimer}</p>
        </div>
      </section>
    </main>
  )
}

// ===========================================================================
// Tool
// ===========================================================================
function WorthTool() {
  const C = WORTH_COPY
  const reduceMotion = useReducedMotion()

  const [ageText, setAgeText] = useState('')
  const [pay, setPay] = useState(0)
  const [increase, setIncrease] = useState(0)
  const [answer, setAnswer] = useState<AnswerKey | null>(null)

  const fired = useRef<Set<string>>(new Set())
  const once = (name: string, props?: Record<string, string>) => {
    if (fired.current.has(name)) return
    fired.current.add(name)
    send(name, props)
  }

  const age = parseAge(ageText)
  const showAgeHint = ageText.trim().length >= 2 && age === null
  const total = useMemo(
    () => (age !== null && pay > 0 ? lifetimeIncome(age, pay, increase) : null),
    [age, pay, increase],
  )

  useEffect(() => {
    if (total !== null) once('worth_result_shown')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  const chosen = C.answers.find((a) => a.key === answer) ?? null
  const whatsappHref =
    total !== null && chosen
      ? `https://wa.me/${C.whatsapp.number}?text=${encodeURIComponent(
          C.whatsapp.message(groupDigits(total), chosen.label),
        )}`
      : '#'

  const started = () => once('worth_started')

  return (
    <section
      aria-label={C.tool.ariaLabel}
      className="scroll-mt-24 border-y border-[rgba(242,239,230,.12)] bg-[#0a231a] py-12 text-[var(--cream)] md:py-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-6 text-[.68rem] uppercase tracking-[.18em] text-[#c8a45c]">{C.tool.label}</p>

        {/* Inputs */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="worth-age" className={labelClass}>
              {C.tool.ageLabel}
            </label>
            <input
              id="worth-age"
              type="number"
              inputMode="numeric"
              min={MIN_AGE}
              max={MAX_AGE}
              step={1}
              autoComplete="off"
              placeholder={C.tool.agePlaceholder}
              value={ageText}
              aria-invalid={showAgeHint || undefined}
              aria-describedby={showAgeHint ? 'worth-age-hint' : undefined}
              onChange={(e) => {
                started()
                setAgeText(e.target.value.replace(/\D/g, '').slice(0, 2))
              }}
              className={`${inputClass} ${focusRing} font-serif text-2xl tabular-nums text-[#e6cf9c]`}
            />
            {showAgeHint && (
              <p id="worth-age-hint" className="mt-2 text-[.82rem] text-[#e6cf9c]">
                {C.tool.ageHint}
              </p>
            )}
          </div>

          <MoneyInput
            id="worth-pay"
            label={C.tool.payLabel}
            placeholder={C.tool.payPlaceholder}
            value={pay}
            onChange={(n) => {
              started()
              setPay(n)
            }}
          />
        </div>

        <div className="mt-7">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="worth-increase" className={labelClass}>
              {C.tool.increaseLabel}
            </label>
            <span aria-hidden="true" className="font-serif text-2xl tabular-nums text-[#e6cf9c]">
              {increase}%
            </span>
          </div>
          <input
            id="worth-increase"
            type="range"
            min={0}
            max={MAX_INCREASE}
            step={0.5}
            value={increase}
            aria-valuetext={`${increase}%`}
            aria-describedby="worth-increase-help"
            onChange={(e) => {
              started()
              setIncrease(Number(e.target.value))
            }}
            className="fs-range mt-3 w-full cursor-pointer"
          />
          <p id="worth-increase-help" className="mt-1 text-[.82rem] text-[#8aa094]">
            {C.tool.increaseHelper}
          </p>
        </div>

        <p className="mt-6 text-[.78rem] leading-relaxed text-[#8a9c91]">{C.tool.privacy}</p>

        {/* Result */}
        <div aria-live="polite">
          {total !== null && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 border-t border-[rgba(242,239,230,.12)] pt-8"
            >
              <h2 className="font-serif text-3xl font-light leading-[1.12] tracking-[-.015em] md:text-[2.6rem]">
                {C.result.lead}{' '}
                <i className="whitespace-nowrap tabular-nums text-[#e6cf9c]">{rands(total)}.</i>
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-[#a9bcb0]">{C.result.asset}</p>
              <p className="mt-3 text-[.78rem] leading-relaxed text-[#8a9c91]">{C.result.small}</p>
            </motion.div>
          )}
        </div>

        {/* Question */}
        {total !== null && (
          <div className="mt-10 border-t border-[rgba(242,239,230,.12)] pt-8">
            <p id="worth-question" className="font-serif text-xl font-light leading-snug md:text-2xl">
              {C.question}
            </p>
            <div role="group" aria-labelledby="worth-question" className="mt-5 grid grid-cols-2 gap-3">
              {C.answers.map((a) => {
                const on = answer === a.key
                return (
                  <button
                    key={a.key}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setAnswer(a.key)
                      send('worth_answer', { answer: a.key })
                    }}
                    className={`min-h-[64px] rounded-xl border px-4 py-3 text-base transition-colors ${focusRing} ${
                      on
                        ? 'border-[#c8a45c] bg-[#c8a45c]/15 text-[#e6cf9c]'
                        : 'border-[rgba(242,239,230,.2)] text-[var(--cream)] hover:border-[#c8a45c]'
                    }`}
                  >
                    {a.label}
                  </button>
                )
              })}
            </div>

            <div aria-live="polite">
              {chosen && (
                <motion.div
                  key={chosen.key}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mt-6 text-[1.05rem] leading-relaxed text-[#e6cf9c]">{chosen.reply}</p>

                  <div className="mt-6">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => send('worth_whatsapp_click', { answer: chosen.key })}
                      className={`flex min-h-[52px] w-full items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-center text-base font-medium text-[#0a231a] shadow-lg transition-colors hover:bg-white sm:inline-flex sm:w-auto ${focusRing}`}
                    >
                      {C.whatsapp.label}
                    </a>
                    <p className="mt-2 text-[.8rem] text-[#8aa094]">{C.whatsapp.note}</p>
                  </div>

                  <p className="mt-5 text-[.85rem] text-[#8aa094]">
                    {C.email.lead}{' '}
                    <Link
                      href="/contact"
                      className={`text-[#e6cf9c] underline underline-offset-4 hover:text-white ${focusRing}`}
                    >
                      {C.email.link}
                    </Link>
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * Rand input, formatted with spaces as you type ("R18 500"), with the caret
 * kept after the same digit. Same behaviour as the January test.
 */
function MoneyInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string
  label: string
  placeholder: string
  value: number
  onChange: (n: number) => void
}) {
  const ref = useRef<HTMLInputElement>(null)
  const caretDigits = useRef<number | null>(null)
  const text = value > 0 ? `R${groupDigits(value)}` : ''

  useLayoutEffect(() => {
    const el = ref.current
    const want = caretDigits.current
    if (!el || want === null || document.activeElement !== el) return
    caretDigits.current = null
    let pos = 0
    let seen = 0
    while (pos < text.length && seen < want) {
      if (/\d/.test(text[pos])) seen += 1
      pos += 1
    }
    if (want === 0) pos = text.length ? 1 : 0
    el.setSelectionRange(pos, pos)
  }, [text])

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
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
          const el = e.target
          const before = el.value.slice(0, el.selectionStart ?? el.value.length)
          caretDigits.current = before.replace(/\D/g, '').length
          onChange(parseRands(el.value))
        }}
        className={`${inputClass} ${focusRing} font-serif text-2xl tabular-nums text-[#e6cf9c]`}
      />
    </div>
  )
}
