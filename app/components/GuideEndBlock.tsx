'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const JANUARY_TEST_HREF = '/guides/january-already-spent'

export type GuideEndLink = { href: string; label: string }

type Props = {
  /** Small label above the links at the bottom, e.g. "Continue the series". */
  linksLabel?: string
  links?: GuideEndLink[]
  /** Hide the January test step (used on the January page itself). */
  hideJanuaryLink?: boolean
}

// The shared "Put it into practice" block at the end of every guide.
// A low-commitment first step (the January test) sits above the
// consultation, which stays as the secondary action.
export default function GuideEndBlock({ linksLabel, links = [], hideJanuaryLink = false }: Props) {
  return (
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

        {!hideJanuaryLink && (
          <div className="mb-12">
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Most people finish a guide and do nothing, because there is no obvious next step.
            </p>
            <Link
              href={JANUARY_TEST_HREF}
              className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm uppercase tracking-widest font-medium hover:bg-[#e0bc6a] transition-colors duration-300"
            >
              Take the ninety-second January test
            </Link>
          </div>
        )}

        <p className="text-zinc-500 mb-10 max-w-md mx-auto">
          Free consultation. No pressure. Just a clear, honest conversation about where you are and
          where you want to be.
        </p>
        <Link
          href="/contact"
          className={
            hideJanuaryLink
              ? 'inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm uppercase tracking-widest font-medium hover:bg-[#e0bc6a] transition-colors duration-300'
              : 'inline-block px-8 py-4 border border-[#c9a84c] text-[#c9a84c] text-sm uppercase tracking-widest font-medium hover:bg-[#c9a84c]/10 transition-colors duration-300'
          }
        >
          Book a Free Consultation
        </Link>

        {links.length > 0 && (
          <div className="mt-12 pt-12 border-t border-zinc-800 flex flex-col gap-3">
            {linksLabel && <p className="text-xs text-zinc-600 mb-1 uppercase tracking-widest">{linksLabel}</p>}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
