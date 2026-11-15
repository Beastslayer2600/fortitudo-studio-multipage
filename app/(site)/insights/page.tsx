import { ARTICLES, articlePath } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { INSIGHT_PRINCIPLES } from "@/lib/principles";

export const metadata = pageMetadata({
  path: "/insights",
  title: "Insights",
  description:
    "Structured perspectives on economic cycles, portfolio construction, tax developments, risk management, and behavioural finance in South Africa.",
});

const insights = ARTICLES.filter((a) => a.type === "insight").map((a) => ({
  category: a.card?.category ?? "",
  title: a.card?.title ?? a.title,
  description: a.card?.blurb ?? a.description,
  href: articlePath(a),
  featured: a.card?.featured ?? false,
}));

export default function InsightsPage() {
  return (
    <main className="relative z-10 min-h-screen text-[var(--cream)] pt-24 pb-16 md:pt-28 md:pb-24">
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
        </div>

        <div className="my-12 h-px w-full bg-white/10" />

        <div className="space-y-6">
          {insights.map((insight) => (
            <article key={insight.href} className="surface p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
                {INSIGHT_PRINCIPLES[insight.href] ? `${INSIGHT_PRINCIPLES[insight.href]} \u00B7 ` : ""}
                {"featured" in insight && insight.featured
                  ? `Latest \u00B7 ${insight.category}`
                  : insight.category}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">{insight.title}</h2>
              <p className="mt-4 text-white/70">{insight.description}</p>
              <div className="mt-6">
                <Link
                  href={insight.href}
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm tracking-[0.12em] uppercase text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
                >
                  Read insight
                </Link>
              </div>
            </article>
          ))}
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
