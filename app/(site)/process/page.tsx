import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Advisory Process | Gert Fourie Financial Advisor",
  description:
    "A deliberate, disciplined, and repeatable process to build and protect wealth through structure, not reaction.",
};

export default function ProcessPage() {
  return (
    <main className="bg-[#0B0D10] text-[var(--cream)] pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            Our Advisory Process
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Wealth is not built through reaction. It is built through structure.
          </p>
          <p className="mt-4 text-lg font-medium text-white/75">
            My advisory process is deliberate, disciplined, and repeatable. Every recommendation
            follows a defined framework designed to protect capital, optimise growth, and reduce
            unnecessary risk.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[#0B0D10] text-xl font-bold shadow-md">
                  1
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-serif font-bold text-[var(--gold)]">
                Strategic Discovery
              </h2>
              <p className="mt-4 text-lg text-white/70">
                We begin with a comprehensive assessment of your financial position. Assets,
                liabilities, income streams, tax exposure, existing structures, risk cover, and
                long-term objectives are mapped in detail.
              </p>
              <p className="mt-4 font-semibold text-[var(--gold)]">Clarity precedes strategy.</p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[#0B0D10] text-xl font-bold shadow-md">
                  2
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-serif font-bold text-[var(--gold)]">
                Strategy Design
              </h2>
              <p className="mt-4 text-lg text-white/70">Data without direction has no value.</p>
              <p className="mt-3 text-lg text-white/70">
                Based on your objectives, I design a structured financial strategy focused on:
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Capital
                  preservation
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Sustainable
                  long-term growth
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Tax efficiency
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Risk mitigation
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Liquidity
                  planning
                </li>
              </ul>
              <p className="mt-6 text-white/70">
                Asset allocation decisions are made intentionally, not emotionally. Strategy
                determines product selection -- never the other way around.
              </p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[#0B0D10] text-xl font-bold shadow-md">
                  3
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-serif font-bold text-[var(--gold)]">
                Implementation
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Once strategy is defined, structures are executed precisely.
              </p>
              <p className="mt-3 text-lg text-white/70">
                This may include investment vehicles, retirement planning structures, offshore
                exposure, risk cover alignment, estate planning considerations, or business-related
                financial structuring.
              </p>
              <p className="mt-4 font-semibold text-[var(--gold)]">
                Every decision must serve the strategy.
              </p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[#0B0D10] text-xl font-bold shadow-md">
                  4
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-serif font-bold text-[var(--gold)]">
                Ongoing Oversight
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Markets change. Legislation evolves. Life shifts.
              </p>
              <p className="mt-3 text-lg text-white/70">
                Your financial strategy is reviewed regularly to ensure alignment with your
                objectives. Portfolios are rebalanced when necessary. Adjustments are made with
                discipline -- not reaction.
              </p>
              <p className="mt-4 font-semibold text-[var(--gold)]">Consistency compounds.</p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[#0B0D10] text-xl font-bold shadow-md">
                  5
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-serif font-bold text-[var(--gold)]">
                Protection &amp; Continuity
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Wealth planning is incomplete without liquidity at death and structural efficiency.
              </p>
              <p className="mt-3 text-lg text-white/70">
                Estate alignment, beneficiary structuring, and risk protection ensure your capital
                transfers with clarity and control.
              </p>
              <p className="mt-4 font-semibold text-[var(--gold)]">
                Structure protects what emotion cannot.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl font-medium text-white/80">
            Ready to bring structure to your wealth journey?
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] px-8 py-4 text-sm tracking-[0.12em] uppercase hover:bg-[var(--gold)] hover:text-[#0B0D10] transition-colors"
          >
            Schedule a Strategy Session
          </a>
        </div>
      </div>
    </main>
  );
}
