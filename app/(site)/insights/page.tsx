import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Gert Fourie Financial Advisor",
  description:
    "Structured perspectives on economic cycles, portfolio construction, tax developments, risk management, and behavioural finance in South Africa.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Insights
          </h1>
          <p className="mt-6 text-2xl font-semibold text-blue-800">Clarity creates confidence.</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Capital does not grow through reaction. It grows through structure, discipline, and
            informed decision-making.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            This section is dedicated to rigorous thinking around markets, capital allocation, risk
            management, and investor behaviour within the South African context.
          </p>
          <p className="mt-6 text-lg text-gray-600">Here you will find structured perspectives on:</p>
          <ul className="mt-4 space-y-3 text-lg text-gray-700 max-w-xl mx-auto">
            <li className="flex items-start justify-center">
              <span className="mr-3 text-blue-700 font-bold">&bull;</span> Economic cycles and
              market structure
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-blue-700 font-bold">&bull;</span> Portfolio construction
              and asset allocation strategy
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-blue-700 font-bold">&bull;</span> Legislative and tax
              developments affecting investors
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-blue-700 font-bold">&bull;</span> Risk management and
              capital preservation
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-3 text-blue-700 font-bold">&bull;</span> Behavioural patterns
              that influence financial decision-making
            </li>
          </ul>
          <p className="mt-8 text-xl font-medium text-gray-800">
            Markets reward patience. Volatility rewards discipline.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Investors often lose not because of poor assets, but because of poor reactions.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            My role is not to predict short-term noise. It is to interpret structural trends, manage
            risk deliberately, and position capital intelligently across cycles.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Insight is the difference between reacting to headlines and understanding probability.
          </p>
          <p className="mt-4 text-lg text-gray-600">Capital compounds where thinking is measured.</p>
        </div>

        <div className="my-12 h-px w-full bg-gray-200" />

        <div className="text-center">
          <p className="text-lg font-medium text-gray-800">
            Structured analysis published regularly for clients and serious investors.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-800 transition"
          >
            Request a Strategic Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
