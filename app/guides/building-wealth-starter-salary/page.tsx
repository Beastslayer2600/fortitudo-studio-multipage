'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WealthGuide() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const sections = [
    {
      number: '01',
      title: 'Why Starting Now Is the Only Real Advantage You Have',
      content: (
        <>
          <p>
            You don't have capital yet. You don't have connections yet. But you have time — and
            time is the one thing money genuinely cannot buy back.
          </p>
          <div className="my-8 border border-[#c9a84c]/20 bg-[#c9a84c]/5 p-6">
            <p className="text-sm uppercase tracking-widest text-[#c9a84c] mb-4">The Numbers</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-light text-white">R8.5M</p>
                <p className="text-sm text-zinc-400 mt-1">Investing R1,000/month from age 22</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">R3.1M</p>
                <p className="text-sm text-zinc-400 mt-1">Same investment starting at 32</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-4 pt-4 border-t border-zinc-800">
              Same amount. Same consistency. A ten-year head start is worth R5.4 million.
            </p>
          </div>
          <p>
            The goal right now isn't to get wealthy fast. The goal is to build a machine that
            works while you sleep, while you're on holiday, while you're living your life. You
            build it now — with what you have — not later, with what you wish you had.
          </p>
        </>
      ),
    },
    {
      number: '02',
      title: 'Understanding Your Money Before You Move It',
      content: (
        <>
          <p>Before you invest a cent, you need to know what's actually happening.</p>
          <p className="mt-4">
            <span className="text-[#c9a84c]">CTC is not your take-home.</span> After tax, UIF,
            and employer contributions, your actual net salary can be significantly less. Know
            your real number.
          </p>
          <div className="my-8 space-y-4">
            {[
              { label: 'Live', desc: 'Rent, food, transport, lifestyle. What you need to function.' },
              { label: 'Protect', desc: 'Life cover, disability, medical aid. What keeps everything intact.' },
              { label: 'Grow', desc: 'Savings, investments, retirement. What builds your future.' },
            ].map((bucket) => (
              <div key={bucket.label} className="flex gap-6 items-start border-l-2 border-[#c9a84c]/30 pl-5">
                <span className="text-[#c9a84c] font-light min-w-[70px]">{bucket.label}</span>
                <span className="text-zinc-400 text-sm leading-relaxed">{bucket.desc}</span>
              </div>
            ))}
          </div>
          <p>
            A realistic split on R15k–R30k/month: 50–60% on living, 10–15% on protection,
            20–30% on growth. The Grow bucket is non-negotiable — it gets funded first, via
            debit order, before lifestyle can absorb it.
          </p>
          <p className="mt-4 text-zinc-400">
            Every time your salary increases, lifestyle tends to grow with it. Keep your Grow
            bucket percentage consistent as your income grows — that's where real wealth is built.
          </p>
        </>
      ),
    },
    {
      number: '03',
      title: 'The Vehicles — Where Your Money Actually Goes',
      content: (
        <>
          <p>Too many options, too much jargon. Here's what actually matters at your stage.</p>
          <div className="my-8 space-y-6">
            {[
              {
                name: 'Emergency Fund',
                tag: 'First. Always.',
                desc:
                  '3–6 months of living expenses in a money market account. Not an investment — a buffer. Without it, one unexpected expense forces you to break your investments or take on debt.',
              },
              {
                name: 'Tax-Free Savings Account',
                tag: 'TFSA · R36k/year limit',
                desc:
                  'Every rand of growth — interest, dividends, capital gains — is completely tax free. No tax going in, no tax coming out. Start here.',
              },
              {
                name: 'Retirement Annuity',
                tag: 'RA · Tax-deductible',
                desc:
                  'Contributions are deductible up to 27.5% of taxable income. The government is effectively helping you save. Starting at 22 vs 32 makes an enormous difference.',
              },
              {
                name: 'Unit Trusts',
                tag: 'Flexible · Medium-term',
                desc:
                  'More flexible than an RA — you can access your money. Good for goals like a property deposit in 5–7 years. Diversification matters.',
              },
              {
                name: 'Life & Disability Cover',
                tag: 'Non-negotiable',
                desc:
                  'Your income is your biggest asset right now. One serious accident without cover can erase everything you\'ve built. Cover is cheapest when you\'re young and healthy — this is the time.',
              },
            ].map((vehicle) => (
              <div key={vehicle.name} className="border border-zinc-800 p-5 hover:border-[#c9a84c]/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <h4 className="text-white font-medium">{vehicle.name}</h4>
                  <span className="text-xs text-[#c9a84c] tracking-widest uppercase">{vehicle.tag}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      number: '04',
      title: 'The Mistakes That Cost Young Professionals the Most',
      content: (
        <>
          <p>I see these patterns constantly. Avoid them.</p>
          <ul className="mt-6 space-y-4">
            {[
              ['No will', 'You have assets — a bank account, a car, maybe a TFSA. Without a will, the law decides where they go. Costs almost nothing to sort out.'],
              ['No disability cover', "You're more likely to be disabled than to die before 65. Your income stops. Your expenses don't."],
              ['Savings in a cheque account', 'Earns almost nothing. Every month it sits there, inflation quietly erodes it.'],
              ['Chasing returns without understanding risk', 'Crypto tips from a WhatsApp group are not an investment strategy.'],
              ['Waiting until debt is paid off', 'A TFSA growing at 10% while you pay off a 6% car loan is often still a net win. Assess case by case.'],
              ['Never reviewing your plan', 'Marriage, children, promotions, property — each changes what your plan should look like. A plan set at 22 and never revisited is slowly becoming wrong.'],
            ].map(([mistake, explanation]) => (
              <li key={mistake} className="flex gap-4 items-start">
                <span className="text-[#c9a84c] mt-1">—</span>
                <div>
                  <span className="text-white">{mistake}. </span>
                  <span className="text-zinc-400">{explanation}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      number: '05',
      title: 'Your Action List — What to Do This Week',
      content: (
        <>
          <p>Stop reading and start doing. Here's the sequence.</p>
          <ol className="mt-6 space-y-4">
            {[
              'Calculate your actual take-home — not CTC, the real number that hits your account.',
              'Track every expense for one month — you cannot optimize what you cannot see.',
              'Open a TFSA if you don\'t have one.',
              'Set up a debit order — automate your investing before lifestyle absorbs it.',
              'Check your life and disability cover — do you have any? Is it enough?',
              'Draft a basic will — speak to a professional, it doesn\'t have to be complicated.',
              'Book a financial planning session — get a professional view on your specific situation.',
            ].map((step, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="text-[#c9a84c] text-sm min-w-[24px] mt-0.5 font-mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-zinc-300 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </>
      ),
    },
    {
      number: '06',
      title: 'The Mindset That Makes It Stick',
      content: (
        <>
          <p>Financial knowledge without behavior change is useless. Most people know they should be saving. Most people aren't.</p>
          <div className="my-8 space-y-6">
            {[
              ['We spend emotionally', 'Stress, boredom, social pressure — these all trigger spending. When you feel the urge to spend impulsively, pause. Twenty-four hours often changes the decision.'],
              ['Identity drives behavior', '"I\'m trying to save" is weak. "I\'m someone who builds wealth" is an identity — and identities are defended. Shift how you see yourself in relation to money.'],
              ['Comparison is the biggest wealth leak', 'Social media makes everyone look richer than they are. The person in the flashy car might be drowning in debt. Your lane is your lane. Run it.'],
              ['Play the long game', 'Wealth is boring to build and extraordinary to have. The middle part — years of consistent, unglamorous investing — is where the real work happens. Trust the process.'],
            ].map(([title, body]) => (
              <div key={title as string}>
                <p className="text-white mb-1">{title as string}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{body as string}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-6"
        >
          Guide · Personal Finance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl font-light text-white leading-[1.1] tracking-tight mb-8"
        >
          Building Wealth on a Starter Salary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl"
        >
          A no-nonsense guide for young professionals who want to start now — not later.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="h-px bg-gradient-to-r from-[#c9a84c]/40 via-zinc-700 to-transparent"
        />
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400 leading-relaxed text-base"
        >
          Most people think wealth is something that happens when you finally earn enough. It isn't.
          Wealth is built in the gap between what you earn and what you spend — and it starts the
          moment you decide to take it seriously. Not when you get a raise. Not when you pay off
          your car. <span className="text-white">Now.</span>
        </motion.p>
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
              <span className="text-xs font-mono text-[#c9a84c]/60">{section.number}</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 leading-snug">
              {section.title}
            </h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-400">
              {section.content}
            </div>
          </motion.div>
        ))}
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
          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-6">Ready to build?</p>
          <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
            You don't need a massive salary.
            <br />
            You need a plan.
          </h3>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            Book a free consultation and let's build your personal wealth roadmap — specific to
            your income, your goals, and where you want to be.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm uppercase tracking-widest font-medium hover:bg-[#e0bc6a] transition-colors duration-300"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
