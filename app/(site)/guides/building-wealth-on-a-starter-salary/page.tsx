import type { Metadata } from "next";
import Link from "next/link";

const buckets = [
  {
    title: "Live",
    description: "Rent, food, transport, and the lifestyle costs that keep daily life moving.",
  },
  {
    title: "Protect",
    description: "Life cover, disability cover, and medical cover that stop one setback from wiping you out.",
  },
  {
    title: "Grow",
    description: "Savings, investments, and retirement contributions that build future optionality.",
  },
] as const;

const vehicles = [
  {
    title: "Emergency fund",
    description:
      "Build three to six months of living expenses in a money market account before you take more risk elsewhere.",
  },
  {
    title: "Tax-Free Savings Account",
    description:
      "For many young professionals, this is the best first investment vehicle. Annual and lifetime limits still matter, so use the allowance deliberately.",
  },
  {
    title: "Retirement annuity",
    description:
      "An RA can improve tax efficiency and forces long-term discipline by locking the money in until later life.",
  },
  {
    title: "Unit trusts",
    description:
      "Useful for medium-term goals when you need flexibility, but returns depend on the fund and the risk you take.",
  },
  {
    title: "Life and disability cover",
    description:
      "Your earning ability is your largest asset early in your career. Protecting that income matters as much as growing it.",
  },
] as const;

const mistakes = [
  "Having no will once you already have assets, accounts, or beneficiaries to think about.",
  "Skipping disability cover even though losing income is often the bigger short-term risk than death.",
  "Leaving cash in a cheque account where inflation quietly does the damage.",
  "Chasing returns without understanding the risk or the vehicle.",
  "Waiting for perfect timing before you start investing at all.",
  "Failing to review the plan as income, family structure, and responsibilities change.",
] as const;

const actionList = [
  "Calculate the actual amount that hits your bank account each month.",
  "Track every expense for one full month before making aggressive changes.",
  "Open a TFSA if you do not already have one.",
  "Automate the Grow bucket with a debit order.",
  "Review life and disability cover with current income and obligations in mind.",
  "Draft a basic will and update your beneficiaries.",
  "Book a planning session to stress-test the numbers against your real goals.",
] as const;

const mindsetPoints = [
  "Spending is often emotional, not rational. Delay impulsive purchases long enough for the feeling to cool.",
  "Identity matters. \"I am someone who builds wealth\" is stronger than \"I should probably save more.\"",
  "Comparison is expensive. A lifestyle that looks successful can still be financed by debt.",
  "Wealth usually feels boring while it is being built. That is normal.",
] as const;

export const metadata: Metadata = {
  title: "Building Wealth on a Starter Salary | Gert Fourie",
  description:
    "A practical guide for young professionals who want to start building wealth early through structure, protection, and disciplined investing.",
};

export default function BuildingWealthOnAStarterSalaryPage() {
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
            Building Wealth on a Starter Salary
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            A practical guide for young professionals who want to start building real wealth now,
            with the salary they already have.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">Why time matters</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            Starting at 22 instead of 32 can be worth roughly R5.4 million by age 65 in the same
            monthly plan.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Illustrative only: R1,000 invested monthly at a 10% annual return before fees and
            inflation.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Introduction</h2>
            <p className="text-lg leading-8 text-white/75">
              Most people think wealth begins when they finally earn enough. It does not. It begins
              in the gap between what you earn and what you spend, and that gap can be built long
              before your salary feels impressive.
            </p>
            <p className="text-lg leading-8 text-white/75">
              Early career pressure is real: rent, transport, social life, career uncertainty, and
              the feeling that you should be enjoying your twenties rather than locking money away.
              The point is not to eliminate all of that. The point is to build a system that keeps
              working while your life keeps moving.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              1. Starting early is the advantage
            </h2>
            <p className="text-lg leading-8 text-white/75">
              You may not have capital or connections yet, but you do have time. That matters
              because compounding rewards years in the market far more than it rewards dramatic late
              contributions.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The real goal is not to get rich quickly. It is to build a financial machine that
              keeps accumulating while you work, rest, travel, and move through major life changes.
              That machine starts small and becomes powerful through consistency.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              2. Understand your cash flow before you invest
            </h2>
            <div className="surface p-6">
              <h3 className="text-xl font-semibold text-white">Know the real salary number</h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                Cost to company, gross pay, and take-home pay are not the same thing. Your plan has
                to be built on the number that lands in your account after tax, UIF, and employer
                deductions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {buckets.map((bucket) => (
                <div key={bucket.title} className="surface p-5">
                  <h3 className="text-lg font-semibold text-white">{bucket.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{bucket.description}</p>
                </div>
              ))}
            </div>
            <div className="surface p-6">
              <h3 className="text-xl font-semibold text-white">A workable starting split</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-white/70">
                <li>50-60% on living expenses</li>
                <li>10-15% on protection</li>
                <li>20-30% on long-term growth</li>
              </ul>
              <p className="mt-4 text-base leading-7 text-white/70">
                The exact percentages will move, but the principle should not: fund the Grow bucket
                before lifestyle expands into it.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              3. Where the money should go
            </h2>
            <div className="space-y-4">
              {vehicles.map((vehicle, index) => (
                <div key={vehicle.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {index + 1}. {vehicle.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{vehicle.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              4. Expensive mistakes to avoid
            </h2>
            <ul className="space-y-4 text-base leading-7 text-white/75">
              {mistakes.map((mistake) => (
                <li key={mistake} className="surface p-5">
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">5. What to do this week</h2>
            <ol className="space-y-4">
              {actionList.map((item, index) => (
                <li key={item} className="surface p-5 text-base leading-7 text-white/75">
                  <span className="mr-3 font-semibold text-[var(--gold)]">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              6. The mindset that makes it stick
            </h2>
            <ul className="space-y-4">
              {mindsetPoints.map((point) => (
                <li key={point} className="surface p-5 text-base leading-7 text-white/75">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              You do not need a massive salary to build real wealth. You need a plan, the right
              vehicles, and enough discipline to keep funding the system before lifestyle absorbs
              the opportunity.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              The details still matter: tax, risk, cover, time horizon, and the trade-offs specific
              to your income. Getting those right early is worth more than most people realize.
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
