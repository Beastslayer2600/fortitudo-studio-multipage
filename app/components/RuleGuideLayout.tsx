'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export type RuleSection = {
  number: string
  title: string
  paragraphs: string[]
  quote?: string
  practice: string
}

export type RuleGuideProps = {
  ruleNumber: number
  totalRules: number
  titleLine1: string
  titleLine2: string
  subtitle: string
  intro: string[]
  sections: RuleSection[]
  bottomLineTitle: string
  bottomLineParagraphs: string[]
  hubHref: string
  hubLabel: string
  prevHref?: string
  prevLabel?: string
  nextHref?: string
  nextLabel?: string
}

export default function RuleGuideLayout({
  ruleNumber,
  totalRules,
  titleLine1,
  titleLine2,
  subtitle,
  intro,
  sections,
  bottomLineTitle,
  bottomLineParagraphs,
  hubHref,
  hubLabel,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: RuleGuideProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-28 pb-16 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-6"
          >
            Guide · Wealth Mindset · Rule {ruleNumber} of {totalRules}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight mb-6"
          >
            {titleLine1}
            <br />
            <span className="text-zinc-500">{titleLine2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mb-10"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-px bg-gradient-to-r from-[#c9a84c]/40 via-zinc-700 to-transparent"
          />
        </div>
      </section>

      {/* Series nav */}
      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-widest text-zinc-600">
          <Link href={hubHref} className="hover:text-[#c9a84c] transition-colors">
            {hubLabel}
          </Link>
          {prevHref && (
            <>
              <span>·</span>
              <Link href={prevHref} className="hover:text-[#c9a84c] transition-colors">
                ← {prevLabel}
              </Link>
            </>
          )}
          {nextHref && (
            <>
              <span>·</span>
              <Link href={nextHref} className="hover:text-[#c9a84c] transition-colors">
                {nextLabel} →
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        {intro.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="text-zinc-400 leading-relaxed text-base mb-4 last:mb-0"
          >
            {p}
          </motion.p>
        ))}
      </section>

      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-24">
        {sections.map((section, i) => (
          <motion.div
            key={section.number}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-[#c9a84c]/50">{section.number}</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 leading-snug">
              {section.title}
            </h2>
            <div className="text-sm sm:text-base leading-relaxed space-y-5">
              {section.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
              {section.quote && (
                <div className="border-l-2 border-[#c9a84c]/40 pl-6 py-2 my-6">
                  <p className="text-zinc-300 leading-relaxed italic font-light">{section.quote}</p>
                </div>
              )}
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 my-6">
                <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">In Practice</p>
                <p className="text-zinc-300 leading-relaxed">{section.practice}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bottom line */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-zinc-800 p-8"
        >
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-5">{bottomLineTitle}</p>
          {bottomLineParagraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed ${i === 0 ? 'text-zinc-300 mb-4' : 'text-zinc-400'}`}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto px-6 py-24 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-6">Put it into practice</p>
          <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
            A mindset is the start.
            <br />
            A plan makes it real.
          </h3>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            Free consultation. No pressure. Just a clear, honest conversation about where you are and
            where you want to be.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm uppercase tracking-widest font-medium hover:bg-[#e0bc6a] transition-colors duration-300"
          >
            Book a Free Consultation
          </Link>
          <div className="mt-12 pt-12 border-t border-zinc-800 flex flex-col gap-3">
            <p className="text-xs text-zinc-600 mb-1 uppercase tracking-widest">Continue the series</p>
            <Link
              href={hubHref}
              className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {hubLabel} →
            </Link>
            {nextHref && (
              <Link
                href={nextHref}
                className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {nextLabel} →
              </Link>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
