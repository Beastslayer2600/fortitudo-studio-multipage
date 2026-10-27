import type { Metadata } from "next";
import Link from "next/link";
import EarningPowerCalculator from "./EarningPowerCalculator";

const title = "You're Betting Twice on AI";
const description =
  "Your career and your retirement fund were supposed to balance each other out. In 2026, they're quietly riding on the same trade.";
const canonical = "https://fortitudostudios.com/insights/betting-twice-on-ai";

const actions = [
  {
    title: "Treat your earning power as an asset.",
    description:
      "For most young professionals it is worth more than everything else they own combined. Protect it with income or disability cover, and invest in it: judgement, relationships, client trust and deep domain knowledge are hard to automate.",
  },
  {
    title: "Know what “global” means in your funds.",
    description:
      "Ask what share of your offshore exposure sits in the US and in a handful of technology companies. You may be comfortable with the answer. It should be a decision, not a default.",
  },
  {
    title: "Build a career buffer, not just an emergency fund.",
    description:
      "If your industry is exposed to AI, a longer cash runway buys you time to retrain instead of taking the first offer.",
  },
] as const;

const sources = [
  {
    label:
      "Index concentration (MSCI World US weight, S&P 500 top 10) — Daily Maverick, 26 Aug 2026",
    href: "https://www.dailymaverick.co.za/article/2026-08-26-just-how-top-heavy-are-global-equity-indices-today/",
  },
  {
    label:
      "PwC 2026 Global AI Jobs Barometer and the May 2026 hiring-manager survey — Lead with AI",
    href: "https://www.leadwithai.co/guides/ai-and-entry-level-jobs",
  },
  {
    label: "UK graduate listings (Adzuna data) — techUK",
    href: "https://www.techuk.org/events/entry-level-and-graduate-jobs-in-the-era-of-ai",
  },
  {
    label: "New York Fed findings on entry-level hiring — IntuitionLabs review, Sept 2026",
    href: "https://intuitionlabs.ai/pdfs/ai-entry-level-employment-hiring-data.pdf",
  },
] as const;

export const metadata: Metadata = {
  title: `${title} | Gert Fourie`,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: `${title} | Gert Fourie`,
    description,
    publishedTime: "2026-10-27",
    authors: ["Gert Fourie"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Gert Fourie`,
    description,
  },
};

export default function BettingTwiceOnAiPage() {
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
            Portfolio Construction
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            You&apos;re Betting Twice on AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Your career and your retirement fund were supposed to balance each other out. In 2026,
            they&apos;re quietly riding on the same trade.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.14em] text-white/55">
            Gert Fourie <span aria-hidden="true">&middot;</span>{" "}
            <time dateTime="2026-10-27">27 October 2026</time>{" "}
            <span aria-hidden="true">&middot;</span> 4 min read
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              The bet you didn&apos;t know you made
            </h2>
            <p className="text-lg leading-8 text-white/75">
              If you have a retirement annuity, a pension fund or an offshore investment, a large
              part of it probably sits in global equities. South African retirement funds can hold
              up to 45% offshore, and most balanced funds use a meaningful share of that allowance.
            </p>
            <p className="text-lg leading-8 text-white/75">
              &ldquo;Global&rdquo; sounds diversified. It isn&apos;t anymore.
            </p>
            <p className="text-lg leading-8 text-white/75">
              By August 2026, the United States made up about 70% of the MSCI World index. Inside
              the US, the ten largest companies account for nearly 40% of the S&amp;P 500, and nine
              of those ten are driven by the AI theme.
            </p>
            <p className="text-lg leading-8 text-white/75">
              So a large share of your &ldquo;global&rdquo; money is really one bet: that artificial
              intelligence delivers.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              The bet you&apos;re making with your career
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Now look at your other asset. At 25 or 30, your biggest asset isn&apos;t your
              retirement fund. It&apos;s the next 35 years of your income.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The first rungs of white-collar careers are under pressure. PwC&apos;s 2026 Global AI
              Jobs Barometer describes entry-level roles being &ldquo;seniorized&rdquo;: junior job
              ads now ask for skills that used to belong to senior roles. In a May 2026 survey of
              1,000 US hiring managers, 48% said they would rather invest in AI tools than hire and
              train a graduate. In the UK, graduate job listings fell 45% year-on-year in January.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The tasks that used to train beginners are the tasks AI does best.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Two scenarios, one exposure</h2>
            <p className="text-lg leading-8 text-white/75">
              If AI succeeds, the companies in your index win. The tasks your job is built on become
              cheaper to automate. Your portfolio gains while your earning power comes under
              pressure.
            </p>
            <p className="text-lg leading-8 text-white/75">
              If AI disappoints, the most concentrated part of the market falls hardest. When a
              trade that large unwinds, companies cut costs, which usually means hiring freezes and
              layoffs. Your portfolio and your career are hit at the same time.
            </p>
            <div className="surface p-6 sm:p-8">
              <p className="text-xl font-semibold leading-8 text-white">
                Either way, both sides of your personal balance sheet are exposed to one technology.
                That is the opposite of diversification.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">The honest counterpoint</h2>
            <p className="text-lg leading-8 text-white/75">
              This is not a prediction that AI is a bubble, or that it will take your job. Serious
              researchers disagree. Researchers at the New York Fed found it difficult to blame the
              entry-level slowdown on AI alone, and many employers say they are still hiring
              juniors. Concentration isn&apos;t automatically bad either. The largest US companies
              earned their size.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The point isn&apos;t to bet against AI. It&apos;s to know you are already betting on
              it, twice.
            </p>
          </section>

          <EarningPowerCalculator />

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">What to do about it</h2>
            <div className="space-y-4">
              <div className="surface p-6">
                <h3 className="text-xl font-semibold text-white">{actions[0].title}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{actions[0].description}</p>
              </div>
              <div className="surface p-6">
                <h3 className="text-xl font-semibold text-white">{actions[1].title}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{actions[1].description}</p>
              </div>
              <div className="surface p-6">
                <h3 className="text-xl font-semibold text-white">
                  Diversify across risks, not just products.
                </h3>
                <p className="mt-3 text-base leading-7 text-white/70">
                  Five funds that hold the same ten companies are one investment with five sets of
                  fees.{" "}
                  <Link
                    href="/insights/why-diversification-isnt-just-about-asset-classes"
                    className="text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4 transition-colors hover:text-white"
                  >
                    Why diversification isn&apos;t just about asset classes
                  </Link>
                  .
                </p>
              </div>
              <div className="surface p-6">
                <h3 className="text-xl font-semibold text-white">{actions[2].title}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{actions[2].description}</p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl text-[var(--gold)]">The bottom line</h2>
            <p className="text-lg leading-8 text-white/75">
              The old rule was simple: don&apos;t work for a company and put all your savings in its
              shares. In 2026, many professionals are doing a version of exactly that, without
              realising it. Not with one company, but with one idea.
            </p>
            <p className="text-lg leading-8 text-white/75">
              Discipline over emotion. Structure over speculation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">Sources</h2>
            <ul className="space-y-3 text-sm leading-6 text-white/70">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-[var(--gold)]"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">One balance sheet</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              If you&apos;ve never looked at your career and your investments as one balance sheet,
              it&apos;s worth a structured conversation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
            >
              Book a conversation
            </Link>
            <p className="mt-6 text-sm text-white/60">
              <a
                href="https://www.fortitudostudios.com"
                className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-[var(--gold)]"
              >
                www.fortitudostudios.com
              </a>
            </p>
          </section>

          <section className="border-t border-white/10 pt-8">
            <p className="text-xs leading-6 text-white/55">
              Gert Fourie is a financial adviser with Liberty Group Limited, an authorised financial
              services provider (FSP 2409). This article is general information and does not
              constitute financial advice or a recommendation to buy or sell any investment. Figures
              are correct as at 27 October 2026 and may change. Speak to a qualified adviser about
              your own circumstances.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
