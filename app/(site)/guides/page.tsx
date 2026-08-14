import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides & Videos",
};

const guides = [
  {
    title: "The 7-Question Financial Health Check",
    description:
      "A two-minute, scored self-assessment covering the seven areas that decide whether your financial position holds up under pressure.",
    coverage:
      "Covers your reserve, income continuation, dependants, retirement rate, debt structure, education funding, and estate readiness.",
    href: "/guides/financial-health-check",
  },
  {
    title: "Building Wealth on a Starter Salary",
    description:
      "A practical framework for young professionals who want to start building wealth early through better cash-flow structure, protection, and disciplined investing.",
    coverage:
      "Covers emergency reserves, TFSA use, retirement contributions, cover, and habit design.",
    href: "/guides/building-wealth-on-a-starter-salary",
  },
  {
    title: "Why Saving Feels Painful",
    description:
      "A guide to the psychology and neuroscience behind spending impulses, delayed reward, and why saving feels harder than it should.",
    coverage:
      "Covers dopamine, delay discounting, scarcity mindset, money scripts, and practical behavior design.",
    href: "/guides/why-saving-feels-painful",
  },
  {
    title: "Rules & Foundations of a Wealthy Mindset",
    description:
      "A 10-part series — from classic wealth literature to modern behavioural finance — with each principle broken into its own deep-dive guide.",
    coverage:
      "Covers definite purpose, assets vs. liabilities, automation, loss aversion, compounding, delayed gratification, and financial habit design.",
    href: "/guides/rules-of-a-wealthy-mindset",
  },
] as const;

export default function Guides() {
  return (
    <main className="relative z-10 min-h-screen text-[var(--cream)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container max-w-4xl">
        <h1 className="font-serif text-3xl text-[var(--cream)]">
          Guides & Videos
        </h1>
        <p className="mt-4 text-white/70">
          Practical, South Africa-focused guides on wealth building, protection, retirement
          planning, and disciplined investing.
        </p>

        <div className="mt-8 space-y-6">
          {guides.map((guide) => (
            <article key={guide.href} className="surface p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Guide</p>
              <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">{guide.title}</h2>
              <p className="mt-4 text-white/70">{guide.description}</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white/55">{guide.coverage}</p>
                <Link
                  href={guide.href}
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm tracking-[0.12em] uppercase text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
                >
                  Read guide
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 surface p-6">
          <p className="text-sm text-white/70">
            Want to be notified when new content drops? Send a message via the{" "}
            <Link href="/contact" className="text-[var(--gold)] underline underline-offset-2">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
