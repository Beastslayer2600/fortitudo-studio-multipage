"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import GuideEndBlock from "../../components/GuideEndBlock"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const rules = [
  {
    number: "01",
    title: "Define a Specific Purpose for Your Money",
    description:
      "Vague hopes rarely survive a setback. A number and a date change everything.",
    href: "/guides/define-your-purpose",
  },
  {
    number: "02",
    title: "Know Assets From Liabilities",
    description:
      "An asset puts money in your pocket. A liability takes it out — no matter how good either one looks.",
    href: "/guides/assets-vs-liabilities",
  },
  {
    number: "03",
    title: "Automate the Discipline You Don't Have",
    description:
      "Discipline that depends on willpower fails. Discipline that's automated doesn't need to.",
    href: "/guides/automate-the-discipline",
  },
  {
    number: "04",
    title: "Loss Aversion Runs the Show Unless You Notice It",
    description:
      "We feel losses almost twice as intensely as equivalent gains — and that bias quietly drives a lot of bad decisions.",
    href: "/guides/loss-aversion",
  },
  {
    number: "05",
    title: "Time Is the One Input You Can't Buy Back",
    description:
      "Waiting for the “right time” is usually the most expensive decision on the table.",
    href: "/guides/the-cost-of-waiting",
  },
  {
    number: "06",
    title: "Delayed Gratification Is Trained, Not Inherited",
    description:
      "The benefit of saving is delayed, the benefit of spending is instant. Patience is a trained skill, not a personality trait.",
    href: "/guides/delayed-gratification",
  },
  {
    number: "07",
    title: "Financial Education Compounds Too",
    description:
      "Understanding debt, risk, and markets compounds over time, just like capital does.",
    href: "/guides/financial-education-compounds",
  },
  {
    number: "08",
    title: "Your Environment Is Doing More Than You Think",
    description:
      "The people around you measurably shift your own financial behaviour, for better or worse.",
    href: "/guides/your-environment-shapes-you",
  },
  {
    number: "09",
    title: "Review Beats Avoidance",
    description:
      "Most people who feel behind financially haven't looked closely enough to know if that's even true.",
    href: "/guides/review-beats-avoidance",
  },
  {
    number: "10",
    title: "A Plan on Paper Beats a Good Intention",
    description:
      "Organised plans consistently outperform vague ambition, because they turn intention into decisions you can execute.",
    href: "/guides/plan-on-paper",
  },
] as const

export default function WealthyMindsetGuideClient() {
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
            Guide Series · 10 Parts
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight mb-6"
          >
            Rules & Foundations
            <br />
            <span className="text-zinc-500">of a Wealthy Mindset</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mb-10"
          >
            Ten research-backed principles — from classic wealth literature to modern behavioural
            finance — for building a mindset that actually builds wealth. Each one gets its own
            deep dive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-px bg-gradient-to-r from-[#c9a84c]/40 via-zinc-700 to-transparent"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-zinc-400 leading-relaxed text-base"
        >
          Wealth is rarely a maths problem. Most people already know they should save more, spend
          less, and invest early — yet the knowing doesn&apos;t always translate into doing.
          <br />
          <br />
          <span className="text-white">
            Behavioural finance research consistently shows that financial outcomes are driven
            less by intelligence and more by mindset
          </span>{" "}
          — the beliefs, habits, and emotional patterns behind day-to-day money decisions. These
          ten principles are educational, not personalised advice — a foundation to think from,
          not a product recommendation. Read them in order, or jump to the one you need most.
        </motion.p>
      </section>

      {/* Rule list */}
      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-4">
        {rules.map((rule, i) => (
          <motion.div
            key={rule.href}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <Link
              href={rule.href}
              className="group flex items-start gap-5 border border-zinc-800 p-6 hover:border-[#c9a84c]/40 transition-colors duration-300"
            >
              <span className="text-xs font-mono text-[#c9a84c]/50 pt-1">{rule.number}</span>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-light text-white mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                  {rule.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">{rule.description}</p>
              </div>
              <span className="text-zinc-600 group-hover:text-[#c9a84c] transition-colors duration-300 pt-1">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <GuideEndBlock
        linksLabel="Read next"
        links={[
          { href: "/guides/why-saving-feels-painful", label: "Why Saving Feels Painful" },
          { href: "/guides/building-wealth-on-a-starter-salary", label: "Building Wealth on a Starter Salary" },
        ]}
      />
    </main>
  )
}
