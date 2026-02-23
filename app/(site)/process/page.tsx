import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Advisory Process | Gert Fourie Financial Advisor",
  description:
    "A deliberate, disciplined, and repeatable process to build and protect wealth through structure, not reaction.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Advisory Process
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wealth is not built through reaction. It is built through structure.
          </p>
          <p className="mt-4 text-lg font-medium text-gray-700">
            My advisory process is deliberate, disciplined, and repeatable. Every recommendation
            follows a defined framework designed to protect capital, optimise growth, and reduce
            unnecessary risk.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold shadow-md">
                  1
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Strategic Discovery</h2>
              <p className="mt-4 text-lg text-gray-600">
                We begin with a comprehensive assessment of your financial position. Assets,
                liabilities, income streams, tax exposure, existing structures, risk cover, and
                long-term objectives are mapped in detail.
              </p>
              <p className="mt-4 font-semibold text-indigo-700">Clarity precedes strategy.</p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold shadow-md">
                  2
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Strategy Design</h2>
              <p className="mt-4 text-lg text-gray-600">Data without direction has no value.</p>
              <p className="mt-3 text-lg text-gray-600">
                Based on your objectives, I design a structured financial strategy focused on:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">•</span> Capital preservation
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">•</span> Sustainable long-term growth
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">•</span> Tax efficiency
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">•</span> Risk mitigation
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">•</span> Liquidity planning
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                Asset allocation decisions are made intentionally, not emotionally. Strategy
                determines product selection — never the other way around.
              </p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold shadow-md">
                  3
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Implementation</h2>
              <p className="mt-4 text-lg text-gray-600">
                Once strategy is defined, structures are executed precisely.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                This may include investment vehicles, retirement planning structures, offshore
                exposure, risk cover alignment, estate planning considerations, or business-related
                financial structuring.
              </p>
              <p className="mt-4 font-semibold text-indigo-700">
                Every decision must serve the strategy.
              </p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold shadow-md">
                  4
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Ongoing Oversight</h2>
              <p className="mt-4 text-lg text-gray-600">
                Markets change. Legislation evolves. Life shifts.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Your financial strategy is reviewed regularly to ensure alignment with your
                objectives. Portfolios are rebalanced when necessary. Adjustments are made with
                discipline — not reaction.
              </p>
              <p className="mt-4 font-semibold text-indigo-700">Consistency compounds.</p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center lg:justify-end lg:pr-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold shadow-md">
                  5
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Protection & Continuity</h2>
              <p className="mt-4 text-lg text-gray-600">
                Wealth planning is incomplete without liquidity at death and structural
                efficiency.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Estate alignment, beneficiary structuring, and risk protection ensure your capital
                transfers with clarity and control.
              </p>
              <p className="mt-4 font-semibold text-indigo-700">
                Structure protects what emotion cannot.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl font-medium text-gray-800">
            Ready to bring structure to your wealth journey?
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}
