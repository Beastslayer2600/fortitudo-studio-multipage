import type { Metadata } from "next";
import Link from "next/link";

const earlyRetirementScenario = [
  "Market falls 30% in year one of retirement",
  "You draw 6% of your portfolio to fund living expenses",
  "Your portfolio is now down 36% from its opening value",
  "When the market recovers, it recovers on a much smaller base",
  "Future drawdowns take an even greater proportional toll",
  "The portfolio depletes years earlier than projected",
] as const;

const mitigationStrategies = [
  "Hold 12–24 months of income in cash or near-cash on retirement",
  "Set an initial drawdown rate of 4–5% rather than 6–7%",
  "Build a bond/stable allocation ladder to fund the first 5–7 years",
  "Review drawdown rate annually relative to portfolio performance",
  "Avoid rigid fixed-rand withdrawals — move to percentage-based as capital fluctuates",
  "Consider a guaranteed annuity for a portion of retirement income",
] as const;

const livingAnnuityRisks = [
  "No income floor — if the portfolio depletes, income stops",
  "Drawdown rate is self-selected and often set too high",
  "Investment decisions remain the investor's responsibility",
  "Sequence of returns risk is borne entirely by the investor",
  "Longevity risk — living longer than the portfolio lasts",
] as const;

export const metadata: Metadata = {
  title: "Sequence of Returns Risk | Gert Fourie",
  description:
    "Retiring into a market downturn can permanently impair your income even if long-term returns recover. Understanding sequence-of-returns risk is essential for retirement planning.",
};

export default function SequenceOfReturnsPage() {
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
            The Sequence of Returns: Why Timing Your Retirement Matters More Than You Think
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Two investors with identical average returns over 30 years can end up in dramatically
            different financial positions — depending entirely on when the bad years occurred.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-xl font-semibold leading-8 text-white">
            Sequence-of-returns risk is one of the least understood — and most consequential —
            threats to retirement income security.
          </p>
          <p className="mt-4 text-base leading-7 text-white/70">
            During the accumulation phase of investing, the order in which returns arrive matters
            relatively little. Poor returns early in your career are offset by future contributions
            and compounding. But once you retire and begin drawing down, the sequence of returns
            becomes critical. A sharp market decline in the early years of retirement can
            permanently impair your income — even if the market fully recovers over the long term.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              1. Why accumulation and drawdown are structurally different
            </h2>
            <p className="text-lg leading-8 text-white/75">
              During accumulation, you are adding capital regularly. Poor markets mean you buy more
              units at lower prices — rand-cost averaging works in your favour. The sequence of
              annual returns over 30 working years has very little impact on your final accumulated
              capital, assuming identical average returns.
            </p>
            <p className="text-lg leading-8 text-white/75">
              During drawdown, the opposite dynamic applies. You are selling units to fund living
              expenses. Poor markets mean you sell more units to generate the same income. Once
              sold, those units are gone — they cannot benefit from the subsequent recovery.
              This is sometimes called &ldquo;reverse rand-cost averaging&rdquo; or the drawdown
              spiral.
            </p>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;The same average return over 30 years produces very different outcomes
              depending on whether the bad years come at the beginning or the end of your
              retirement.&rdquo;
            </blockquote>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              2. The early retirement scenario
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Consider what happens when a portfolio experiences a significant drawdown in the
              first year of retirement, while drawing an income at the same time:
            </p>
            <ul className="space-y-3">
              {earlyRetirementScenario.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <div className="surface p-6">
              <p className="text-lg leading-8 text-white/75">
                Compare this to a scenario where the 30% decline happens in year 20 of retirement.
                By then, the portfolio may have compounded for nearly two decades and can absorb
                the shock far better. The mathematics are identical — the sequence is not.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              3. The living annuity problem
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Most South African retirees who accumulated through a Retirement Annuity or pension
              fund will purchase a living annuity with a portion of their retirement capital.
              A living annuity is an investment-linked income drawdown — you own the underlying
              portfolio, you set the drawdown rate, and the income you receive depends on
              investment performance.
            </p>
            <p className="text-lg leading-8 text-white/75">
              This structure is flexible and can be highly effective. It also concentrates
              sequence-of-returns risk entirely on the investor:
            </p>
            <ul className="space-y-3">
              {livingAnnuityRisks.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              The Regulation 28 drawdown band for living annuities is 2.5% to 17.5% per annum.
              Most financial planners recommend staying below 6% — ideally closer to 4–5% in
              early retirement — to reduce the probability of depleting the portfolio before death.
              Many retirees draw above 7%, which materially increases sequence-of-returns exposure.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              4. Mitigation strategies
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Sequence-of-returns risk cannot be eliminated — markets are not predictable. But it
              can be managed structurally before it materialises. The key is reducing the
              likelihood that you are forced to sell growth assets during a drawdown. Approaches
              include:
            </p>
            <ul className="space-y-3">
              {mitigationStrategies.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              A hybrid structure — where a guaranteed annuity covers essential baseline income
              and a living annuity handles the discretionary layer — is often the most resilient
              approach. The guaranteed annuity removes sequence risk from essential expenses
              entirely. The living annuity retains flexibility and upside potential for non-critical
              income.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              5. What to do before retirement
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The most effective mitigation happens in the 3–5 years before retirement. This
              period — sometimes called the &ldquo;retirement red zone&rdquo; — is where
              de-risking decisions have the greatest impact. A sharp decline at this stage can
              reduce the capital base from which you retire and cannot be fully recovered through
              future contributions.
            </p>
            <p className="text-lg leading-8 text-white/75">
              Gradually shifting the portfolio toward more defensive allocations in the years
              approaching retirement, building cash reserves, and stress-testing the drawdown
              plan against adverse sequences is not conservative thinking — it is structurally
              sound planning.
            </p>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;The most important financial decisions of your life are not made during your
              accumulation years. They are made in the five years before and after retirement.&rdquo;
            </blockquote>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Average returns do not tell the full story. The sequence in which those returns
              arrive — relative to when you begin drawing income — determines whether your
              retirement capital lasts 20 years or 35. This risk is manageable with the right
              structure, but only if it is planned for before retirement begins, not responded
              to after a downturn has already occurred.
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
