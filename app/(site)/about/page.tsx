import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gert Fourie · A plan you'll actually keep",
  description:
    "Gert Fourie is a financial adviser with Liberty Group in Pretoria, helping young professionals, business owners and families build a plan they'll actually keep.",
};

const principles = [
  {
    tag: "Courage",
    title: "Courage to start",
    body: "The hardest step is the first one. Every year you wait is a year your money can't get back. Starting small beats starting perfect.",
    link: { href: "/#cost-of-waiting", label: "See the cost of waiting" },
  },
  {
    tag: "Firmness",
    title: "Firmness to hold",
    body: "Markets will fall, and staying the course will feel wrong at exactly the moment it matters. One written plan, and someone to call, stops a bad month from undoing a good plan.",
    link: { href: "/guides/plan-on-paper", label: "Why a written plan holds" },
  },
  {
    tag: "Patience",
    title: "Patience to let it work",
    body: "Compounding is slow, and then it isn't. It only rewards the people who are still there. My job is to help you still be there.",
    link: { href: "/#plan-calculator", label: "See your plan over decades" },
  },
];

const steps = [
  { number: "01", title: "Strategy session", body: "Where you are, where you want to be, and what's in the way. No products, no pitch." },
  { number: "02", title: "Financial analysis", body: "Income, assets, debt, cover and tax in one honest picture." },
  { number: "03", title: "A written plan", body: "Simple enough to explain in a sentence, built to endure." },
  { number: "04", title: "Ongoing review", body: "This is where plans are kept. Life changes and markets move; the review keeps the plan yours." },
];

const audience = [
  "Young professionals who want the foundations right early",
  "Business owners who want their personal and business wealth to stop competing",
  "Families who want a clear picture of protection and retirement",
  "Anyone who has been sold products but never had a plan",
];

export default function About() {
  return (
    <div className="relative z-10 text-[var(--cream)]">
      {/* Opening */}
      <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">About Gert Fourie</p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-[1.12] tracking-tight md:text-6xl">
            A plan is only as good as your ability to keep it.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/80 md:text-xl">
            Most financial plans don&apos;t fail on paper. They fail when life gets loud and people stop. My work is
            helping you build a plan you&apos;ll actually keep.
          </p>
        </div>
      </section>

      <div className="relative bg-[#0b0d10]/92">
        {/* Why Fortitudo */}
        <section className="border-t border-[var(--gold)]/15 px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Why Fortitudo</p>
            <p className="font-serif text-2xl leading-snug text-[var(--cream)] md:text-3xl">
              <span className="italic text-[var(--gold)]">Fortitudo</span> is Latin for strength and courage.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              It&apos;s the name on this site because it names the part of financial planning most people underestimate.
              Choosing the right investment matters. Staying with a good plan for twenty years matters more.
            </p>
          </div>
        </section>

        {/* Gert */}
        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl text-[var(--cream)] md:text-5xl">Gert Fourie</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[var(--gold)]">
              Representative of Liberty Group Limited · FSP 2409 · Pretoria
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/85">
              <p>
                I&apos;m a financial adviser with Liberty Group, based in Pretoria. I work mostly with young professionals
                laying their foundations, and with business owners and families who want one plan instead of a drawer of
                policies.
              </p>
              <p>
                I&apos;m not here to predict markets or sell the product of the month. I&apos;m here to help you write a
                plan down, understand it, and keep it when it&apos;s tested.
              </p>
            </div>
          </div>
        </section>

        {/* Three things */}
        <section className="border-t border-[var(--gold)]/10 px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-3xl text-[var(--gold)] md:text-5xl">
              Three things a plan asks of you
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {principles.map((p) => (
                <div key={p.tag} className="flex flex-col rounded-2xl border border-[var(--gold)]/20 bg-black/20 p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{p.tag}</p>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--cream)]">{p.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-white/80">{p.body}</p>
                  <Link href={p.link.href} className="mt-6 text-sm tracking-[0.06em] text-[var(--gold)] hover:text-white">
                    {p.link.label} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-3xl text-[var(--gold)] md:text-5xl">How we work together</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.number} className="rounded-2xl border border-[var(--gold)]/20 p-6">
                  <p className="mb-3 font-serif text-3xl text-[var(--gold)]">{s.number}</p>
                  <h3 className="mb-2 font-serif text-xl">{s.title}</h3>
                  <p className="text-base leading-relaxed text-white/75">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who */}
        <section className="border-t border-[var(--gold)]/10 px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-3xl">
            <h2 className="mb-8 font-serif text-3xl text-[var(--gold)] md:text-4xl">Who I work best with</h2>
            <ul className="space-y-4 text-lg text-white/85">
              {audience.map((a) => (
                <li key={a} className="border-l border-[var(--gold)]/40 pl-4">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Close */}
        <section className="px-6 py-24 text-center md:py-32">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl text-[var(--gold)] md:text-6xl">Built to endure.</h2>
            <p className="mt-6 text-lg text-white/80">If you want a plan that holds when life gets loud, let&apos;s talk.</p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-xl bg-[var(--gold)] px-12 py-5 text-lg font-medium text-[#0a231a] shadow-lg transition-all duration-300 hover:bg-white"
            >
              Schedule a Strategy Session
            </Link>
            <p className="mt-8 text-sm text-white/60">
              Gert Fourie is a representative of Liberty Group Limited, an authorised financial services provider (FSP 2409).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
