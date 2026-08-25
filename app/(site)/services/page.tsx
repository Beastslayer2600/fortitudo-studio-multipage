import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retirement planning, investment discipline, protection, estate planning, tax-efficient structuring, and risk management under Liberty Group Limited (FSP 2409).",
};

const services = [
  {
    title: "Financial Planning",
    problem: "Earning well without a written framework leaves quiet doubt.",
    description:
      "Retirement planning, cash-flow structure, and tax-aware decisions organised into one plan you can follow.",
    benefits: ["A clear picture of where you stand", "Priorities instead of scattered products", "Decisions that survive market noise"],
  },
  {
    title: "Investment Strategy",
    problem: "Most people invest. Fewer people know why the pieces belong together.",
    description:
      "Portfolio construction and risk management designed around time horizon and behaviour, not headlines.",
    benefits: ["A defined risk range", "Less reactive switching", "Growth inside a protective framework"],
  },
  {
    title: "Insurance and Protection",
    problem: "Unprotected income is the fastest way a good plan collapses.",
    description:
      "Life, disability, and health cover reviewed against actual needs rather than leftover policies.",
    benefits: ["Family protection that matches reality", "Fewer gaps between policies", "Peace of mind before growth conversations"],
  },
  {
    title: "Retirement Clarity",
    problem: "Will I have enough? is the question that keeps high earners awake.",
    description:
      "Turn retirement from a vague hope into an income plan with milestones and contribution structure.",
    benefits: ["Visible progress markers", "Contribution discipline", "A plan that can be reviewed, not guessed"],
  },
  {
    title: "Estate and Legacy",
    problem: "Without structure, families inherit confusion as well as assets.",
    description:
      "Estate planning that keeps beneficiaries, cover, and ownership aligned.",
    benefits: ["Less ambiguity for the people you love", "Ownership that matches intent", "Decisions recorded while they are calm"],
  },
  {
    title: "Business and Wealth Structuring",
    problem: "Business owners often keep personal and business wealth tangled.",
    description:
      "Practical structuring so the business, family, and long-term wealth do not compete with each other.",
    benefits: ["Cleaner separation of risks", "Tax-aware organisation", "A system that can scale without chaos"],
  },
];

export default function Services() {
  return (
    <main className="relative z-10 min-h-screen pb-16 pt-24 text-[var(--cream)] sm:pb-24 sm:pt-28">
      <div className="container max-w-5xl">
        <h1 className="font-serif text-4xl text-[var(--cream)] md:text-5xl">How I help</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Practical planning under Liberty Group Limited (FSP 2409). Each service exists to reduce uncertainty, not add products.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col rounded-2xl border border-[var(--gold)]/20 bg-black/20 p-6">
              <h2 className="font-serif text-2xl text-[var(--gold)]">{service.title}</h2>
              <p className="mt-3 text-sm italic text-white/55">{service.problem}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="text-[var(--gold)]" aria-hidden="true">
                      /
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm tracking-[0.08em] text-[var(--gold)] transition-colors hover:text-white"
              >
                Schedule a consultation
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/60">
          All services are provided under Liberty Group Limited (FSP 2409) after a full needs analysis. Content on this site is general information only and is not personal advice.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[var(--gold)] px-10 py-4 font-medium text-[#0a231a] transition-all hover:bg-white"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </div>
    </main>
  );
}
