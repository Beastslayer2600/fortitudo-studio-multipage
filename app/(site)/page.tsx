import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

// [REPLACE: SEO metadata]
export const metadata: Metadata = {
  title: "Ryno Greyling | Financial Advisor | Liberty",
  description:
    "Strategic wealth management and financial planning for professionals and families. Authorised representative of Liberty.",
};

const services = [
  {
    iconName: "Shield",
    title: "Life & Risk Insurance",
    description:
      "Comprehensive protection that shields your income, your family, and everything you have built — so that life's uncertainties never derail your future.",
  },
  {
    iconName: "TrendingUp",
    title: "Investments",
    description:
      "Disciplined, evidence-based portfolio construction aligned to your goals and risk profile — growth without the noise of speculation.",
  },
  {
    iconName: "Clock",
    title: "Retirement Planning",
    description:
      "A structured roadmap to financial independence — clear milestones, tax-efficient structures, and an income plan that lasts as long as you do.",
  },
  {
    iconName: "Building2",
    title: "Estate Planning",
    description:
      "Ensure your legacy is protected and distributed according to your wishes, with minimal tax exposure and zero confusion for those you leave behind.",
  },
];

// [REPLACE: Testimonials with real client quotes (with permission)]
const testimonials = [
  {
    quote:
      "Ryno gave me a level of clarity I had never had before. Within one meeting I understood exactly where I stood and what needed to change.",
    name: "Client A",
    role: "Business Owner, Johannesburg",
  },
  {
    quote:
      "The retirement plan he built for us removed years of anxiety in a single conversation. We finally feel in control of our financial future.",
    name: "Client B",
    role: "Professional Couple, Pretoria",
  },
  {
    quote:
      "What sets him apart is the discipline. No hype, no shortcuts — just a structured plan that keeps working month after month.",
    name: "Client C",
    role: "Senior Executive, Cape Town",
  },
];

export default function HomePage() {
  return (
    <div className="text-[#EAE4D6]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <AnimatedBackground />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Label */}
          <p className="section-label mb-6 tracking-[0.28em]">
            {/* [REPLACE: Firm name + FSP number] */}
            LIBERTY GROUP · AUTHORISED FSP 2409
          </p>

          {/* Heading */}
          <h1 className="font-heading mb-6 text-5xl font-bold leading-[1.12] tracking-tight text-[#EAE4D6] md:text-7xl">
            {/* [REPLACE: Hero headline] */}
            Your financial future,
            <br />
            <span className="text-[#C9A84C]">built on clarity.</span>
          </h1>

          {/* Sub-heading */}
          <p className="mb-10 mx-auto max-w-2xl text-lg leading-relaxed text-[rgba(234,228,214,0.7)] md:text-xl">
            {/* [REPLACE: value proposition] */}
            Strategic wealth management for professionals who demand more than a portfolio —
            they demand a plan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn btn-primary px-8 py-3.5 text-base">
              Book a Consultation
            </Link>
            <Link href="/about" className="btn btn-ghost px-8 py-3.5 text-base">
              My Approach
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[rgba(234,228,214,0.4)]">
          <span className="section-label text-[0.6rem] text-[rgba(234,228,214,0.4)]">SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-[rgba(201,168,76,0.6)] to-transparent" />
        </div>
      </section>

      {/* ── Who This Is For ──────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="site-container">
          <div className="mb-14 text-center">
            <p className="section-label mb-3">Who I Work With</p>
            <h2 className="font-heading text-3xl font-semibold text-[#EAE4D6] md:text-4xl">
              Built for those who think long-term
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "High-income professionals", desc: "Seeking structure and clarity in a complex financial world." },
              { label: "Business owners",            desc: "Building sustainable, transferable wealth without speculation." },
              { label: "Growing families",           desc: "Planning multi-decade security and a lasting legacy." },
              { label: "Disciplined thinkers",       desc: "Who value stewardship and long-term strategy over short-term hype." },
            ].map(({ label, desc }, i) => (
              <div
                key={label}
                className="surface p-6 transition-all duration-300 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[0_0_24px_rgba(201,168,76,0.08)]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-2 h-0.5 w-8 bg-[#C9A84C] opacity-60 rounded-full" />
                <h3 className="font-heading mb-2 text-lg font-semibold text-[#EAE4D6]">{label}</h3>
                <p className="text-sm leading-relaxed text-[rgba(234,228,214,0.6)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="site-container">
          <div className="mb-14 text-center">
            <p className="section-label mb-3">What I Offer</p>
            <h2 className="font-heading text-3xl font-semibold text-[#EAE4D6] md:text-4xl">
              Comprehensive financial guidance
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} iconName={service.iconName} title={service.title} description={service.description} delay={i * 0.08} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn btn-ghost">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-6">Philosophy</p>
            <h2 className="font-heading mb-8 text-3xl font-semibold text-[#EAE4D6] md:text-4xl">
              Discipline over emotion.{" "}
              <span className="text-[#C9A84C]">Structure over speculation.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[rgba(234,228,214,0.7)]">
              {/* [REPLACE: Philosophy paragraph] */}
              Markets fluctuate. Noise increases. Trends tempt. Real wealth is built through structured
              planning, disciplined execution, and long-term thinking — not reactionary decisions. My role
              is to remove uncertainty from the major financial choices you face, and to ensure every
              decision is backed by a framework, not an emotion.
            </p>
            <div className="gold-rule mx-auto my-8 max-w-xs" />
            <p className="font-heading text-xl italic text-[#C9A84C]">
              {/* [REPLACE: Signature quote] */}
              &ldquo;Strategy first. Noise second. Always.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="site-container">
          <div className="mb-14 text-center">
            <p className="section-label mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl font-semibold text-[#EAE4D6] md:text-4xl">
              What clients say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="site-container">
          <div
            className="relative overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[rgba(11,15,30,0.7)] px-8 py-16 text-center backdrop-blur-sm"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, transparent 0px, transparent 88px, rgba(201,168,76,1) 88px, rgba(201,168,76,1) 90px)",
                backgroundSize: "180px 180px",
              }}
            />
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="section-label mb-4">Ready to begin?</p>
              <h2 className="font-heading mb-5 text-3xl font-semibold text-[#EAE4D6] md:text-4xl">
                Let&apos;s structure your future
              </h2>
              <p className="mb-8 text-[rgba(234,228,214,0.7)]">
                If you value clarity over complexity, let&apos;s talk.
                Your first consultation is obligation-free.
              </p>
              <Link href="/contact" className="btn btn-primary px-8 py-3.5 text-base">
                Schedule a Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
