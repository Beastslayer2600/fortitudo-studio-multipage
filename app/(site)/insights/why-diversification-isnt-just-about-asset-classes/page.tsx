import type { Metadata } from "next";
import Link from "next/link";

const hiddenCorrelations = [
  {
    title: "Geographic concentration",
    description:
      "A portfolio split across ten different JSE-listed shares is still one bet on the South African economy, the rand, and local policy risk - however different the individual companies appear.",
  },
  {
    title: "Sector overlap",
    description:
      "Property, financials, and retail shares often move together in a downturn because they share the same underlying sensitivity to interest rates and consumer spending, regardless of how the portfolio is labelled.",
  },
  {
    title: "Currency exposure",
    description:
      "Offshore diversification can quietly reintroduce concentration through the rand - if every offshore holding is unhedged, the portfolio's fortunes are still tied to a single currency view.",
  },
  {
    title: "Manager style drift",
    description:
      "Several unit trusts with different names and fact sheets can hold strikingly similar underlying positions if their managers follow the same investment style or benchmark.",
  },
] as const;

const dimensions = [
  {
    title: "Asset class",
    description: "Equities, bonds, property, and cash behave differently across a cycle - the traditional and still-necessary starting point.",
  },
  {
    title: "Geography",
    description: "Local and offshore exposure reduces reliance on any single economy, currency, or regulatory environment.",
  },
  {
    title: "Time horizon",
    description: "Matching each pool of capital to when it is actually needed prevents short-term market noise from forcing long-term decisions.",
  },
  {
    title: "Manager and style",
    description: "Blending different investment philosophies - value, growth, quality - reduces the risk of any single approach underperforming for an extended period.",
  },
  {
    title: "Liquidity",
    description: "Holding a mix of liquid and less liquid assets ensures a market downturn never forces a sale at the worst possible time to raise cash.",
  },
] as const;

export const metadata: Metadata = {
  title: "Why Diversification Isn't Just About Asset Classes | Gert Fourie",
  description:
    "Real diversification goes deeper than splitting money between shares, bonds, and cash. A look at the hidden correlations that undermine portfolios that look diversified on paper.",
};

export default function DiversificationPage() {
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
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
            Portfolio Construction
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Why Diversification Isn&apos;t Just About Asset Classes
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            A portfolio can hold twenty different funds and still be far less diversified than it
            looks on paper.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">The mistake</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            Counting the number of holdings is not the same as measuring how independently those
            holdings actually behave from one another.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              What diversification is actually for
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Diversification exists to reduce the impact of any single risk on the whole portfolio.
              It works when the assets held genuinely respond differently to the same event. It
              fails - quietly, and usually at the worst possible time - when assets that look
              different on a fact sheet turn out to move together under pressure.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              Where hidden correlation hides
            </h2>
            <div className="space-y-4">
              {hiddenCorrelations.map((item) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              The dimensions that matter beyond asset class
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {dimensions.map((item) => (
                <div key={item.title} className="surface p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">A useful test</h2>
            <p className="text-lg leading-8 text-white/75">
              A simple way to stress-test a portfolio is to ask: in a sharp, broad market decline,
              which of these holdings would I expect to hold up, and why? If the honest answer is
              &ldquo;most of them would fall together,&rdquo; the portfolio is concentrated, regardless of how
              many line items appear on the statement.
            </p>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Genuine diversification is a discipline, not a headcount. It requires looking past fund
              names and fact sheets to understand what actually drives returns in each holding - and
              deliberately choosing exposures that do not all rely on the same story to succeed.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Reviewing how your specific holdings correlate under stress is a worthwhile exercise
              most portfolios never get - and one worth doing before the next downturn, not during it.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
            >
              Book a free consultation
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
