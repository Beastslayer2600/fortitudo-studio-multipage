'use client'

import { motion } from 'framer-motion'
import LifeInLayers from '@/components/guides/LifeInLayers'

// ===========================================================================
// COPY — the prose around the tool. Rewrite freely.
// (The tool's own strings live in TOOL_COPY in components/guides/LifeInLayers.tsx.)
// ===========================================================================
export const COPY = {
  breadcrumb: 'Guide · Interactive · Time',
  titleLine1: 'Your life,',
  titleGold: 'in layers.',
  subtitle:
    'One layer for every year you have lived. Enter your birth date and watch the stack build, from the year you were born to the year you turn sixty-five.',
  opening: [
    'A year feels long while you are inside it. Seen from a distance, it is one thin layer, laid down on top of the last.',
    'Most of us picture our working life as an open field. It is closer to a stack with a fixed height. Every year adds one layer. The layers already down cannot be moved. The ones above are still empty.',
    'The tool below draws yours. The events marked on it really happened, on those dates, inside your lifetime.',
  ],
  sections: [
    {
      number: '01',
      title: 'Why the middle layers matter most',
      paragraphs: [
        'The early layers are thin on money and thick on time. The late layers are the reverse. The ones in the middle, from your first payday to your forties, are where both overlap. Whatever is put down there carries the weight of everything stacked above it.',
      ],
      practice: 'Pick the next layer, not the next forty. Decide one thing this year’s layer should hold that last year’s didn’t.',
    },
    {
      number: '02',
      title: 'The layers you didn’t choose',
      paragraphs: [
        'Look at the dates on your stack. A crash, a lockdown, a change in how retirement savings work. None of them asked permission. A plan is not a way to avoid those layers. It is a way to make sure they land on something solid.',
      ],
      practice:
        'Ask what would happen to next year’s layer if your income stopped for three months. If you don’t know, that is the first thing to find out.',
    },
    {
      number: '03',
      title: 'Paydays, not years',
      paragraphs: [
        'Forty years sounds like plenty. Four hundred and eighty paydays sounds countable, because it is. Each one is a small decision about what gets built and what gets spent. Most of them are made by debit orders set up years ago and never looked at again.',
      ],
      practice:
        'On your next payday, open your bank app and read every debit order out loud. Keep the ones you would choose again today.',
    },
  ],
  // Compliance footer: keep verbatim.
  compliance: [
    'Gert Fourie, Financial Adviser, Liberty Group Limited (FSP 2409), Pretoria.\nWebsite: www.fortitudostudios.com   Contact: www.fortitudostudios.com/contact',
    'This tool provides general information, not personal financial advice. The figures are arithmetic based only on the date you entered. Any recommendation must follow a full analysis of your own circumstances, needs and objectives.',
  ],
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function LayersGuideClient() {
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
            {COPY.breadcrumb}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--cream)] leading-[1.05] tracking-tight mb-6"
          >
            {COPY.titleLine1} <i className="text-[#e6cf9c]">{COPY.titleGold}</i>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mb-10"
          >
            {COPY.subtitle}
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
        {COPY.opening.map((p, i) => (
          <p key={i} className="text-zinc-400 leading-relaxed text-base mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </section>

      {/* The tool */}
      <LifeInLayers />

      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24 space-y-24">
        {COPY.sections.map((section, i) => (
          <motion.div
            key={section.number}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-[var(--gold)]/60">{section.number}</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 leading-snug">{section.title}</h2>
            <div className="text-sm sm:text-base leading-relaxed space-y-5">
              {section.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 my-6">
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-4">In Practice</p>
                <p className="text-zinc-300 leading-relaxed">{section.practice}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Compliance */}
      <section className="border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-10 text-[.82rem] leading-relaxed text-zinc-500 space-y-2">
          {COPY.compliance.map((line, i) => (
            <p key={i} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}
