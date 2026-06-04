import type { Metadata } from "next";
import Link from "next/link";

const taxBenefits = [
  {
    title: "Deductible contributions",
    description:
      "Every rand you contribute to an RA reduces your taxable income. If you earn R600,000 and contribute R60,000, you are taxed on R540,000. At a marginal rate of 36%, that is R21,600 back in your pocket.",
  },
  {
    title: "Tax-free growth inside the fund",
    description:
      "No income tax on interest. No dividends withholding tax. No capital gains tax on growth inside the RA. Every rand of return is fully reinvested rather than being partially surrendered to SARS each year.",
  },
  {
    title: "Partial tax-free lump sum at retirement",
    description:
      "When you retire, the first R550,000 of any lump sum you take is tax-free. The second R550,000 is taxed at 18%. Only above that do higher rates apply — and those rates are still well below marginal income tax rates.",
  },
] as const;

const atRetirement = [
  {
    title: "The one-third lump sum",
    description:
      "You may take up to one-third of your RA as a cash lump sum at retirement. The first R550,000 is tax-free. This is often used to settle remaining debt, cover immediate capital needs, or simply provide liquidity early in retirement.",
  },
  {
    title: "Living annuity",
    description:
      "You invest the remaining two-thirds and draw an income between 2.5% and 17.5% of the fund value per year. You choose the drawdown rate, bear the investment risk, and your heirs inherit whatever is left. Offers flexibility but requires discipline — drawing too fast is the primary risk.",
  },
  {
    title: "Guaranteed (life) annuity",
    description:
      "An insurer pays you a fixed income for life, regardless of how long you live or what markets do. You cannot outlive the income. The trade-off is that the capital is gone when you die — no estate value. Often used for a portion of the fund to cover essential living expenses.",
  },
  {
    title: "Combination",
    description:
      "Many retirees split: a guaranteed annuity covers non-negotiable monthly costs (rent, medical, food), and a living annuity provides flexibility for discretionary spending and legacy. This hedges both longevity risk and flexibility needs.",
  },
] as const;

const protections = [
  {
    title: "Creditor protection",
    description:
      "Money inside an RA is protected from creditors under the Pension Funds Act. If you face financial difficulty, judgement, or insolvency, your RA cannot be attached. This makes it one of the safest places to hold long-term capital in South Africa.",
  },
  {
    title: "Estate bypass",
    description:
      "An RA does not form part of your deceased estate. On death, the fund pays directly to your nominated beneficiaries — bypassing the will, executor fees, and the delay of the estate administration process. Nominations must be kept current.",
  },
  {
    title: "Section 37C distribution",
    description:
      "The fund trustees have a legal obligation under Section 37C of the Pension Funds Act to distribute the proceeds equitably to dependants and nominees. This means even without a valid nomination, the fund considers your actual dependants — not just your will.",
  },
] as const;

const mistakes = [
  "Withdrawing the RA at retirement as a full lump sum and triggering unnecessary tax when a phased approach would cost far less.",
  "Setting the living annuity drawdown rate above 6% in early retirement — the fund depletes faster than most people expect at that rate.",
  "Failing to update beneficiary nominations after marriage, divorce, or the birth of children. Outdated nominations create disputes.",
  "Stopping contributions during tough months and losing the deduction for that tax year — the deduction cannot be claimed retrospectively.",
  "Treating the RA as the only retirement vehicle when a TFSA running in parallel extracts more from the tax system over a long horizon.",
  "Not checking the underlying fund composition. An RA wrapper over a poor fund still delivers poor returns.",
  "Undercontributing for years and then trying to catch up too late — the compounding advantage diminishes significantly after 50.",
] as const;

const whoShouldUse = [
  {
    title: "Employed professionals without a pension fund",
    description:
      "If your employer does not offer a retirement fund, an RA is the primary tool for tax-efficient, long-term retirement saving. The deduction works in your favour from the first contribution.",
  },
  {
    title: "Self-employed and business owners",
    description:
      "No employer pension means no default retirement saving. The full 27.5% deduction available via an RA is one of the largest legal tax reliefs available to self-employed individuals in South Africa.",
  },
  {
    title: "High-income earners with surplus after TFSA",
    description:
      "Once the R36,000 TFSA annual allowance is used, an RA is the logical next vehicle. The deduction is valuable at high marginal rates — a 45% taxpayer saves R45 in tax for every R100 contributed.",
  },
  {
    title: "Anyone with a long time horizon",
    description:
      "The lock-in to age 55 is a feature, not a flaw, if you will not need the capital before then. The compounding of tax-free growth over 20 to 30 years produces results that are mathematically difficult to replicate in a taxable account.",
  },
] as const;

const actionList = [
  "Calculate your current taxable income and what 27.5% looks like as an annual contribution.",
  "Check whether your employer already contributes to a pension or provident fund — that counts toward the 27.5% limit.",
  "If you have an existing RA, confirm the underlying fund allocation and whether it matches your time horizon and risk profile.",
  "Review your beneficiary nominations — confirm they are current and reflect your actual wishes.",
  "Consider whether a TFSA should run alongside the RA, or whether the RA alone is sufficient given your situation.",
  "If you are within 10 years of retirement, model the lump sum vs living annuity vs combination split before you need to decide.",
  "Book a session to stress-test your numbers — contribution rate, expected retirement age, drawdown strategy, and tax optimisation.",
] as const;

export const metadata: Metadata = {
  title: "Retirement Annuities Explained | Gert Fourie",
  description:
    "A deep-dive into South African retirement annuities — the 27.5% tax deduction, lock-in rules, what happens at retirement, living vs guaranteed annuities, and who should use one.",
};

export default function RetirementAnnuitiesPage() {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 text-[var(--cream)] sm:pt-28 sm:pb-24">
      <article className="container max-w-4xl">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/guides"
            className="text-sm uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[var(--gold)]"
          >
            Guides
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">In-Depth Guide</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Retirement Annuities Explained
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            The most tax-efficient long-term savings vehicle available to South Africans —
            and the most misunderstood. Here is how it actually works, what it costs you
            to get wrong, and when it makes sense.
          </p>
        </div>

        {/* Key numbers */}
        <div className="mx-auto mt-10 max-w-3xl grid gap-4 sm:grid-cols-3">
          <div className="surface p-6 text-center">
            <p className="font-serif text-3xl text-[var(--gold)]">27.5%</p>
            <p className="mt-2 text-sm text-white/60">of taxable income deductible per year</p>
          </div>
          <div className="surface p-6 text-center">
            <p className="font-serif text-3xl text-[var(--gold)]">R350k</p>
            <p className="mt-2 text-sm text-white/60">annual deduction cap</p>
          </div>
          <div className="surface p-6 text-center">
            <p className="font-serif text-3xl text-[var(--gold)]">R550k</p>
            <p className="mt-2 text-sm text-white/60">tax-free lump sum at retirement</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">

          {/* Introduction */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Introduction</h2>
            <p className="text-lg leading-8 text-white/75">
              A Retirement Annuity is a long-term savings vehicle that allows South Africans to
              save for retirement in a tax-advantaged environment. Contributions are deductible,
              growth is untaxed, and the proceeds at retirement receive preferential tax treatment.
              It is regulated under the Pension Funds Act and administered by a licensed insurer
              or fund manager.
            </p>
            <p className="text-lg leading-8 text-white/75">
              Most people understand that an RA has something to do with tax. Few understand
              exactly how much tax advantage is available, what the rules actually say, or how
              the decisions you make at retirement determine whether decades of disciplined saving
              are used efficiently or squandered in a single poorly-structured withdrawal.
            </p>
            <p className="text-lg leading-8 text-white/75">
              This guide covers the mechanics, the decisions, the protections, and the mistakes —
              in enough detail to make the decisions well.
            </p>
          </section>

          {/* How the tax works */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">1. How the tax advantage actually works</h2>
            <p className="text-lg leading-8 text-white/75">
              The RA delivers tax relief at three distinct points — contribution, accumulation,
              and distribution. Most investment accounts only offer one of these, if any.
            </p>
            <div className="space-y-4">
              {taxBenefits.map((item, i) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {i + 1}. {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">The compounding effect of tax-free growth</h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                Consider R5,000 per month contributed for 30 years at a 10% annual return. In a
                standard taxable account — assuming modest CGT and dividend tax drag of 2% per year
                — the effective return drops to around 8%, leaving the fund roughly 40% smaller at
                the end. Inside an RA, that drag does not exist. The difference is not a rounding
                error. At scale, it is life-changing.
              </p>
            </div>
          </section>

          {/* The 27.5% deduction */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">2. The 27.5% deduction — what it means in practice</h2>
            <p className="text-lg leading-8 text-white/75">
              You may deduct contributions of up to 27.5% of the greater of your taxable income
              or remuneration, subject to a maximum of R350,000 per year. Contributions above
              that limit are not lost — they roll forward and receive a deduction in a future
              year when there is capacity.
            </p>
            <div className="surface p-6 sm:p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">A practical example</h3>
              <table className="w-full text-sm text-white/70">
                <thead>
                  <tr className="border-b border-[var(--gold)]/20 text-left text-xs uppercase tracking-[0.12em] text-[var(--gold)]">
                    <th className="pb-3 pr-4">Scenario</th>
                    <th className="pb-3 pr-4">Taxable income</th>
                    <th className="pb-3 pr-4">RA contribution</th>
                    <th className="pb-3">Tax saving (36%)</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">Starter</td>
                    <td className="py-3 pr-4">R400,000</td>
                    <td className="py-3 pr-4">R36,000</td>
                    <td className="py-3">R12,960</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">Mid-career</td>
                    <td className="py-3 pr-4">R700,000</td>
                    <td className="py-3 pr-4">R96,250</td>
                    <td className="py-3">R38,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white">Senior</td>
                    <td className="py-3 pr-4">R1,200,000</td>
                    <td className="py-3 pr-4">R330,000</td>
                    <td className="py-3">R148,500</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-white/40">Illustrative only. Marginal tax rates vary. Consult a tax practitioner for your specific position.</p>
            </div>
            <p className="text-lg leading-8 text-white/75">
              The deduction is claimed on your annual tax return. If you contribute via debit
              order, keep your contribution statements — SARS requires them if audited.
            </p>
          </section>

          {/* Lock-in rules */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">3. The lock-in — and why it is a feature</h2>
            <div className="surface p-6 sm:p-8">
              <p className="text-lg leading-8 text-white/75">
                You cannot access an RA before age 55, except in cases of permanent disability,
                emigration under specific circumstances, or if the fund value is below R15,000.
                There are no exceptions for financial difficulty, lifestyle needs, or business
                emergencies.
              </p>
              <p className="mt-4 text-lg font-semibold text-white">
                This is not a flaw. It is the most valuable characteristic of the vehicle.
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                The research on retirement savings is consistent: the single greatest predictor of
                retirement shortfall is early withdrawal. An RA removes the option. You cannot
                access the money when the car breaks, when the business struggles, or when a
                lifestyle upgrade feels justified. The lock-in does the discipline for you.
              </p>
            </div>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;The best financial plan is the one you cannot undo in a moment of weakness.&rdquo;
            </blockquote>
          </section>

          {/* At retirement */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">4. What happens at retirement</h2>
            <p className="text-lg leading-8 text-white/75">
              From age 55, you can access the RA. The structure of that access determines how
              efficiently decades of saving are used. The decisions made here are largely
              irreversible — particularly the annuity choice.
            </p>
            <p className="text-base leading-7 text-white/70">
              Up to one-third may be taken as a lump sum. The remaining two-thirds must be
              used to purchase an annuity. You have two primary options — or a combination.
            </p>
            <div className="space-y-4">
              {atRetirement.map((item) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">The living annuity drawdown trap</h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                A living annuity drawdown of 8% sounds modest. At 10% average returns, it appears
                sustainable. But sequence-of-returns risk means a market decline in the first few
                years of retirement — while drawing at 8% — can permanently impair a fund that
                would otherwise have recovered. The recommended sustainable drawdown rate at
                retirement is 4–5%. Above 6%, depletion risk becomes material within 20 years.
              </p>
            </div>
          </section>

          {/* Protections */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">5. Protections most people do not know about</h2>
            <div className="space-y-4">
              {protections.map((item) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who should use it */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">6. Who should use a Retirement Annuity</h2>
            <div className="space-y-4">
              {whoShouldUse.map((item) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">7. Expensive mistakes to avoid</h2>
            <ul className="space-y-4">
              {mistakes.map((mistake) => (
                <li key={mistake} className="surface p-5 text-base leading-7 text-white/75">
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          {/* Action list */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">8. What to do this week</h2>
            <ol className="space-y-4">
              {actionList.map((item, index) => (
                <li key={item} className="surface p-5 text-base leading-7 text-white/75">
                  <span className="mr-3 font-semibold text-[var(--gold)]">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          {/* Conclusion */}
          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              A Retirement Annuity is not glamorous. It does not promise rapid wealth or
              exciting returns. What it offers is a legally protected, tax-advantaged structure
              that forces long-term discipline and rewards patience more than almost any other
              vehicle available in South Africa.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Used correctly — with the right fund, the right contribution rate, the right
              annuity structure at retirement, and up-to-date nominations — it is one of the
              most powerful financial decisions an employed or self-employed South African can
              make. Used incorrectly, or not at all, it represents a compounding opportunity
              surrendered year by year.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              The specific numbers — how much to contribute, which fund, how to structure
              retirement income — depend entirely on your income, existing cover, timeline,
              and goals. Getting those right is worth a proper conversation.
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
