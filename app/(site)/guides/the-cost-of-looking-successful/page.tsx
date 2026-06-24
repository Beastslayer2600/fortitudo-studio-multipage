import type { Metadata } from "next";
import Link from "next/link";

const statusSymbols = [
  "Expensive vehicles",
  "Designer brands",
  "High-end dining",
  "Luxury apartments",
  "Constant travel content online",
  "Lifestyle purchases financed through debt",
] as const;

const lifestyleInflationItems = [
  "Car payments",
  "Rent",
  "Subscription costs",
  "Clothing budgets",
  "Weekend spending",
  "Financing commitments",
] as const;

const stressReasons = [
  "Most income is committed before payday",
  "Debt repayments are high",
  "Emergency reserves are weak",
  "Spending is emotionally reactive",
  "Lifestyle expectations continue rising",
] as const;

const realWealth = [
  "Consistent investing",
  "Low unnecessary debt",
  "Emergency reserves",
  "Retirement contributions",
  "Asset ownership",
  "Long-term financial flexibility",
] as const;

const strongerStructure = [
  "A clear monthly cash-flow plan",
  "Emergency reserves",
  "Automated investing",
  "Appropriate insurance and income protection",
  "Controlled lifestyle growth",
  "Intentional spending rather than impulsive spending",
] as const;

const redefiningSuccess = [
  "Saying no to unnecessary upgrades",
  "Driving a paid-off car longer",
  "Building investments quietly",
  "Having emergency savings",
  "Avoiding debt-driven lifestyle pressure",
] as const;

export const metadata: Metadata = {
  title: "The Cost of Looking Successful | Gert Fourie",
  description:
    "How status spending, lifestyle inflation, and social comparison quietly delay long-term wealth creation — and how to build a financial life based on stability rather than performance.",
};

export default function CostOfLookingSuccessfulPage() {
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
            The Cost of Looking Successful
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            How status spending, lifestyle inflation, and social comparison quietly delay
            long-term wealth creation.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-xl font-semibold leading-8 text-white">
            Many young professionals earn more money than previous generations did at their age,
            yet still feel financially unstable.
          </p>
          <p className="mt-4 text-base leading-7 text-white/70">
            The problem is not always income. Often, it is cash-flow structure, lifestyle inflation,
            and the pressure to appear successful before becoming financially secure. Modern culture
            rewards visible wealth far more than invisible stability.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              1. The psychology of status spending
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Human beings are social creatures. Much of our financial behavior is influenced by
              identity, comparison, and belonging. Historically, status symbols communicated safety,
              capability, and social standing. In modern life, the same instincts often show up through:
            </p>
            <ul className="space-y-3">
              {statusSymbols.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;A surprising number of financially stressed people look financially successful
              from the outside.&rdquo;
            </blockquote>
            <p className="text-lg leading-8 text-white/75">
              Social media intensifies this pressure. People no longer compare themselves only to
              friends or neighbors — they compare themselves to carefully curated versions of thousands
              of strangers online. This creates a psychological environment where spending feels
              emotionally rewarding in the short term, even when it damages long-term financial health.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              2. Lifestyle inflation — the silent wealth killer
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Lifestyle inflation happens when spending rises every time income increases. A salary
              increase should improve financial stability. Instead, many people immediately increase:
            </p>
            <ul className="space-y-3">
              {lifestyleInflationItems.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              Over time, higher income creates a more expensive lifestyle rather than stronger
              wealth-building capacity. The danger is that lifestyle inflation feels normal. Small
              increases rarely feel dramatic in isolation, but over years they can completely absorb
              what could have become investments, emergency reserves, or retirement contributions.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              3. Why high earners still feel financially stressed
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Financial stress is often connected more closely to obligations than income. A person
              earning a strong salary may still experience constant pressure if:
            </p>
            <ul className="space-y-3">
              {stressReasons.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <div className="surface p-6">
              <p className="text-lg leading-8 text-white/75">
                The result is a fragile financial structure. One unexpected event — job loss, illness,
                or economic pressure — can create significant instability. Wealth is not simply about
                earning more. It is about retaining flexibility, liquidity, and control over future
                decisions.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              4. The difference between looking wealthy and building wealth
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Many visible signs of wealth are liabilities rather than assets. A financed luxury
              vehicle may create the appearance of financial success while reducing monthly investment
              capacity. Expensive consumption often creates temporary emotional reward but does not
              compound financially. Real wealth is usually quiet:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {realWealth.map((item) => (
                <div key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </div>
              ))}
            </div>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;Financial security is often invisible during the early stages of wealth
              creation.&rdquo;
            </blockquote>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              5. Building a stronger financial structure
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Sustainable wealth-building starts with structure rather than perfection.
              A healthier financial system may include:
            </p>
            <ul className="space-y-3">
              {strongerStructure.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              Automation is especially powerful. Reducing the number of emotional decisions around
              money improves long-term consistency.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              6. Redefining success
            </h2>
            <p className="text-lg leading-8 text-white/75">
              One of the healthiest financial shifts a person can make is redefining success away
              from appearance and toward stability. Real financial confidence often looks less
              dramatic than social media suggests. It may look like:
            </p>
            <ul className="space-y-3">
              {redefiningSuccess.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              Financial maturity is not about avoiding enjoyment. It is about creating a life where
              enjoyment is supported by stability rather than financed through stress.
            </p>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              The pressure to look successful is stronger than ever. But sustainable wealth is usually
              built quietly through consistency, discipline, and long-term thinking. The earlier a
              person learns to separate appearance from actual financial progress, the more freedom
              they create for their future self.
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
