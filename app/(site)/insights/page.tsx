import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

// [REPLACE: SEO metadata]
export const metadata: Metadata = {
  title: "Insights",
  description:
    "Financial insights, market perspectives, and planning guidance from Ryno Greyling — helping you make decisions grounded in evidence.",
};

// [REPLACE: Replace with real blog posts or a CMS integration]
const posts = [
  {
    slug: "#",
    category: "Investor Behaviour",
    date: "March 2025",
    title: "Why Market Timing Fails Most Investors",
    excerpt:
      "The data on market timing is clear: attempts to enter and exit at the right moment consistently destroy long-term returns. Here is what the research shows — and what to do instead.",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Retirement",
    date: "February 2025",
    title: "The Retirement Income Gap: Planning for What Lies Ahead",
    excerpt:
      "South Africans are living longer than ever. Most retirement plans have not adjusted. Understanding the gap between projected income and actual needs is the first step to closing it.",
    readTime: "7 min read",
  },
  {
    slug: "#",
    category: "Tax Planning",
    date: "January 2025",
    title: "Tax-Efficient Investing: Strategies for High Earners",
    excerpt:
      "Your marginal tax rate is one of the biggest threats to long-term wealth accumulation. From TFSAs to retirement annuities, the right structures can make a substantial difference.",
    readTime: "6 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Investor Behaviour": "bg-[rgba(201,168,76,0.12)] text-[#C9A84C]",
  "Retirement":         "bg-[rgba(11,15,30,0.8)] text-[rgba(234,228,214,0.7)]",
  "Tax Planning":       "bg-[rgba(11,15,30,0.8)] text-[rgba(234,228,214,0.7)]",
};

export default function InsightsPage() {
  return (
    <div className="text-[#EAE4D6]">
      {/* Hero bar */}
      <div className="relative border-b border-[rgba(201,168,76,0.12)] pt-28 pb-20 px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0, transparent 88px, rgba(201,168,76,1) 88px, rgba(201,168,76,1) 90px)",
            backgroundSize: "180px 180px",
          }}
        />
        <div className="site-container relative">
          <p className="section-label mb-4">Insights</p>
          <h1 className="font-heading text-4xl font-bold text-[#EAE4D6] md:text-5xl">
            Clarity creates confidence
          </h1>
          <p className="mt-4 max-w-2xl text-[rgba(234,228,214,0.65)]">
            Structured perspectives on markets, retirement, tax, and the psychology of financial
            decision-making in South Africa.
          </p>
        </div>
      </div>

      {/* Post grid */}
      <section className="py-20 px-6">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={post.title}
                className="group surface flex flex-col overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[0_0_28px_rgba(201,168,76,0.1)]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Category band */}
                <div className="border-b border-[rgba(201,168,76,0.12)] px-6 py-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium ${
                      categoryColors[post.category] ?? "bg-[rgba(201,168,76,0.1)] text-[#C9A84C]"
                    }`}
                  >
                    <Tag size={11} strokeWidth={2} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[rgba(234,228,214,0.4)]">
                    <Calendar size={11} strokeWidth={1.8} />
                    {post.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h2 className="font-heading text-xl font-semibold leading-snug text-[#EAE4D6] group-hover:text-[#C9A84C] transition-colors">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-[rgba(234,228,214,0.6)]">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-[rgba(201,168,76,0.1)] pt-4 text-xs text-[rgba(234,228,214,0.4)]">
                    <span>{post.readTime}</span>
                    <Link
                      href={post.slug}
                      className="flex items-center gap-1.5 text-[#C9A84C] transition-all hover:gap-2.5"
                    >
                      Read
                      <ArrowRight size={13} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* More coming soon */}
          <div className="mt-16 text-center">
            <div className="gold-rule mx-auto mb-8 max-w-xs" />
            <p className="text-[rgba(234,228,214,0.45)] text-sm">
              {/* [REPLACE: Update or remove once CMS is connected] */}
              More articles published regularly. Subscribe via the contact form to be notified.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="site-container text-center">
          <p className="font-heading mb-6 text-2xl text-[#EAE4D6]">
            Capital compounds where thinking is measured.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Strategy Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
