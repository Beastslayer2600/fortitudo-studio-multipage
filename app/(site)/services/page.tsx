import { pageMetadata } from "@/lib/seo";
import { SERVICES as services } from "@/content/services";
import Link from "next/link";

export const metadata = pageMetadata({
  path: "/services",
  title: "Services",
  description:
    "Financial planning, investment strategy, protection, retirement, estate and business structuring with Gert Fourie, representative of Liberty Group (FSP 2409).",
});

export default function Services() {
  return (
    <div className="relative z-10 min-h-screen pb-16 pt-24 text-[var(--cream)] sm:pb-24 sm:pt-28">
      <div className="container max-w-5xl">
        <h1 className="font-serif text-4xl text-[var(--cream)] md:text-5xl">How I help</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Practical planning under Liberty Group Limited (FSP 2409). Each service exists to reduce uncertainty, not add products.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} id={service.id} className="scroll-mt-28 flex flex-col rounded-2xl border border-[var(--gold)]/20 bg-black/20 p-6">
              <h2 className="font-serif text-2xl text-[var(--gold)]">{service.title}</h2>
              <p className="mt-3 text-sm italic text-white/55">{service.problem}</p>
              <p className="mt-4 text-base leading-relaxed text-white/80">{service.description}</p>
              <p className="mt-3 text-base leading-relaxed text-[var(--gold)]">{service.keeping}</p>
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
    </div>
  );
}
