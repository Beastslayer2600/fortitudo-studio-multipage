'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SavingPainfulGuideClient() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60])

  const sections = [
    {
      number: '01',
      title: 'The Two Systems at War in Your Brain',
      content: (
        <div className="space-y-5">
          <p>Every financial decision you make is a negotiation between two systems.</p>
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              {
                label: 'Limbic System',
                sub: 'Ancient. Emotional. Wired for now.',
                body: 'Evolved over millions of years for survival. When you see something desirable, it fires. It releases dopamine and pushes you to act immediately. It does not think in decades — it thinks in seconds.',
                color: 'border-red-900/40 bg-red-950/10',
                accent: 'text-red-400',
              },
              {
                label: 'Prefrontal Cortex',
                sub: 'Rational. Slow. Future-focused.',
                body: 'Responsible for long-term planning and impulse control. It can calculate that R1,000 invested today is worth far more at 65. But it is slower, more effortful, and easily overridden when emotions run hot.',
                color: 'border-[#c9a84c]/20 bg-[#c9a84c]/5',
                accent: 'text-[#c9a84c]',
              },
            ].map((system) => (
              <div key={system.label} className={`border p-5 ${system.color}`}>
                <p className={`text-xs uppercase tracking-widest mb-1 ${system.accent}`}>{system.label}</p>
                <p className="text-white text-sm mb-3 font-light">{system.sub}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{system.body}</p>
              </div>
            ))}
          </div>
          <p>
            When you walk into a store, smell a new car, or scroll past a sale — your limbic system fires first. Your prefrontal cortex has to work actively to override it. Under emotional stimulation, the dopamine-related limbic circuits consistently dominate over rational calculation. The emotional brain beats the logical brain more often than we'd like to admit.
          </p>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Dopamine — The Real Reason Spending Feels Good',
      content: (
        <div className="space-y-5">
          <p>
            The brain's reward system releases dopamine in ways that reinforce behaviors leading to satisfying outcomes. The critical point is this:{' '}
            <span className="text-white">dopamine fires in anticipation of the reward, not just when you receive it.</span> The moment you decide to buy something, before you've even paid, the pleasure response begins.
          </p>
          <p>
            Saving has no equivalent trigger. There's no dopamine hit when you set up a debit order. There's no pleasure signal when your TFSA balance ticks up by R500. The reward is abstract, distant, invisible — and your brain discounts it heavily.
          </p>
          <div className="border border-zinc-800 bg-zinc-900/40 p-6 my-6">
            <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Delay Discounting</p>
            <p className="text-zinc-300 leading-relaxed">
              People tend to devalue rewards that are substantially delayed in time — often choosing a smaller immediate reward over a larger future one. The further away the reward, the less your brain values it.{' '}
              <span className="text-zinc-500">Retirement at 65 feels so abstract it barely registers as real.</span>
            </p>
          </div>
          <p>
            This is why saving feels painful — not because it costs you money, but because it costs you a dopamine signal your brain was expecting to receive.
          </p>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Delay Discounting — The Silent Destroyer of Wealth',
      content: (
        <div className="space-y-5">
          <p>Delay discounting is the rate at which your brain reduces the perceived value of a future reward.</p>
          <div className="border border-zinc-800 p-6 my-6 space-y-4">
            <p className="text-white">Would you rather have R100 today or R150 in six months?</p>
            <p className="text-zinc-400 text-sm">
              Most people take the R100. Logically, R150 in six months is a 50% return — extraordinary by any standard. But emotionally, the R100 feels real and the R150 feels uncertain. Your limbic system pushes you toward certain and immediate every single time.
            </p>
          </div>
          <p>
            This is compounded by modern life. Chronic exposure to frictionless digital rewards — instant delivery, one-click purchases, social media dopamine loops — desensitizes dopaminergic pathways and shifts behavior toward instant, low-effort alternatives. Every app, every platform, and every retail experience has been designed to condition you to expect immediate reward. Saving asks you to do the opposite.
          </p>
        </div>
      ),
    },
    {
      number: '04',
      title: 'The Marshmallow Test and What It Actually Tells Us',
      content: (
        <div className="space-y-5">
          <p>
            The famous Stanford Marshmallow Test gave children one marshmallow, with the promise of two if they waited fifteen minutes. Children who waited showed better life outcomes decades later.
          </p>
          <p>
            For decades this was read as proof that willpower is the key variable. <span className="text-white">Discipline wins.</span>
          </p>
          <p>
            But more recent research complicated this. Children from unstable home environments were far less likely to wait. Not because they lacked willpower. Because waiting for a reward that might not come is irrational when your environment is unreliable.{' '}
            <span className="text-white">Trust in the future changes behavior.</span>
          </p>
          <div className="border-l-2 border-[#c9a84c]/40 pl-6 py-2 my-6">
            <p className="text-zinc-300 leading-relaxed italic font-light">
              People who don't save aren't always lacking discipline. Sometimes they're operating from a scarcity mindset — a deeply held belief that the future is uncertain, that the reward won't come, that you'd better take what you can get now.
            </p>
          </div>
          <p>
            This belief is often inherited. It runs beneath conscious awareness. And it drives financial decisions in ways that no amount of budgeting advice can touch — until it's identified.
          </p>
        </div>
      ),
    },
    {
      number: '05',
      title: 'Why This Hits Harder for Young Professionals',
      content: (
        <div className="space-y-5">
          <p>Young professionals face a specific convergence of pressures that make delay discounting especially damaging.</p>
          <ul className="space-y-5 mt-4">
            {[
              ['Social comparison is at its peak', "Your early twenties are when identity is most fluid. Social media shows you everyone's highlight reel. Your limbic system registers this as a threat to status and pushes you to spend to keep up."],
              ['Income feels abundant for the first time', 'Your first real salary feels like a lot — until lifestyle inflation absorbs it. The novelty of having money makes it feel safer to spend than to lock it away.'],
              ['Retirement feels impossibly abstract', "At 23, 65 is not a real place. It's a concept. Your brain cannot generate genuine emotional urgency around something that far away."],
              ['Digital friction has been removed from spending', 'One-tap purchases, buy now pay later, Apple Pay — every pause before spending has been systematically removed. No pause means no moment for the prefrontal cortex to intervene.'],
            ].map(([title, body]) => (
              <li key={title as string} className="flex gap-4 items-start">
                <span className="text-[#c9a84c] mt-1 min-w-[12px]">—</span>
                <div>
                  <span className="text-white">{title as string}. </span>
                  <span className="text-zinc-400">{body as string}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      number: '06',
      title: 'Practical Rewiring — What Actually Works',
      content: (
        <div className="space-y-5">
          <p>Understanding the neuroscience is only useful if it leads to behavior change.</p>
          <div className="space-y-4 mt-6">
            {[
              { title: 'Automate everything', body: 'A debit order that moves money into your TFSA or RA before you see it means your limbic system never gets the chance to claim it. You cannot spend money you never consciously had.', tag: 'Highest impact' },
              { title: 'Make saving feel immediate', body: "Attach your saving to a concrete, near-term image. Not 'retirement' — something specific. A property deposit. Financial independence at 45. The more vivid and tangible the future reward, the more your brain generates motivation.", tag: 'Mindset' },
              { title: 'Add friction to spending', body: 'Remove saved card details from online stores. Put a 24-hour rule on purchases above a certain amount. These friction points give your prefrontal cortex time to override the limbic response.', tag: 'Environment design' },
              { title: 'Track your net worth monthly', body: 'Watching a number grow creates a feedback loop. You start to feel the reward of saving in the present. This is how you rewire the dopamine response — by making the invisible visible.', tag: 'Behavioral' },
              { title: 'Understand your money scripts', body: "The beliefs you inherited about money run beneath every financial decision you make. Identifying them is the beginning of changing them.", tag: 'Psychology' },
              { title: 'Work with a financial adviser', body: 'Accountability creates social stakes — and social stakes are a limbic motivator. Knowing someone is tracking your progress engages the same social reward circuitry that makes peer pressure powerful, redirected toward your benefit.', tag: 'Accountability' },
            ].map((item) => (
              <div key={item.title} className="border border-zinc-800 p-5 hover:border-[#c9a84c]/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <span className="text-xs text-[#c9a84c] tracking-widest uppercase">{item.tag}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300">

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative max-w-3xl mx-auto px-6 pt-28 pb-16 w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-6"
          >
            Guide · Money Psychology
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight mb-6"
          >
            Why Saving
            <br />
            <span className="text-zinc-500">Feels Painful</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mb-10"
          >
            The neuroscience of instant gratification vs delayed reward — and why your brain is working against your bank account.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-px bg-gradient-to-r from-[#c9a84c]/40 via-zinc-700 to-transparent"
          />
        </motion.div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-zinc-400 leading-relaxed text-base"
        >
          You know you should be saving. You know compound interest works. And yet — the purchase happens. The investment gets pushed to next month.
          <br /><br />
          This isn't a character flaw. It's not laziness.{' '}
          <span className="text-white">It's your brain doing exactly what it was designed to do</span> — and it's working against your financial future.
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
              <span className="text-xs font-mono text-[#c9a84c]/50">{section.number}</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 leading-snug">
              {section.title}
            </h2>
            <div className="text-sm sm:text-base leading-relaxed">
              {section.content}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Conclusion */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-zinc-800 p-8"
        >
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-5">The Bottom Line</p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Saving feels painful because your brain is ancient and your financial system is modern. The mismatch is not your fault — but navigating it is your responsibility.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The people who build wealth aren't more disciplined. They've designed their environment so that the right decision is also the path of least resistance.
          </p>
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
          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-6">Work with your brain</p>
          <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Let's build a financial plan
            <br />
            that accounts for being human.
          </h3>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            Free consultation. No pressure. Just a clear, honest conversation about where you are and where you want to be.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm uppercase tracking-widest font-medium hover:bg-[#e0bc6a] transition-colors duration-300"
          >
            Book a Free Consultation
          </Link>
          <div className="mt-12 pt-12 border-t border-zinc-800">
            <p className="text-xs text-zinc-600 mb-4 uppercase tracking-widest">Read next</p>
            <Link
              href="/guides/building-wealth-starter-salary"
              className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Building Wealth on a Starter Salary →
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
