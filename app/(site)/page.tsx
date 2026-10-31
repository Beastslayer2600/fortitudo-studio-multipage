"use client";

import Image from "next/image";
import Link from "next/link";
import HeroStructure from "@/components/three/HeroStructure";
import CostOfWaiting from "@/components/three/CostOfWaiting";
import PlanCalculator from "@/components/three/PlanCalculator";

// Portrait for the "Meet Gert" section. Drop a professional head-and-shoulders
// photo (portrait orientation, ~1000x1250, plain dark background) into /public
// and set this to its path, e.g. "/portrait.jpg". While null, a monogram shows.
const PORTRAIT: string | null = null;

const audience = [
  {
    title: "Young professionals",
    body: "Early in your career and want the foundations right before income and complexity grow.",
  },
  {
    title: "Established professionals",
    body: "Earning well but unsure the plan is right for you.",
  },
  {
    title: "Business owners",
    body: "Building sustainable wealth with structure, not speculation.",
  },
  {
    title: "Families",
    body: "Seeking clarity around retirement, protection, and legacy.",
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
    body: "A written plan built to endure, not to chase this year’s returns.",
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

            <h1 className="mb-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-balance">You work hard for your money.</span>
              <span className="block text-balance">Let&apos;s structure it to endure.</span>
            </h1>

            <p className="mx-auto mb-4 max-w-3xl text-balance text-lg opacity-90 md:text-2xl">
              Structured financial strategy for professionals building wealth, who want clarity, not complexity.
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-sm text-white/55 md:text-base">
              Gert Fourie · Financial Adviser · Helping you build a plan you&apos;ll actually keep.
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

            <div className="mt-10 flex items-center justify-center gap-3 text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/liberty-standard-bank-group.png"
                  alt="Liberty Standard Bank Group logo"
                  width={44}
                  height={44}
                  priority
                  className="h-11 w-11 object-contain"
                />
              </span>
              <span className="text-sm leading-snug text-white/70">
                Representative of Liberty Group Limited
                <br />
                Authorised FSP 2409
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-[#0b0d10]/92">
      {/* Problem */}
      <section className="border-t border-[var(--gold)]/15 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">The real problem</p>
          <h2 className="mb-8 font-serif text-3xl text-[var(--gold)] md:text-5xl">
            Success without structure creates quiet anxiety.
          </h2>
          <p className="text-lg leading-relaxed text-white/80 md:text-xl">
            Many professionals earn well but lack a structured financial framework. They invest. They
            save. They insure. But they are unsure whether it all works together. Financial strategy should eliminate
            doubt, not create it.
          </p>
        </div>
      </section>





      {/* Meet Gert */}
      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="mx-auto w-full max-w-xs md:max-w-none">
            {PORTRAIT ? (
              <Image
                src={PORTRAIT}
                alt="Gert Fourie, financial adviser"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-2xl border border-[var(--gold)]/25 object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-[var(--gold)]/25 bg-[#0d2a1f]"
              >
                <span className="font-serif text-7xl tracking-[0.08em] text-[var(--gold)]/80">GF</span>
              </div>
            )}
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Who you will work with</p>
            <h2 className="mb-6 font-serif text-3xl text-[var(--cream)] md:text-4xl">Gert Fourie</h2>
            <div className="space-y-5 text-lg leading-relaxed text-white/85">
              <p>
                I am a financial adviser with Liberty Group, based in Pretoria. My work rests on one principle: wealth
                is not built by reacting. It is built by structure, discipline, and long-term clarity.
              </p>
              <p>
                My role is not to predict markets or chase trends. It is to help you build a plan you understand,
                and to help you keep it when it&apos;s tested.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm tracking-[0.12em] text-[var(--gold)] hover:text-white"
            >
              More about how I work →
            </Link>
          </div>
        </div>
      </section>

      <PlanCalculator />

      {/* Who */}
      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl text-[var(--gold)] md:text-5xl">Who this is designed for</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-white/65">
            For people who want a plan, not just products.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audience.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--gold)]/20 bg-black/20 p-7 transition-all duration-300 hover:border-[var(--gold)]/50 hover:shadow-[0_0_24px_rgba(188,164,114,0.12)]"
              >
                <h3 className="mb-3 font-serif text-xl text-[var(--gold)]">{item.title}</h3>
                <p className="text-base leading-relaxed text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CostOfWaiting />

      {/* Process */}
      <section className="px-6 py-24 md:py-32">
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
                <p className="text-base leading-relaxed text-white/75">{step.body}</p>
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
      <section className="border-t border-[var(--gold)]/10 bg-black/25 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl text-[var(--gold)] md:text-5xl">
            What keeping a plan really takes
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-white/65">
            The honest part of planning. Knowing it in advance is half of holding on.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {truths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--gold)]/15 p-7">
                <h3 className="mb-3 font-serif text-xl text-[var(--gold)]">{item.title}</h3>
                <p className="text-base leading-relaxed text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-center font-serif text-2xl italic text-[var(--gold)]">Strategy first. Emotion second.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center md:py-32">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl text-[var(--gold)] md:text-5xl">Ready to build something that lasts?</h2>
          <p className="mb-10 text-lg text-white/75">
            If you want a plan that holds when life gets loud, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[var(--gold)] px-12 py-5 text-lg font-medium text-[#0a231a] shadow-lg transition-all hover:bg-white"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
}
