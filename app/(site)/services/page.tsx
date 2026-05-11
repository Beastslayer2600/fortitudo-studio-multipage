import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

// [REPLACE: SEO metadata]
export const metadata: Metadata = {
  title: "Services",
  description:
    "Life & risk insurance, investments, retirement planning, and estate planning — comprehensive financial guidance by Ryno Greyling.",
};

const services = [
  {
    iconName: "Shield",
    title: "Life & Risk Insurance",
    description:
      "Protect what matters most. We design risk cover that replaces your income if illness, disability, or death intervenes — giving your family financial certainty when they need it most.",
    detail: [
      "Life cover structured to your income and liabilities",
      "Disability and income protection planning",
      "Dread disease / critical illness cover",
      "Business assurance and key-person cover",
    ],
  },
  {
    iconName: "TrendingUp",
    title: "Investments",
    description:
      "Evidence-based, disciplined portfolio construction tailored to your goals, time horizon, and risk profile — designed for long-term wealth accumulation.",
    detail: [
      "Unit trusts and multi-asset funds",
      "Tax-Free Savings Accounts (TFSA)",
      "Endowment policies for tax-efficient growth",
      "Regular savings and lump-sum investment structuring",
    ],
  },
  {
    iconName: "Clock",
    title: "Retirement Planning",
    description:
      "A clear roadmap to financial independence — turning today's earnings into tomorrow's income stream with structured milestones and tax-efficient vehicles.",
    detail: [
      "Retirement annuity (RA) contributions and structuring",
      "Pension and provident fund consolidation",
      "Projected retirement income analysis",
      "Drawdown and living annuity strategy",
    ],
  },
  {
    iconName: "Building2",
    title: "Estate Planning",
    description:
      "Ensure your legacy is transferred with precision — minimising estate duty, honouring your wishes, and sparing your family from unnecessary complexity.",
    detail: [
      "Will drafting and estate structuring (in conjunction with attorneys)",
      "Estate duty and executor fee planning",
      "Trust planning and beneficiary nomination",
      "Liquidity planning to cover estate costs",
    ],
  },
];

export default function ServicesPage() {
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
          <p className="section-label mb-4">Services</p>
          <h1 className="font-heading text-4xl font-bold text-[#EAE4D6] md:text-5xl">
            Comprehensive financial guidance
          </h1>
          <p className="mt-4 max-w-2xl text-[rgba(234,228,214,0.65)]">
            Every service is delivered under Liberty Group Limited (FSP 2409) after a thorough needs analysis — no
            generic products, no shortcuts.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <section className="py-20 px-6">
        <div className="site-container">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <div key={service.title} className="flex flex-col gap-0">
                <ServiceCard
                  iconName={service.iconName}
                  title={service.title}
                  description={service.description}
                  delay={i * 0.08}
                />
                {/* Detail list */}
                <ul className="mt-3 space-y-1.5 px-1">
                  {service.detail.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[rgba(234,228,214,0.55)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A84C] opacity-70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-16 px-6">
        <div className="site-container">
          <div className="gold-rule mb-10" />
          <div className="grid gap-10 md:grid-cols-[1fr_auto] items-center">
            <p className="text-sm leading-relaxed text-[rgba(234,228,214,0.4)]">
              All financial services are provided under Liberty Group Limited (FSP 2409) and are subject to a full
              needs analysis. This page is general information only and does not constitute financial advice.
              Personalised recommendations are made only after a comprehensive review of your circumstances.
            </p>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
