'use client'

import { motion } from 'framer-motion'
import JanuaryStack from '@/components/guides/JanuaryStack'
import GuideEndBlock from '../../components/GuideEndBlock'

// ===========================================================================
// COPY — placeholder prose for the page around the tool. Rewrite freely.
// (The tool's own strings live in RESULT_COPY in components/guides/JanuaryStack.tsx.)
// ===========================================================================
export const COPY = {
  breadcrumb: 'Guide · Interactive · Credit',
  titleLine1: 'How much of January have you',
  titleGold: 'already spent?',
  subtitle:
    'Pay later still gets paid. Ninety seconds to see how much of your next six paydays is already gone, before the money arrives.',
  opening: [
    'Splitting a price into four small payments is designed to remove one moment: the moment where paying hurts. Behavioural researchers call it the pain of paying. When it is removed, people spend more.',
    'Each instalment looks small on its own. That is the point. Nobody adds them up across the months, so nobody sees the total land on the same payday.',
    'The UK started regulating buy-now-pay-later in July 2026. In South Africa most of it still sits outside the National Credit Act. The person keeping track is you.',
    'The tool below adds them up.',
  ],
  sections: [
    {
      number: '01',
      title: 'Why instalments feel free',
      paragraphs: [
        'A full price is a single, clear loss. Four smaller payments spread that loss thin. Each one is easier to accept than the whole, and the first is often due before the purchase has even arrived.',
        'The cost has not changed. Only the feeling has. The decision is made at the moment of least pain, and the payments arrive later, when the decision is no longer in view.',
      ],
      practice:
        'Before you click pay later, write the total price and the four dates on one line. If the dates make you hesitate, that is the information.',
    },
    {
      number: '02',
      title: 'What a crowded January does to everything else',
      paragraphs: [
        'December pay often lands early. The stretch from there to January payday is the longest of the year, and it is the stretch with the most spending in it.',
        'Committed instalments come off the top. They are paid before groceries, before transport, before saving. Whatever is left has to cover everything else, and January is usually where that becomes visible.',
      ],
      practice: 'Look at the month with the highest bar, not the average.',
    },
    {
      number: '03',
      title: 'Three checks before you pay later',
      paragraphs: [
        'First: would I buy this today at full price? Second: which payday does the last instalment land on? Third: what else is already on that payday?',
        'None of these checks takes long. Each one moves the decision back to the moment it should have been made, with the whole price in view.',
      ],
      practice:
        'If you would not buy it at full price today, the instalments are the only thing making it affordable.',
    },
  ],
  bottomLineTitle: 'The Bottom Line',
  bottomLine: [
    'Pay later is not free money. It is next month’s money, committed today.',
    'Knowing how much of a payday is already spoken for does not require a spreadsheet. It requires adding up what you have already agreed to, once, before the next deal arrives.',
  ],
  seriesLabel: 'Guides',
  seriesLinks: [
    { href: '/guides', label: 'All guides' },
    { href: '/guides/why-saving-feels-painful', label: 'Why Saving Feels Painful' },
    { href: '/guides/loss-aversion', label: 'Loss Aversion Runs the Show' },
  ],
  // Compliance footer: keep verbatim.
  compliance: [
    'Gert Fourie — Financial Adviser, Liberty Group Limited (FSP 2409), Pretoria.',
    'Website: www.fortitudostudios.com   Contact: www.fortitudostudios.com/contact',
    'This tool provides general information, not personal financial advice. The result is an arithmetic estimate based only on what you entered. Any recommendation must follow a full analysis of your own circumstances, needs and objectives.',
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

export default function JanuaryGuideClient() {
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
            {COPY.titleLine1}{' '}
            <i className="text-[#e6cf9c]">{COPY.titleGold}</i>
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
      <JanuaryStack />

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

      {/* Bottom line */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border border-zinc-800 p-8">
          <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-5">{COPY.bottomLineTitle}</p>
          {COPY.bottomLine.map((p, i) => (
            <p key={i} className={`leading-relaxed ${i === 0 ? 'text-zinc-300 mb-4' : 'text-zinc-400'}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <GuideEndBlock hideJanuaryLink linksLabel={COPY.seriesLabel} links={COPY.seriesLinks} />

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
