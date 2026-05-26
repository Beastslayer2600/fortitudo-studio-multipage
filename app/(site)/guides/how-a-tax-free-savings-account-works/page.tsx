import type { Metadata } from "next";
import Link from "next/link";

const whatYouCanHold = [
  {
    title: "Unit trusts",
    description:
      "The most common choice. You pick a fund — equity, balanced, money market — and the returns compound tax-free over time.",
  },
  {
    title: "Exchange-traded funds (ETFs)",
    description:
      "Low-cost, diversified, and well-suited for long-term TFSA investing. Many South Africans use a broad index ETF as the core of their TFSA.",
  },
  {
    title: "Fixed deposits",
    description:
      "Lower risk, lower return. Useful for capital preservation, but not the best use of the lifetime allowance if you have a long time horizon.",
  },
  {
    title: "Retail savings bonds",
    description:
      "Government-backed and accessible, but the growth potential is limited. Better suited for conservative investors or shorter time frames.",
  },
] as const;

const mistakes = [
  "Contributing more than R36,000 in a single tax year. SARS charges a 40% penalty on the excess — with no exceptions.",
  "Withdrawing and re-contributing. The money you take out does not restore your annual or lifetime limits. It is gone permanently.",
  "Opening multiple TFSAs and accidentally splitting the R36,000 correctly — or not. Combined contributions across all accounts still cannot exceed the annual limit.",
  "Holding cash in it long-term. Inflation quietly erodes the real value. The tax-free wrapper is most powerful with growth assets.",
  "Treating it as an emergency fund. Withdrawals permanently reduce your lifetime allowance. Keep your emergency fund separate.",
  "Starting too late. Every year without a TFSA is a year of compounding the government handed you that you did not take.",
] as const;

const strategyPoints = [
  {
    title: "Max it out early in the tax year",
    description:
      "Contributing R36,000 in April gives that money twelve more months of tax-free compounding than contributing in March. Over decades, that timing difference compounds into a meaningful amount.",
  },
  {
    title: "Use it for your highest-growth assets",
    description:
      "Tax relief is most valuable where returns are highest. A 12% annual return in a TFSA is worth far more than a 12% return in a taxable account over 20 years.",
  },
  {
    title: "Think in decades, not years",
    description:
      "A R500,000 lifetime contribution growing at 10% annually for 25 years becomes roughly R5.4 million — entirely tax-free. The wrapper rewards patience above everything else.",
  },
  {
    title: "Do not touch it",
    description:
      "The TFSA is not a flexible savings account. Treat every rand inside it as permanently invested. Withdrawals destroy lifetime contribution room you cannot get back.",
  },
] as const;

const actionList = [
  "Check whether you already have a TFSA and how much of your lifetime allowance you have used.",
  "If you do not have one, open a TFSA with a reputable platform this week — the process takes under 30 minutes.",
  "Set up a monthly debit order for R3,000 to reach the R36,000 annual limit over the year.",
  "Choose a low-cost, broadly diversified fund appropriate for your time horizon.",
  "Record your contributions — SARS tracks them, and you should too.",
  "Keep your emergency fund in a separate account so you are never tempted to touch the TFSA.",
  "Book a session to review whether the TFSA fits correctly into your broader investment and tax strategy.",
] as const;

export const metadata: Metadata = {
  title: "How a Tax-Free Savings Account Actually Works | Gert Fourie",
  description:
    "A clear guide to South African TFSAs — the annual and lifetime limits, what to hold inside one, common mistakes, and how to use it strategically.",
};

export default function TFSAGuidePage() {
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
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Guide</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            How a Tax-Free Savings Account Actually Works
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Most South Africans have heard of the TFSA. Far fewer use it correctly — or at all.
            Here is what the limits mean, what belongs inside one, and how to make it work for you.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">The numbers that matter</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            R36,000 per year. R500,000 over your lifetime. Every rand of growth, interest, and
            dividends earned inside the account is completely tax-free — forever.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Limits are set by SARS and apply across all TFSA accounts you hold. Contributions in
            excess of the annual limit are penalised at 40%.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Introduction</h2>
            <p className="text-lg leading-8 text-white/75">
              The Tax-Free Savings Account was introduced in South Africa in March 2015 as a way
              for individuals to save and invest without paying tax on the returns. No income tax
              on interest. No dividends tax. No capital gains tax — ever, even when you withdraw.
            </p>
            <p className="text-lg leading-8 text-white/75">
              That last part is what makes it genuinely powerful. Most investment vehicles defer
              tax or reduce it. The TFSA eliminates it entirely on qualifying contributions. Over
              a long enough time horizon, that difference compounds into a substantial amount.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The catch is that the rules are strict and the mistakes are permanent. Understanding
              exactly how the account works is the difference between using it well and wasting one
              of the best tax tools available to ordinary South Africans.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">1. The limits explained</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface p-6">
                <h3 className="text-lg font-semibold text-white">Annual limit</h3>
                <p className="mt-2 font-serif text-3xl text-[var(--gold)]">R36,000</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The maximum you can contribute across all your TFSA accounts in a single tax year
                  (1 March to 28/29 February). Unused allowance does not carry over to the next year.
                </p>
              </div>
              <div className="surface p-6">
                <h3 className="text-lg font-semibold text-white">Lifetime limit</h3>
                <p className="mt-2 font-serif text-3xl text-[var(--gold)]">R500,000</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The total amount you can contribute over your lifetime. Once reached, you cannot
                  add more — but the money inside continues to grow tax-free with no ceiling.
                </p>
              </div>
            </div>
            <div className="surface p-6">
              <h3 className="text-xl font-semibold text-white">The 40% penalty</h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                SARS imposes a 40% tax on any amount contributed above the annual R36,000 limit.
                This is non-negotiable and applies even if the excess was accidental. If you hold
                multiple TFSAs, your combined contributions across all of them count toward the limit.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">2. What you can hold inside a TFSA</h2>
            <p className="text-lg leading-8 text-white/75">
              A TFSA is a wrapper, not a product. What sits inside it determines how hard the
              tax-free benefit actually works for you.
            </p>
            <div className="space-y-4">
              {whatYouCanHold.map((item, index) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">3. How to use it strategically</h2>
            <p className="text-lg leading-8 text-white/75">
              Most people open a TFSA and leave it at that. A small number use it deliberately —
              and the difference in outcome over 20 to 30 years is significant.
            </p>
            <div className="space-y-4">
              {strategyPoints.map((point) => (
                <div key={point.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{point.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">4. Withdrawals — the rule most people miss</h2>
            <div className="surface p-6 sm:p-8">
              <p className="text-lg leading-8 text-white/75">
                You can withdraw from a TFSA at any time without paying tax on the withdrawal. That
                part is true. What most people do not realise is that the amount withdrawn does
                not restore your contribution limits.
              </p>
              <p className="mt-4 text-lg leading-8 text-white/75">
                If you have contributed R200,000 over the years and withdraw R50,000, your lifetime
                limit does not reset to R350,000. It stays at R300,000 remaining — as if the
                withdrawal never happened.
              </p>
              <p className="mt-4 text-lg font-semibold text-white">
                Every rand withdrawn is a permanent reduction in your lifetime tax-free contribution
                room. Treat the account accordingly.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">5. Expensive mistakes to avoid</h2>
            <ul className="space-y-4 text-base leading-7 text-white/75">
              {mistakes.map((mistake) => (
                <li key={mistake} className="surface p-5">
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">6. What to do this week</h2>
            <ol className="space-y-4">
              {actionList.map((item, index) => (
                <li key={item} className="surface p-5 text-base leading-7 text-white/75">
                  <span className="mr-3 font-semibold text-[var(--gold)]">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              The TFSA is one of the most straightforward tax advantages available to South
              Africans — and one of the most underused. The rules are simple once you know them.
              The discipline required is real but manageable.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Where it fits into your broader plan depends on your income, your other investments,
              your tax position, and your time horizon. Getting that fit right is worth examining
              properly, not guessing at.
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
