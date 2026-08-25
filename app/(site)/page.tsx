"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroStructure from "@/components/three/HeroStructure";
import CostOfWaiting from "@/components/three/CostOfWaiting";
import PlanCalculator from "@/components/three/PlanCalculator";

const audience = [
  {
    title: "High-income professionals",
    body: "Earning well but unsure whether the strategy is optimal.",
  },
  {
    title: "Business owners",
    body: "Building sustainable wealth with structure, not speculation.",
  },
  {
    title: "Families",
    body: "Seeking clarity around retirement, protection, and legacy.",
  },
  {
    title: "Disciplined thinkers",
    body: "Tired of reacting emotionally to markets and headlines.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Strategy session",
    body: "A focused conversation about goals, constraints, and what is creating uncertainty.",
  },
  {
    number: "02",
    title: "Financial analysis",
    body: "Income, assets, liabilities, cover, and tax position mapped into one picture.",
  },
  {
    number: "03",
    title: "Structured plan",
    body: "A written framework designed for resilience — not short-term performance theatre.",
  },
  {
    number: "04",
    title: "Ongoing review",
    body: "Regular adjustment so the plan stays aligned as life and markets change.",
  },
];

const truths = [
  {
    title: "Markets will fluctuate",
    body: "Volatility is normal. A plan that only works in calm markets is not a plan.",
  },
  {
    title: "Fear drives expensive decisions",
    body: "The biggest risk is often behavioural — selling at the bottom, chasing at the top.",
  },
  {
    title: "Discipline is uncomfortable",
    body: "Structure asks you to stay the course when emotion wants a shortcut.",
  },
  {
    title: "Clarity reduces anxiety",
    body: "When the framework is written and reviewed, quiet doubt loses its power.",
  },
];

export default function Home() {
  return (
    <main className="relative text-[var(--cream)]">
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-20 md:pt-24">
        <HeroStructure />
        <div className="relative z-10 flex min-h-[100svh] items-center justify-center">
          <div className="container relative z-10 max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--gold)]">
              Liberty Group (FSP 2409) · Pretoria
            </p>

            <div className="mb-8 flex justify-center">
              <Image
                src="/liberty-standard-bank-group.png"
                alt="Liberty Standard Bank Group logo"
                width={176}
                height={176}
                priority
                className="h-auto w-24 rounded-md md:w-28"
              />
            </div>

            <h1 className="mb-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
              You work hard for your money.
              <br />
              Let&apos;s structure it to endure.
            </h1>

            <p className="mx-auto mb-4 max-w-3xl text-lg opacity-90 md:text-2xl">
              Structured financial strategy for high-income professionals who want clarity, not complexity.
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-sm text-white/55 md:text-base">
              Gert Fourie · Financial Advisor · Helping clients build structured, disciplined wealth strategies.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="rounded-xl bg-[var(--gold)] px-10 py-5 text-lg font-medium text-[#0a231a] shadow-lg transition-all hover:bg-white"
              >
                Schedule a Strategy Session
              </Link>
              <Link
                href="/process"
                className="rounded-xl border border-[var(--gold)] px-10 py-5 text-lg font-medium text-[var(--gold)] transition-all hover:bg-[var(--gold)]/10"
              >
                How I Work
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-sm tracking-widest text-[var(--cream)]/70 md:bottom-10 [@media(min-height:880px)]:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl"
            aria-hidden="true"
          >
            ↓
          </motion.div>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] md:block">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="border-t border-[var(--gold)]/15 px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">The real problem</p>
          <h2 className="mb-8 font-serif text-3xl text-[var(--gold)] md:text-5xl">
            Success without structure creates quiet anxiety.
          </h2>
          <p className="text-lg leading-relaxed text-white/80 md:text-xl">
            Many high-income professionals earn well but lack a structured financial framework. They invest. They
            save. They insure. But they are unsure whether it all works together. Financial strategy should eliminate
            doubt, not create it.
          </p>
        </div>
      </section>

      {/* Who */}
      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl text-[var(--gold)] md:text-5xl">Who this is designed for</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-white/65">
            Not for everyone. Best suited to people who value stewardship over noise.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audience.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--gold)]/20 bg-black/20 p-7 transition-all duration-300 hover:border-[var(--gold)]/50 hover:shadow-[0_0_24px_rgba(188,164,114,0.12)]"
              >
                <h3 className="mb-3 font-serif text-xl text-[var(--gold)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CostOfWaiting />

      {/* Philosophy */}
      <section className="border-y border-[var(--gold)]/10 px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-serif text-3xl text-[var(--gold)] md:text-5xl">
            Discipline over emotion. Structure over speculation.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
            Markets fluctuate. Noise increases. Trends tempt. Wealth is built through structured planning, disciplined
            execution, and long-term thinking — not reactionary decisions. Performance matters, but only inside a
            framework that protects your future.
          </p>
          <p className="font-serif text-2xl italic text-[var(--gold)]">Strategy first. Emotion second.</p>
        </div>
      </section>

      <PlanCalculator />

      {/* Process */}
      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">How we work together</p>
            <h2 className="font-serif text-3xl text-[var(--gold)] md:text-5xl">A clear process reduces anxiety</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-[var(--gold)]/20 p-6">
                <p className="mb-3 font-serif text-3xl text-[var(--gold)]">{step.number}</p>
                <h3 className="mb-2 font-serif text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/process" className="text-sm tracking-[0.12em] text-[var(--gold)] hover:text-white">
              View the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* Truths */}
      <section className="border-t border-[var(--gold)]/10 bg-black/25 px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl text-[var(--gold)] md:text-5xl">
            What most advisors won&apos;t emphasise
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-white/65">
            Not fantasy. Reality builds trust.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {truths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--gold)]/15 p-7">
                <h3 className="mb-3 font-serif text-xl text-[var(--gold)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center md:py-32">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl text-[var(--gold)] md:text-5xl">Ready to structure your future?</h2>
          <p className="mb-10 text-lg text-white/75">
            If you value clarity over complexity and stewardship over speculation, let&apos;s speak.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[var(--gold)] px-12 py-5 text-lg font-medium text-[#0a231a] shadow-lg transition-all hover:bg-white"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}
