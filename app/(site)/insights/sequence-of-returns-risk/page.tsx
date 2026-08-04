import type { Metadata } from "next";
import Link from "next/link";

const drivers = [
  {
    title: "Withdrawal rate meets a falling market",
    description:
      "Drawing a fixed rand amount or fixed percentage from a shrinking pool means you sell more units to raise the same income - permanently reducing the capital left to recover when markets turn.",
  },
  {
    title: "Timing, not just returns, decides the outcome",
    description:
      "Two retirees can earn the exact same average return over 20 years and end up in very different positions, purely because of the order in which good and bad years occurred.",
  },
  {
    title: "Early losses compound the damage",
    description:
      "A market decline in year one or two of retirement does more harm than the same decline in year fifteen, because there is less time and less capital left to recover before further withdrawals are needed.",
  },
] as const;

const safeguards = [
  {
    title: "A conservative starting drawdown",
    description:
      "Sustainable withdrawal rates are generally lower than most people assume, particularly in the first decade of retirement when sequence risk is most dangerous.",
  },
  {
    title: "A cash and near-cash buffer",
    description:
      "Holding one to three years of income needs outside of growth assets means you are not forced to sell equities at depressed prices to fund monthly income.",
  },
  {
    title: "A blended annuity structure",
    description:
      "Combining a guaranteed income for essential expenses with a living annuity for flexibility and legacy reduces how much of your lifestyle depends on market timing.",
  },
  {
    title: "Flexible spending in bad years",
    description:
      "Building in the ability to draw less during a downturn - even temporarily - materially improves the odds the plan lasts as long as you do.",
  },
] as const;

export const metadata: Metadata = {
  title: "Sequence-of-Returns Risk Explained | Gert Fourie",
  description:
    "Why the order of investment returns - not just the average - can determine whether a retirement income plan survives. A structured look at sequence-of-returns risk and how to plan around it.",
};

export default function SequenceOfReturnsRiskPage() {
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
            Risk Management
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Sequence-of-Returns Risk: The Retirement Danger Few People Plan For
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Average return is the number most people focus on. In retirement, the order those
            returns arrive in can matter just as much.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">The core problem</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            Two portfolios can average the same 8% annual return over 20 years and finish decades
            apart in value - purely because of when the down years happened.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Illustrative only. Actual outcomes depend on drawdown rate, fees, asset allocation, and
            market conditions specific to your plan.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Why this matters more in retirement</h2>
            <p className="text-lg leading-8 text-white/75">
              While you are working and contributing, a market downturn is largely a paper loss -
              you keep buying units at lower prices and the eventual recovery works in your favour.
              The moment you start withdrawing an income instead of contributing one, that
              relationship flips.
            </p>
            <p className="text-lg leading-8 text-white/75">
              Every withdrawal made during a downturn locks in a loss that can no longer recover.
              The capital base shrinks faster than the market alone would explain, and future
              withdrawals - even unchanged in size - represent a larger share of what is left.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">What actually drives the risk</h2>
            <div className="space-y-4">
              {drivers.map((driver) => (
                <div key={driver.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{driver.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{driver.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              Building a plan that survives a bad first decade
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Sequence risk cannot be eliminated - nobody controls when markets fall. It can,
              however, be planned around. The goal is a structure that does not force you to sell
              growth assets at the worst possible moment.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {safeguards.map((item) => (
                <div key={item.title} className="surface p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">The five years that matter most</h2>
            <p className="text-lg leading-8 text-white/75">
              The five years before and after your retirement date carry disproportionate weight.
              This is the window where the portfolio is at its largest, withdrawals are beginning,
              and there is comparatively little time for a downturn to recover before it affects
              your income. Reviewing asset allocation and drawdown strategy specifically around this
              window - rather than leaving it on autopilot - is one of the highest-value planning
              decisions a pre-retiree can make.
            </p>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Average returns make for a reassuring headline number, but they are not what pays a
              retirement income. Structure, drawdown discipline, and a buffer against forced selling
              in down years are what determine whether a plan holds up when markets do not cooperate
              on schedule.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              The right drawdown rate and asset mix depend on your specific time horizon, other
              income sources, and risk tolerance - worth stress-testing properly before you commit
              to a number.
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
