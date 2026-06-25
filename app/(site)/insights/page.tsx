import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Gert Fourie",
  description:
    "Structured perspectives on economic cycles, portfolio construction, tax developments, risk management, and behavioural finance in South Africa.",
};

export default function InsightsPage() {
  return (
    <main className="relative z-10 min-h-screen text-[var(--cream)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container max-w-4xl">
        <h1 className="font-serif text-3xl text-[var(--cream)]">Insights</h1>
        <blockquote className="mt-6 border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
          &ldquo;Investors often lose not because of poor assets — but because of poor reactions.&rdquo;
        </blockquote>
        <p className="mt-6 text-white/70">
          Capital does not grow through reaction. It grows through structure, discipline, and
          informed decision-making.
        </p>
        <p className="mt-4 text-white/70">
          This section contains structured thinking on markets, capital allocation, risk management,
          and investor behaviour within the South African context.
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.14em] text-white/50">What you&rsquo;ll find here</p>
        <ul className="mt-3 space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            Economic cycles and market structure
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            Portfolio construction and asset allocation strategy
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            Legislative and tax developments affecting investors
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            Risk management and capital preservation
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            Behavioural patterns that influence financial decision-making
          </li>
        </ul>
        <p className="mt-8 font-serif text-lg text-white/80">
          Markets reward patience. Volatility rewards discipline.
        </p>
        <p className="mt-3 text-white/70">
          My role is to interpret structural trends, manage risk deliberately, and position capital
          intelligently across cycles — not to react to short-term noise.
        </p>
        <p className="mt-4 text-white/70">
          Insight is the difference between understanding probability and reacting to headlines.
          Capital compounds where thinking is measured.
        </p>

        <div className="mt-10 space-y-6">
          <article className="surface p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Insight</p>
            <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
              Why Volatility Is Not the Same as Risk
            </h2>
            <p className="mt-4 text-white/70">
              Volatility measures price movement. Risk measures permanent capital loss. Most
              investors confuse the two — and that confusion drives the decisions that actually
              destroy wealth.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/55">
                Covers market volatility, behavioural traps, loss aversion, time horizon thinking,
                and the difference between short-term noise and structural risk.
              </p>
              <Link
                href="/insights/why-volatility-is-not-the-same-as-risk"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm tracking-[0.12em] uppercase text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
              >
                Read insight
              </Link>
            </div>
          </article>

          <article className="surface p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Insight</p>
            <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
              The Sequence of Returns: Why Timing Your Retirement Matters More Than You Think
            </h2>
            <p className="mt-4 text-white/70">
              Retiring into a market downturn can permanently impair your income — even if
              long-term returns recover. This insight explains the sequence-of-returns risk and
              how to structure your drawdown strategy around it.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/55">
                Covers drawdown sequencing, living annuity risks, rand-cost averaging in reverse,
                and capital preservation at retirement.
              </p>
              <Link
                href="/insights/sequence-of-returns-risk"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm tracking-[0.12em] uppercase text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
              >
                Read insight
              </Link>
            </div>
          </article>

          <article className="surface p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Insight</p>
            <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
              Regulation 28 Explained — What It Means for Your Retirement Portfolio
            </h2>
            <p className="mt-4 text-white/70">
              Retirement funds in South Africa are governed by Regulation 28, which limits offshore
              and equity exposure. Understanding how these limits work — and why they exist — is
              essential for intelligent retirement planning.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/55">
                Covers pension fund constraints, equity limits, offshore allocation, property
                exposure, and how advisers structure around these rules.
              </p>
              <Link
                href="/insights/regulation-28-explained"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm tracking-[0.12em] uppercase text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
              >
                Read insight
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-8 surface p-6">
          <p className="text-sm text-white/70">
            Want to be notified when new insights are published? Send a message via the contact page.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
          >
            Request a Strategic Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
