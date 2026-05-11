import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides & Videos",
};

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

        <div className="mt-8">
          <article className="surface p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Guide</p>
            <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
              Building Wealth on a Starter Salary
            </h2>
            <p className="mt-4 text-white/70">
              A practical framework for young professionals who want to start building wealth early
              through better cash-flow structure, protection, and disciplined investing.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/55">
                Covers emergency reserves, TFSA use, retirement contributions, cover, and habit
                design.
              </p>
              <Link
                href="/guides/building-wealth-on-a-starter-salary"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] px-5 py-3 text-sm tracking-[0.12em] uppercase text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0D10]"
              >
                Read guide
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-8 surface p-6">
          <p className="text-sm text-white/70">
            Want to be notified when new content drops? Send a message via the contact page.
          </p>
        </div>
      </div>
    </main>
  );
}


