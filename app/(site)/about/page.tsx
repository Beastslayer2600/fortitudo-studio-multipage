import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, BookOpen, Users } from "lucide-react";

// [REPLACE: SEO metadata]
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ryno Greyling — a Liberty-authorised financial advisor dedicated to structured, long-term wealth management for professionals and families.",
};

// [REPLACE: Credentials list]
const credentials = [
  "Authorised Representative — Liberty Group Limited (FSP 2409)",
  "Certified Financial Planner (CFP®) — [REPLACE if applicable]",
  "Member — Financial Planning Institute of Southern Africa",
  "Specialisation in Retirement & Estate Planning",
  "[REPLACE: Add further qualifications here]",
];

// [REPLACE: Values/philosophy points]
const values = [
  {
    Icon: BookOpen,
    title: "Clarity over complexity",
    body: "Financial planning should be simple enough to act on. I cut through jargon and translate complexity into decisions you can own.",
  },
  {
    Icon: Users,
    title: "Relationships first",
    body: "Every plan is built around a real understanding of your life — your goals, your family, your fears. Not a generic product menu.",
  },
  {
    Icon: Award,
    title: "Stewardship over speculation",
    body: "I believe wealth is preserved and grown through discipline, not tips. My approach is grounded in evidence, not market noise.",
  },
];

export default function AboutPage() {
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
          <p className="section-label mb-4">About</p>
          <h1 className="font-heading text-4xl font-bold text-[#EAE4D6] md:text-6xl">
            {/* [REPLACE: Advisor name] */}
            Ryno Greyling
          </h1>
          <p className="mt-3 text-lg text-[#C9A84C]">
            {/* [REPLACE: Title / designation] */}
            Financial Advisor · Liberty Group · FSP 2409
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 px-6">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-[280px_1fr]">

            {/* Sidebar — photo + quick facts */}
            <aside className="space-y-8">
              {/* Photo placeholder */}
              <div
                className="flex h-64 w-full items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[rgba(11,15,30,0.7)] text-center"
                aria-label="Advisor photo"
              >
                <div className="space-y-2">
                  <div className="mx-auto h-20 w-20 rounded-full bg-[rgba(201,168,76,0.12)] flex items-center justify-center">
                    <span className="text-3xl text-[rgba(201,168,76,0.5)]">R</span>
                  </div>
                  <p className="text-xs text-[rgba(234,228,214,0.35)] tracking-widest uppercase">
                    {/* [REPLACE: swap img tag here] */}
                    Photo
                  </p>
                </div>
              </div>

              {/* Contact quick-links */}
              <div className="surface space-y-3 p-5 text-sm">
                <p className="section-label mb-3">Contact</p>
                {/* [REPLACE: Phone] */}
                <p>
                  <a href="tel:+27000000000" className="text-[rgba(234,228,214,0.65)] hover:text-[#C9A84C] transition-colors">
                    +27 00 000 0000
                  </a>
                </p>
                {/* [REPLACE: Email] */}
                <p>
                  <a href="mailto:advisor@example.com" className="text-[rgba(234,228,214,0.65)] hover:text-[#C9A84C] transition-colors">
                    advisor@example.com
                  </a>
                </p>
                <Link href="/contact" className="btn btn-ghost mt-2 w-full py-2.5 text-xs">
                  Book a Consultation
                </Link>
              </div>
            </aside>

            {/* Bio + credentials + values */}
            <div className="space-y-14">
              {/* Bio */}
              <div>
                <p className="section-label mb-5">Background</p>
                {/* [REPLACE: Full bio] */}
                <div className="space-y-4 text-[rgba(234,228,214,0.78)] leading-relaxed">
                  <p>
                    I am a Liberty-authorised financial advisor based in [REPLACE: location], dedicated to helping
                    professionals, business owners, and families build wealth with intention — not by chance.
                  </p>
                  <p>
                    My practice is grounded in one conviction: financial security is never a product you buy — it is
                    a structure you build. With [REPLACE: X] years of experience advising clients across South Africa,
                    I design bespoke financial plans that align income, assets, risk, and legacy into a system that
                    works quietly and consistently over time.
                  </p>
                  <p>
                    I do not chase trends or predict markets. My role is to remove uncertainty from the major financial
                    decisions you face — retirement, protection, estate planning, and investment — and to ensure every
                    choice is supported by discipline and evidence.
                  </p>
                  <p className="font-medium text-[#EAE4D6]">
                    [REPLACE: Add a personal closing line — something that reflects your tone and character.]
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div>
                <p className="section-label mb-5">Credentials & Qualifications</p>
                <ul className="space-y-3">
                  {credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3 text-[rgba(234,228,214,0.75)] text-sm">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#C9A84C]"
                        strokeWidth={1.8}
                      />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Values / philosophy */}
              <div>
                <p className="section-label mb-5">My Philosophy</p>
                <div className="grid gap-5 sm:grid-cols-3">
                  {values.map(({ Icon, title, body }) => (
                    <div
                      key={title}
                      className="surface p-5 transition-colors hover:border-[rgba(201,168,76,0.4)]"
                    >
                      <Icon size={20} className="mb-3 text-[#C9A84C]" strokeWidth={1.6} />
                      <h3 className="font-heading mb-2 text-base font-semibold text-[#EAE4D6]">{title}</h3>
                      <p className="text-sm leading-relaxed text-[rgba(234,228,214,0.6)]">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy quote */}
              <blockquote className="border-l-2 border-[#C9A84C] pl-5">
                <p className="font-heading text-xl italic text-[#C9A84C]">
                  {/* [REPLACE: Signature quote] */}
                  &ldquo;I don&apos;t predict markets. I build structures that endure them.&rdquo;
                </p>
                {/* [REPLACE: Attribution] */}
                <footer className="mt-2 text-sm text-[rgba(234,228,214,0.5)]">— Ryno Greyling</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
