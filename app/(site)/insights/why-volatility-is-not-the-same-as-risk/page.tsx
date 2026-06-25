import type { Metadata } from "next";
import Link from "next/link";

const behaviouralTraps = [
  "Selling during drawdowns and locking in permanent losses",
  "Moving to cash at market lows and missing the recovery",
  "Measuring portfolio health by daily price movement",
  "Confusing a temporary decline with a structural failure",
  "Abandoning long-term strategies based on short-term noise",
] as const;

const realRiskFactors = [
  "Permanent loss of capital — not temporary price decline",
  "Running out of money in retirement",
  "Inflation eroding purchasing power over time",
  "Concentration in a single asset, sector, or currency",
  "Poor sequencing of withdrawals at the wrong time",
  "Emotional decisions that override a sound strategy",
] as const;

const disciplines = [
  "Define your time horizon before entering any investment",
  "Separate money you may need soon from long-term capital",
  "Understand that price and value often diverge temporarily",
  "Use volatility as a rebalancing signal, not a panic trigger",
  "Measure portfolio health against your goals, not the market",
] as const;

export const metadata: Metadata = {
  title: "Why Volatility Is Not the Same as Risk | Gert Fourie",
  description:
    "Volatility measures price movement. Risk measures permanent capital loss. Understanding the difference is the foundation of intelligent long-term investing.",
};

export default function VolatilityVsRiskPage() {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 text-[var(--cream)] sm:pt-28 sm:pb-24">
      <article className="container max-w-4xl">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="text-sm uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[var(--gold)]"
          >
            Insights
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Insight</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Why Volatility Is Not the Same as Risk
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            The most damaging financial decisions are rarely made because of bad investments.
            They are made because investors confuse normal price movement with genuine danger.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-xl font-semibold leading-8 text-white">
            Volatility and risk are not the same thing. Treating them as equivalent is one of the
            most expensive mistakes a long-term investor can make.
          </p>
          <p className="mt-4 text-base leading-7 text-white/70">
            Volatility is a statistical measure of price movement. Risk is the probability of
            permanent capital loss. A portfolio can be highly volatile and carry very little real
            risk — and a portfolio can appear stable while concealing enormous structural danger.
            The distinction matters enormously for how you build, hold, and respond to investments
            over time.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              1. What volatility actually measures
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Volatility measures how much an asset&rsquo;s price fluctuates over a given period.
              A high-volatility asset might rise 20% one year and fall 15% the next. A low-volatility
              asset might deliver steady 6% returns year after year.
            </p>
            <p className="text-lg leading-8 text-white/75">
              Standard deviation — the most common volatility measure — captures the range of
              outcomes around an average. It tells you how widely returns are dispersed. It says
              nothing about whether the underlying business, asset, or fund is structurally sound.
            </p>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;A share price that halves during a market correction and recovers fully within
              two years did not destroy wealth. An investor who sold at the bottom did.&rdquo;
            </blockquote>
            <p className="text-lg leading-8 text-white/75">
              Volatility is largely a function of market sentiment, liquidity, and investor
              psychology. It is not a reliable measure of the quality of what you own.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              2. What risk actually measures
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Risk, properly understood, is the probability that your capital is permanently
              impaired — not temporarily down. Real financial risk includes:
            </p>
            <ul className="space-y-3">
              {realRiskFactors.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              A market that falls 30% and recovers over 18 months was volatile. An investor who
              needed that money within six months and was forced to sell at the bottom experienced
              real risk materialising. The asset itself may have been perfectly sound — the
              structure around the investment was not.
            </p>
            <div className="surface p-6">
              <p className="text-lg leading-8 text-white/75">
                This is why asset allocation and time horizon matter more than most investors
                appreciate. Volatility is only dangerous when it intersects with the wrong time
                horizon or a forced sale.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              3. The behavioural traps volatility creates
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The human brain is wired for loss aversion. Research consistently shows that losses
              feel approximately twice as painful as equivalent gains feel rewarding. In practice,
              this means investors frequently make decisions that feel protective but are
              structurally damaging:
            </p>
            <ul className="space-y-3">
              {behaviouralTraps.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              Each of these decisions is emotionally rational at the moment it is made. Each is
              financially irrational when measured against long-term outcomes. The investor who
              exits during a correction has not reduced their risk — they have crystallised a loss
              and introduced timing risk on re-entry.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              4. Time horizon as the critical variable
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Whether volatility represents danger is largely a function of time. An investor with
              a 20-year horizon holding a diversified equity portfolio is not exposed to meaningful
              risk from short-term price movement. The probability that a well-constructed equity
              portfolio delivers positive real returns over 15–20 years is extremely high
              historically — including periods that contained severe drawdowns.
            </p>
            <p className="text-lg leading-8 text-white/75">
              An investor with a 12-month horizon holding that same portfolio is exposed to
              genuine risk. The time mismatch between the asset and the need is where danger
              actually lives — not in the volatility itself.
            </p>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;Volatility is the price of long-term equity returns. Investors who cannot
              tolerate the price rarely collect the return.&rdquo;
            </blockquote>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              5. How to think about this in practice
            </h2>
            <p className="text-lg leading-8 text-white/75">
              A structured approach to long-term investing separates short-term obligations from
              long-term capital, then allows long-term holdings to experience volatility without
              forcing premature liquidation. The disciplines that support this include:
            </p>
            <ul className="space-y-3">
              {disciplines.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              The South African market adds a layer of complexity. Rand weakness during global
              risk-off periods amplifies portfolio volatility in rand terms even when underlying
              offshore assets are stable. This can create the perception of greater danger than
              actually exists — and drives many investors toward locally concentrated portfolios
              that carry far higher structural risk than a globally diversified portfolio
              experiencing temporary rand-driven fluctuations.
            </p>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Volatility is uncomfortable. It is not inherently dangerous. The danger lies in
              responding to it in ways that convert temporary unrealised losses into permanent
              realised ones. Understanding this distinction — intellectually and emotionally — is
              the foundation of long-term investment success.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Your portfolio&rsquo;s short-term price movement is largely irrelevant. Your
              long-term financial outcomes are not. Structure the former to protect the latter.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
            >
              Request a Strategic Consultation
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
}
