'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import { RETIRE, buildLabels, compute, layoutLabels, nf, type LayersState, type MomentInput } from '@/lib/layers'

// ===========================================================================
// TOOL_COPY — every visible string in the tool. Edit wording here.
// ===========================================================================
export const TOOL_COPY = {
  dobLabel: 'Your birth date',
  momentsIntro: 'Add up to three of your own moments. Optional.',
  momentPlaceholders: ['First job', 'Matric', 'First car'],
  yearPlaceholder: 'Year',
  stats: { lived: 'Layers laid', left: 'Layers to 65', paydays: 'Paydays left', work: 'Working years used' },
  empty: 'Enter your birth date to lay down the first layer.',
  canvasLabel: (age: number, left: number, months: number) =>
    `${age} layers laid, ${left} layers to 65, ${months} paydays left.`,
  canvasLabelEmpty: 'Your life drawn as stacked yearly layers',
  result: {
    before: (layer: number) => `You are on layer ${layer}. Between now and sixty-five there are `,
    paydays: (n: string) => `${n} paydays`,
    after: ' left. Each one is a layer you either build on, or spend.',
    done: `You have laid all ${RETIRE} working layers. What is stacked now is what has to carry the rest.`,
    small:
      'Arithmetic on the date you entered: months until your 65th birthday, counting one payday a month. Not a forecast.',
  },
  whatsapp: {
    label: 'Send Gert my layers on WhatsApp',
    number: '27773866299',
    message: (layer: number, paydays: string) =>
      `Hi Gert. I ran Life in Layers. I'm on layer ${layer}, with ${paydays} paydays left before 65. Where would you start?`,
    note: 'Opens WhatsApp with the message already written. No form, no call list. Prefer email?',
    contactLink: 'Contact page',
  },
  share: {
    label: 'Share Life in Layers',
    copied: 'Link copied',
    title: 'Life in Layers',
    text: 'One layer for every year. How many paydays do you have left?',
    url: 'https://www.fortitudostudios.com/guides/life-in-layers',
  },
  privacy: 'These numbers stay in your browser. Nothing is sent anywhere until you choose to send it.',
}

const C = { cream: '#F8F4EA', gold: '#BCA472' }

// Analytics: event names only. Never the birth date, age, paydays or moment text.
function send(name: string, props?: Record<string, string>) {
  try {
    track(name, props)
  } catch {
    /* analytics must never break the tool */
  }
}

const fieldLine =
  'w-full border-0 border-b border-[rgba(248,244,234,.32)] bg-transparent font-serif text-[var(--cream)] placeholder:text-[rgba(248,244,234,.3)] rounded-none outline-none focus-visible:border-[var(--gold)] [color-scheme:dark]'

function todayISO() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

export default function LifeInLayers() {
  const [dob, setDob] = useState('')
  const [moments, setMoments] = useState<MomentInput[]>([
    { text: '', year: '' },
    { text: '', year: '' },
    { text: '', year: '' },
  ])
  const [shareText, setShareText] = useState<string>(TOOL_COPY.share.label)
  const [maxDate, setMaxDate] = useState<string | undefined>(undefined)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef<LayersState | null>(null)
  const startRef = useRef(0)
  const rafRef = useRef(0)
  const reduceRef = useRef(false)
  const startedRef = useRef(false)
  const shownRef = useRef(false)
  const momentsSent = useRef<Set<number>>(new Set())

  const state = useMemo(() => compute(dob, moments), [dob, moments])
  stateRef.current = state

  useEffect(() => {
    setMaxDate(todayISO())
    reduceRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const draw = useCallback((t: number) => {
    const cv = canvasRef.current
    const box = boxRef.current
    const s = stateRef.current
    if (!cv || !box) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const reduce = reduceRef.current
    const w = box.clientWidth
    const total = RETIRE + 1
    const lh = Math.max(7, Math.min(11, Math.floor(620 / total)))
    const h = total * lh + 40
    const dpr = window.devicePixelRatio || 1
    cv.width = Math.round(w * dpr)
    cv.height = Math.round(h * dpr)
    cv.style.height = h + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, w, h)
    if (!s) return

    const narrow = w < 520
    const barW = narrow ? Math.round(w * 0.38) : Math.round(w * 0.46)
    const top = 20
    const yOf = (yr: number) => top + (total - 1 - (yr - s.by)) * lh // oldest at the bottom
    const lived = s.age + 1
    const per = reduce ? 0 : 34 // ms per layer
    const shown = reduce ? lived : Math.min(lived, Math.floor(t / per) + 1)
    const futureA = reduce ? 1 : Math.max(0, Math.min(1, (t - lived * per) / 700))

    // future layers: faint hairline outlines
    ctx.globalAlpha = futureA
    for (let i = lived; i < total; i++) {
      const y = yOf(s.by + i)
      ctx.strokeStyle = 'rgba(248,244,234,0.16)'
      ctx.lineWidth = 1
      ctx.strokeRect(0.5, y + 0.5, barW - 1, lh - 2)
    }
    ctx.globalAlpha = 1

    // lived layers: cream, stronger toward the present; this year's in gold
    for (let i = 0; i < shown; i++) {
      const y = yOf(s.by + i)
      const k = i / Math.max(1, lived - 1)
      const a = 0.18 + 0.55 * k
      ctx.fillStyle = i === lived - 1 ? C.gold : `rgba(248,244,234,${a.toFixed(3)})`
      const inset = i % 2 ? 0 : 1
      ctx.fillRect(inset, y, barW - inset * 2, lh - 2)
    }

    if (shown < lived) return

    const gap = narrow ? 30 : 32
    const lx = barW + (narrow ? 14 : 34)
    const placed = layoutLabels(buildLabels(s), yOf, lh, gap)
    const fade = reduce ? 1 : Math.max(0, Math.min(1, (t - lived * per - 200) / 600))
    ctx.globalAlpha = fade
    placed.forEach((l) => {
      if (l.ty < 8) return
      const col =
        l.kind === 'now' ? C.gold : l.kind === 'future' ? 'rgba(248,244,234,0.5)' : l.kind === 'me' ? C.cream : 'rgba(248,244,234,0.78)'
      ctx.strokeStyle = l.kind === 'now' ? C.gold : 'rgba(248,244,234,0.28)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(barW + 4, l.ay)
      ctx.lineTo(lx - 8, l.ty)
      ctx.stroke()
      ctx.fillStyle = col
      ctx.font = `${l.kind === 'now' ? 'italic ' : ''}${narrow ? 14 : 16}px Georgia, serif`
      ctx.textBaseline = 'alphabetic'
      ctx.fillText(l.text, lx, l.ty + 1, w - lx - 4)
      ctx.fillStyle = 'rgba(248,244,234,0.48)'
      ctx.font = `${narrow ? 10 : 11}px system-ui, sans-serif`
      ctx.fillText(l.sub.toUpperCase(), lx, l.ty + 15, w - lx - 4)
    })
    ctx.globalAlpha = 1
  }, [])

  const run = useCallback(
    (animate: boolean) => {
      cancelAnimationFrame(rafRef.current)
      const s = stateRef.current
      if (!s) {
        draw(0)
        return
      }
      if (!animate || reduceRef.current) {
        draw(1e9)
        return
      }
      startRef.current = 0
      const lived = s.age + 1
      const loop = (ts: number) => {
        if (!startRef.current) startRef.current = ts
        const t = ts - startRef.current
        draw(t)
        if (t < lived * 34 + 1400) rafRef.current = requestAnimationFrame(loop)
      }
      rafRef.current = requestAnimationFrame(loop)
    },
    [draw],
  )

  // A new birth date replays the stack build; moment edits only redraw.
  const animatedFor = useRef('')
  useEffect(() => {
    const animate = !!state && animatedFor.current !== state.dob
    animatedFor.current = state ? state.dob : ''
    run(animate)
    if (state && !shownRef.current) {
      shownRef.current = true
      send('layers_result_shown')
    }
    return () => cancelAnimationFrame(rafRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, run])

  // Redraw on resize (finished state, no replay).
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    let lastW = box.clientWidth
    const ro = new ResizeObserver(() => {
      if (box.clientWidth === lastW) return
      lastW = box.clientWidth
      if (stateRef.current) draw(1e9)
    })
    ro.observe(box)
    return () => ro.disconnect()
  }, [draw])

  const onDob = (v: string) => {
    if (!startedRef.current) {
      startedRef.current = true
      send('layers_started')
    }
    setDob(v)
  }

  const onMoment = (i: number, patch: Partial<MomentInput>) => {
    setMoments((prev) => {
      const next = prev.map((m, j) => (j === i ? { ...m, ...patch } : m))
      return next
    })
  }

  // Count a moment once, when it first becomes valid on the stack.
  useEffect(() => {
    if (!state) return
    moments.forEach((m, i) => {
      const valid = state.moments.some((sm) => sm.text === m.text.trim() && String(sm.year) === m.year.trim())
      if (valid && !momentsSent.current.has(i)) {
        momentsSent.current.add(i)
        send('layers_moment_added')
      }
    })
  }, [state, moments])

  const paydays = state ? nf(state.months) : ''
  const waHref = state
    ? `https://wa.me/${TOOL_COPY.whatsapp.number}?text=${encodeURIComponent(TOOL_COPY.whatsapp.message(state.layer, paydays))}`
    : '#'

  const onShare = async () => {
    const d = TOOL_COPY.share
    try {
      if (navigator.share) {
        await navigator.share({ title: d.title, text: d.text, url: d.url })
        send('layers_share', { method: 'native' })
      } else {
        await navigator.clipboard.writeText(d.url)
        setShareText(d.copied)
        send('layers_share', { method: 'copy' })
      }
    } catch {
      /* dismissed share sheet or blocked clipboard */
    }
  }

  const T = TOOL_COPY
  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6" aria-label="Life in Layers tool">
      <div className="grid gap-8 rounded-2xl border border-[rgba(242,239,230,.12)] bg-[#0a231a] p-5 sm:p-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12 lg:p-10">
        {/* Inputs + stats */}
        <div>
          <div className="mb-6">
            <label htmlFor="lil-dob" className="mb-2 block text-xs uppercase tracking-[.16em] text-[rgba(248,244,234,.62)]">
              {T.dobLabel}
            </label>
            <input
              id="lil-dob"
              type="date"
              min="1950-01-01"
              max={maxDate}
              autoComplete="bday"
              value={dob}
              onChange={(e) => onDob(e.target.value)}
              className={`${fieldLine} min-h-[48px] py-1.5 text-2xl`}
            />
          </div>

          <div className="mt-2 border-t border-[rgba(248,244,234,.14)] pt-5">
            <p className="mb-4 text-sm text-[rgba(248,244,234,.62)]">{T.momentsIntro}</p>
            {moments.map((m, i) => (
              <div key={i} className="mb-3 grid grid-cols-[1fr_92px] gap-3.5">
                <input
                  type="text"
                  maxLength={28}
                  placeholder={T.momentPlaceholders[i]}
                  aria-label={`Moment ${i + 1}`}
                  value={m.text}
                  onChange={(e) => onMoment(i, { text: e.target.value })}
                  className={`${fieldLine} min-h-[44px] py-1.5 text-[1.05rem]`}
                />
                <input
                  type="number"
                  inputMode="numeric"
                  min={1950}
                  max={2100}
                  placeholder={T.yearPlaceholder}
                  aria-label={`Moment ${i + 1} year`}
                  value={m.year}
                  onChange={(e) => onMoment(i, { year: e.target.value })}
                  className={`${fieldLine} min-h-[44px] py-1.5 text-[1.05rem]`}
                />
              </div>
            ))}
          </div>

          <div
            className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-[rgba(248,244,234,.14)] pt-6"
            aria-live="polite"
          >
            <Stat n={state ? String(state.age) : '–'} k={T.stats.lived} />
            <Stat n={state ? String(state.left) : '–'} k={T.stats.left} gold />
            <Stat n={state ? paydays : '–'} k={T.stats.paydays} gold />
            <Stat n={state ? `${state.workUsed}%` : '–'} k={T.stats.work} />
          </div>
        </div>

        {/* Canvas */}
        <div ref={boxRef} className="relative min-h-[420px]">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={state ? T.canvasLabel(state.age, state.left, state.months) : T.canvasLabelEmpty}
            className="block w-full"
          />
          {!state && (
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center font-serif text-xl italic text-[rgba(248,244,234,.62)]">
              {T.empty}
            </div>
          )}
        </div>

        {/* Result + CTA */}
        {state && (
          <div className="border-t border-[rgba(248,244,234,.14)] pt-7 lg:col-span-2">
            <p className="mb-3 max-w-[780px] font-serif text-[clamp(1.35rem,3.2vw,1.9rem)] leading-[1.3] text-[var(--cream)]">
              {state.months > 0 ? (
                <>
                  {T.result.before(state.layer)}
                  <em className="text-[var(--gold)]">{T.result.paydays(paydays)}</em>
                  {T.result.after}
                </>
              ) : (
                T.result.done
              )}
            </p>
            <p className="text-[.82rem] text-[rgba(248,244,234,.62)]">{T.result.small}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => send('layers_whatsapp_click')}
                className="inline-flex min-h-[48px] items-center justify-center bg-[var(--gold)] px-6 py-3 text-[.95rem] font-semibold text-[#0a231a] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                {T.whatsapp.label}
              </a>
              <button
                type="button"
                onClick={onShare}
                className="min-h-[44px] text-[.95rem] text-[var(--gold)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                {shareText}
              </button>
            </div>
            <p className="mt-3 text-[.82rem] text-[rgba(248,244,234,.62)]">
              {T.whatsapp.note}{' '}
              <Link href="/contact" className="text-[var(--gold)] underline underline-offset-4">
                {T.whatsapp.contactLink}
              </Link>
            </p>
          </div>
        )}
      </div>
      <p className="mt-4 text-[.82rem] text-[rgba(248,244,234,.62)]">{T.privacy}</p>
    </section>
  )
}

function Stat({ n, k, gold = false }: { n: string; k: string; gold?: boolean }) {
  return (
    <div>
      <div className={`font-serif text-[2.1rem] leading-none tabular-nums ${gold ? 'text-[var(--gold)]' : 'text-[var(--cream)]'}`}>{n}</div>
      <div className="mt-2 text-xs uppercase tracking-[.14em] text-[rgba(248,244,234,.62)]">{k}</div>
    </div>
  )
}
