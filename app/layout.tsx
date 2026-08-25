import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import QuickMenu from "./components/QuickMenu";
import AnimatedLines from "./components/AnimatedLines";
import "./globals.css";

const siteUrl = "https://www.fortitudostudios.site";
const siteTitle = "Gert Fourie | Financial Advisor | Liberty Group FSP 2409 | Pretoria";
const siteDescription =
  "Structured financial planning for professionals who want clarity, not complexity — Pretoria & Gauteng";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#organization`,
      name: "Gert Fourie | Financial Advisor",
      alternateName: "Fortitudo Studios",
      url: siteUrl,
      description: siteDescription,
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/icon-512.png`,
      telephone: ["+27773866299", "+27124337241"],
      email: "gert.fourie@liblink.co.za",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pretoria",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      areaServed: [
        { "@type": "City", name: "Pretoria" },
        { "@type": "AdministrativeArea", name: "Gauteng" },
        { "@type": "Country", name: "South Africa" },
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Liberty Group Limited",
        identifier: "FSP 2409",
        url: "https://www.liberty.co.za",
      },
      sameAs: [
        "https://www.instagram.com/gert_wealth",
        "https://www.linkedin.com/in/gert-fourie-wealth",
      ],
      knowsLanguage: ["en", "af"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Financial Planning Services",
        itemListElement: [
          "Retirement Clarity",
          "Investment Discipline",
          "Protection That Lasts",
          "Legacy & Estate Planning",
          "Tax-Efficient Structure",
          "Risk Management",
        ].map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#gert-fourie`,
      name: "Gert Fourie",
      jobTitle: "Financial Adviser",
      url: `${siteUrl}/about`,
      email: "gert.fourie@liblink.co.za",
      telephone: "+27773866299",
      worksFor: { "@id": `${siteUrl}/#organization` },
      affiliation: {
        "@type": "Organization",
        name: "Liberty Group Limited",
        identifier: "FSP 2409",
      },
      sameAs: [
        "https://www.instagram.com/gert_wealth",
        "https://www.linkedin.com/in/gert-fourie-wealth",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en-ZA",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Gert Fourie | Pretoria",
  },
  description: siteDescription,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Gert Fourie | Financial Advisor",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gert Fourie | Financial Advisor | Liberty Group FSP 2409 | Pretoria",
      },
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

const desktopNav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a231a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <AnimatedLines />
          <div className="absolute inset-0 bg-black/0" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-[var(--gold)]/25 bg-[#0a110d]/88 backdrop-blur-md">
            <div className="container flex items-center justify-between gap-4 py-3.5 md:py-4">
              <Link
                href="/"
                className="font-serif text-lg tracking-[0.14em] text-[var(--cream)] transition-colors hover:text-[var(--gold)] md:text-xl"
              >
                GERT FOURIE
              </Link>

              <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
                {desktopNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[var(--gold)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="hidden rounded-xl border border-[var(--gold)]/50 px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10 md:inline-flex"
                >
                  Book session
                </Link>
                <div className="lg:hidden">
                  <QuickMenu />
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-auto border-t border-[var(--gold)]/25 bg-[#060a08]/90 py-10 text-center text-sm text-[var(--cream)] backdrop-blur-[2px]">
            <div className="container mx-auto max-w-5xl px-6">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/liberty-standard-bank-group.png"
                  alt="Liberty Standard Bank Group logo"
                  width={160}
                  height={160}
                  className="h-auto w-28 md:w-32"
                />
              </div>
              <p className="mb-3 font-medium text-white/90">
                &copy; {new Date().getFullYear()} Gert Fourie | Financial Advisor &ndash; Liberty Group Limited (FSP
                2409) | Pretoria
              </p>
              <p className="mx-auto max-w-4xl leading-relaxed text-white/65">
                Liberty Group Limited is an Authorised Financial Services Provider (FSP 2409) in terms of the Financial
                Advisory and Intermediary Services Act 37 of 2002. Gert Fourie is a representative of Liberty Group
                Limited. All content on fortitudostudios.site is general information only and does not constitute
                financial advice, a recommendation or solicitation. Personalised advice is provided only after a full
                needs analysis. Past performance is not indicative of future results. Investments carry risk, including
                possible loss of capital.
              </p>
              <div className="mt-6 space-x-4 text-xs text-white/75">
                <a href="/disclaimer" className="transition-colors hover:text-[var(--gold)] hover:underline">
                  Disclaimer
                </a>
                <span aria-hidden="true">&bull;</span>
                <a href="/privacy" className="transition-colors hover:text-[var(--gold)] hover:underline">
                  Privacy Policy (POPIA)
                </a>
                <span aria-hidden="true">&bull;</span>
                <a href="/contact" className="transition-colors hover:text-[var(--gold)] hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
