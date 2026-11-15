import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import QuickMenu from "./components/QuickMenu";
import AnimatedLines from "./components/AnimatedLines";
import PrincipleFooter from "./components/PrincipleFooter";
import { SERVICES } from "@/content/services";
import {
  AUTHOR_BIO,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  EMAIL,
  PHONE_CELL,
  PHONE_OFFICE,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
  TITLE_SUFFIX,
} from "@/lib/site";
import "./globals.css";

const person = `${SITE_URL}/#gert-fourie`;
const liberty = {
  "@type": "Organization",
  name: "Liberty Group Limited",
  identifier: "FSP 2409",
  url: "https://www.liberty.co.za",
};

// Only facts that appear on the site. Gert is a representative of Liberty,
// not a subsidiary of it, so Liberty is his employer/affiliation, never a
// parentOrganization.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": person,
      name: "Gert Fourie",
      jobTitle: "Financial Adviser",
      description: AUTHOR_BIO,
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/gert-portrait.jpg`,
      email: EMAIL,
      telephone: PHONE_CELL,
      worksFor: liberty,
      affiliation: liberty,
      knowsLanguage: ["en", "af"],
      sameAs: SAME_AS,
    },
    {
      "@type": "FinancialService",
      "@id": `${SITE_URL}/#practice`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
      telephone: [PHONE_CELL, PHONE_OFFICE],
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pretoria",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      areaServed: [
        { "@type": "City", name: "Pretoria" },
        { "@type": "AdministrativeArea", name: "Gauteng" },
      ],
      member: { "@id": person },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        url: `${SITE_URL}/services`,
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${SITE_URL}/services#${service.id}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-ZA",
      publisher: { "@id": person },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s${TITLE_SUFFIX}`,
  },
  description: DEFAULT_DESCRIPTION,
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
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a231a",
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
    <html lang="en-ZA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
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
                    className="inline-flex min-h-[44px] items-center text-xs uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-[var(--gold)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="hidden min-h-[44px] items-center rounded-xl border border-[var(--gold)]/50 px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10 md:inline-flex"
                >
                  Book session
                </Link>
                <div className="lg:hidden">
                  <QuickMenu />
                </div>
              </div>
            </div>
          </header>

          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <PrincipleFooter />

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
              <p className="mb-6 font-serif text-lg italic text-[var(--gold)]">
                Fortitudo: strength to build it, patience to keep it.
              </p>
              <p className="mb-3 font-medium text-white/90">
                &copy; {new Date().getFullYear()} Gert Fourie | Financial Adviser &ndash; Liberty Group Limited (FSP
                2409) | Pretoria
              </p>
              <p className="mx-auto max-w-4xl text-[0.95rem] leading-relaxed text-white/70">
                Liberty Group Limited is an Authorised Financial Services Provider (FSP 2409) in terms of the Financial
                Advisory and Intermediary Services Act 37 of 2002. Gert Fourie is a representative of Liberty Group
                Limited. All content on fortitudostudios.com is general information only and does not constitute
                financial advice, a recommendation or solicitation. Personalised advice is provided only after a full
                needs analysis. Past performance is not indicative of future results. Investments carry risk, including
                possible loss of capital.
              </p>
              <div className="mt-6 space-x-4 text-sm text-white/75">
                <Link href="/disclaimer" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[var(--gold)] hover:underline">
                  Disclaimer
                </Link>
                <span aria-hidden="true">&bull;</span>
                <Link href="/privacy" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[var(--gold)] hover:underline">
                  Privacy Policy (POPIA)
                </Link>
                <span aria-hidden="true">&bull;</span>
                <Link href="/contact" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[var(--gold)] hover:underline">
                  Contact
                </Link>
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
