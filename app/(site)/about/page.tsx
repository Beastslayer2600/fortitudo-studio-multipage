import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gert Fourie",
  description:
    "Gert Fourie is a Liberty accredited financial adviser in Pretoria, helping professionals, business owners, and families build wealth through structure, discipline, and long-term clarity.",
};

const principles = [
  {
    title: "Structure over speculation",
    body: "Income, assets, risk cover, and legacy should work as one system. Isolated products create quiet anxiety.",
  },
  {
    title: "Discipline over emotion",
    body: "Markets will move. Noise will increase. A written framework exists so you do not have to improvise under pressure.",
  },
  {
    title: "Clarity over complexity",
    body: "If you cannot explain the plan in plain language, it is not finished. Complexity is not a strategy.",
  },
];

const audience = [
  "Professionals earning well who are unsure whether the current strategy is optimal",
  "Business owners who want structure, not speculation",
  "Families who want a clear picture of retirement and protection",
  "People tired of reacting emotionally to markets",
];

const steps = [
  { number: "01", title: "Strategy session", body: "A focused conversation about goals, constraints, and what is keeping you uncertain." },
  { number: "02", title: "Financial analysis", body: "Income, assets, liabilities, cover, tax position, and gaps mapped into one picture." },
  { number: "03", title: "Structured plan", body: "A written framework designed for resilience, not short-term performance theatre." },
  { number: "04", title: "Review and adjustment", body: "Ongoing reviews so the plan stays aligned as life and markets change." },
];

export default function About() {
  return (
    <div className="relative z-10 min-h-screen text-[var(--cream)]">
      <div className="container mx-auto max-w-4xl px-6 py-24">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
          Gert Fourie | Financial Advisor | Liberty Group (FSP 2409) | Pretoria
        </p>
        <h1 className="mb-6 text-center font-serif text-5xl font-bold tracking-tight md:text-6xl">
          Structure. Discipline. Long-term clarity.
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-white/75">
          Helping clients build structured, disciplined wealth strategies.
        </p>

        <div className="space-y-8 text-lg leading-relaxed text-white/85">
          <p>
            I am a financial advisor with Liberty Group (FSP 2409), based in Pretoria. My work is grounded in one principle: wealth is not built by reacting — it is built by structure, discipline, and long-term clarity.
          </p>
          <p>
            I advise high-income professionals, business owners, and families who understand that earning well is only the beginning. The real advantage comes from strategy — aligning income, assets, risk, and legacy into a system that works quietly and consistently over time.
          </p>
          <p>
            My role is not to predict markets or chase trends. It is to design financial architecture that creates stability, protects growth, and removes uncertainty from major decisions.
          </p>
          <p className="font-medium text-[var(--cream)]">
            I do not chase trends. I build structured, disciplined strategies designed for long-term resilience.
          </p>
          <p>
            If you value clarity over complexity and stewardship over speculation, we will work well together.
          </p>
        </div>

        <section className="mt-20">
          <h2 className="mb-8 font-serif text-3xl text-[var(--gold)]">How I work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--gold)]/25 bg-black/20 p-6">
                <h3 className="mb-3 font-serif text-xl text-[var(--gold)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-6 font-serif text-3xl text-[var(--gold)]">Who I work best with</h2>
          <ul className="space-y-3 text-white/80">
            {audience.map((item) => (
              <li key={item} className="border-l border-[var(--gold)]/40 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <h2 className="mb-8 font-serif text-3xl text-[var(--gold)]">How we work together</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-[var(--gold)]/20 p-6">
                <p className="mb-2 font-serif text-2xl text-[var(--gold)]">{step.number}</p>
                <h3 className="mb-2 font-serif text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[var(--gold)] px-12 py-5 text-lg font-medium text-[#0a231a] shadow-lg transition-all duration-300 hover:bg-white"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
}
