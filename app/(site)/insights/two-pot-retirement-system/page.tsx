import type { Metadata } from "next";
import Link from "next/link";

const mechanics = [
  {
    title: "Retirement Component",
    description:
      "Two-thirds of every contribution made from 1 September 2024 onward is locked away until retirement age. It cannot be accessed on resignation, retrenchment, or dismissal - only transferred between approved funds or converted into an annuity at retirement.",
  },
  {
    title: "Savings Component",
    description:
      "The remaining third can be accessed before retirement, but only once per tax year, and only once the balance reaches the minimum threshold set by the fund. Every withdrawal is taxed at your marginal income tax rate and reduces what compounds toward retirement.",
  },
  {
    title: "Vested Component",
    description:
      "Contributions and growth accumulated before 1 September 2024 sit in a separate vested pot and continue to follow the old rules that applied to your fund before the reform.",
  },
] as const;

const considerations = [
  "A savings pot withdrawal is taxed at your marginal rate, not a discounted retirement lump-sum rate - so it is one of the more expensive ways to access cash.",
  "Every rand withdrawn from the savings pot is a rand that stops compounding for retirement, often for decades.",
  "Because only one withdrawal is allowed per tax year, timing matters - a badly timed small withdrawal can waste the year's access for a larger, more useful one.",
  "The retirement component's stricter preservation rules mean job changes no longer offer the same access to two-thirds of your fund that many people previously relied on.",
] as const;

export const metadata: Metadata = {
  title: "South Africa's Two-Pot Retirement System | Gert Fourie",
  description:
    "What the two-pot retirement reform actually changes for your contributions, access to funds, and long-term retirement planning - explained plainly.",
};

export default function TwoPotSystemPage() {
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
            Legislative &amp; Tax Developments
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            South Africa&apos;s Two-Pot Retirement System: What It Actually Changes
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            The reform gives South Africans limited access to retirement savings before retirement
            - at a real cost most people underestimate.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">In short</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            Contributions made since 1 September 2024 are split roughly two-thirds preserved, one-third
            accessible - with access limited to one withdrawal per tax year.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/60">
            General information only. Rules, thresholds, and tax treatment can change - confirm the
            current position with your fund and a tax practitioner before acting.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Why the reform exists</h2>
            <p className="text-lg leading-8 text-white/75">
              For years, the biggest criticism of South African retirement funds was that people
              lost their preservation discipline the moment they changed jobs - cashing out full
              fund balances instead of transferring them, and quietly eroding their retirement
              outcome one resignation at a time.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The two-pot system was designed to solve two problems at once: give people limited,
              structured access to their own savings during genuine short-term need, while making
              the retirement portion of the fund far harder to raid along the way.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">How the split actually works</h2>
            <div className="space-y-4">
              {mechanics.map((item) => (
                <div key={item.title} className="surface p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              What this changes about your planning
            </h2>
            <ul className="space-y-4 text-base leading-7 text-white/75">
              {considerations.map((point) => (
                <li key={point} className="surface p-5">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              Access is not the same as a good decision
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The existence of a legal withdrawal option does not make withdrawing the right move.
              Every savings-pot withdrawal is measured against what that money would otherwise have
              become by retirement - and against the tax you pay to access it today. For a genuine
              emergency with no cheaper alternative, it can be the right tool. As a routine top-up to
              lifestyle spending, it usually is not.
            </p>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              The two-pot system is a meaningful structural change, not a minor tweak - it affects
              how much of every future contribution you can ever touch before retirement, and how
              expensive it is when you do. Understanding the mechanics before you need access is far
              better than working it out under financial pressure.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              How this affects your specific fund, contribution structure, and retirement timeline is
              worth reviewing directly rather than assuming.
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
