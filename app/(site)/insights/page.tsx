import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Gert Fourie Financial Advisor",
  description:
    "Structured perspectives on economic cycles, portfolio construction, tax developments, risk management, and behavioural finance in South Africa.",
};

export default function InsightsPage() {
  return (
    <main className="bg-[#0B0D10] text-[var(--cream)] pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">Insights</h1>
          <p className="mt-6 text-2xl font-semibold text-[var(--gold)]">
            Clarity creates confidence.
          </p>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Capital does not grow through reaction. It grows through structure, discipline, and
            informed decision-making.
          </p>
          <p className="mt-6 text-lg text-white/70">
            This section is dedicated to rigorous thinking around markets, capital allocation, risk
            management, and investor behaviour within the South African context.
          </p>
          <p className="mt-6 text-lg text-white/70">Here you will find structured perspectives on:</p>
          <ul className="mt-4 space-y-3 text-lg text-white/70 max-w-xl mx-auto">
            <li className="flex items-start justify-center">
              <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Economic cycles and
              market structure
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Portfolio
              construction and asset allocation strategy
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Legislative and tax
              developments affecting investors
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Risk management and
              capital preservation
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-[var(--gold)] font-bold">&bull;</span> Behavioural patterns
              that influence financial decision-making
            </li>
          </ul>
          <p className="mt-8 text-xl font-medium text-white/80">
            Markets reward patience. Volatility rewards discipline.
          </p>
          <p className="mt-4 text-lg text-white/70">
            Investors often lose not because of poor assets, but because of poor reactions.
          </p>
          <p className="mt-4 text-lg text-white/70">
            My role is not to predict short-term noise. It is to interpret structural trends, manage
            risk deliberately, and position capital intelligently across cycles.
          </p>
          <p className="mt-6 text-lg text-white/70">
            Insight is the difference between reacting to headlines and understanding probability.
          </p>
          <p className="mt-4 text-lg text-white/70">Capital compounds where thinking is measured.</p>
        </div>

        <div className="my-12 h-px w-full bg-white/10" />

        <div className="text-center">
          <p className="text-lg font-medium text-white/80">
            Structured analysis published regularly for clients and serious investors.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] px-8 py-4 text-sm tracking-[0.12em] uppercase hover:bg-[var(--gold)] hover:text-[#0B0D10] transition-colors"
          >
            Request a Strategic Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
