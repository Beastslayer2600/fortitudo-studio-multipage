import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES, PRINCIPLES, START_HERE } from "@/lib/principles";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Free, South Africa-focused guides for every stage of a financial plan: starting it, holding it, and letting it work.",
};

export default function Guides() {
  const startHere = START_HERE.map((href) => GUIDES.find((g) => g.href === href)!).filter(Boolean);

  return (
    <main className="relative z-10 min-h-screen bg-[#0b0d10]/92 pb-16 pt-24 text-[var(--cream)] sm:pb-24 sm:pt-28">
      <div className="container max-w-5xl">
        <h1 className="font-serif text-4xl text-[var(--cream)] md:text-5xl">Guides</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75">
          Guides for every stage of a plan: starting it, holding it, and letting it work.
        </p>

        {/* Start here */}
        <section className="mt-12 rounded-2xl border border-[var(--gold)]/30 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">Start here</p>
          <h2 className="mt-2 font-serif text-2xl text-white sm:text-3xl">Early in your career?</h2>
          <p className="mt-2 text-white/70">Five guides, in the order I&apos;d read them.</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {startHere.map((g, i) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="flex h-full flex-col rounded-xl border border-white/10 p-4 transition-colors hover:border-[var(--gold)]/60"
                >
                  <span className="font-serif text-2xl text-[var(--gold)]">{i + 1}</span>
                  <span className="mt-2 text-sm leading-snug text-white/85">{g.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Rows by principle */}
        {PRINCIPLES.map((p) => {
          const items = GUIDES.filter((g) => g.principle === p.name);
          return (
            <section key={p.id} id={p.id} className="mt-16 scroll-mt-28">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{p.name}</p>
              <h2 className="mt-2 font-serif text-2xl text-white sm:text-3xl">{p.line}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {items.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="group rounded-2xl border border-[var(--gold)]/20 bg-black/20 p-6 transition-colors hover:border-[var(--gold)]/55"
                  >
                    <h3 className="font-serif text-xl text-[var(--cream)] group-hover:text-[var(--gold)]">{g.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-white/75">{g.blurb}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Series */}
        <section className="mt-16 rounded-2xl border border-white/10 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">The full series</p>
          <h2 className="mt-2 font-serif text-2xl text-white">Rules &amp; Foundations of a Wealthy Mindset</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Ten principles, from classic wealth literature to modern behavioural finance, for readers who want them in order.
          </p>
          <Link
            href="/guides/rules-of-a-wealthy-mindset"
            className="mt-5 inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm uppercase tracking-[0.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
          >
            Read the series
          </Link>
        </section>

        <p className="mt-10 text-sm text-white/70">
          Want to know when new guides go up? Send a message via the{" "}
          <Link href="/contact" className="text-[var(--gold)] underline underline-offset-2">
            contact page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
