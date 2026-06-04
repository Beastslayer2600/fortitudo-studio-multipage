import type { Metadata } from "next";
import Link from "next/link";
import QuickMenu from "./components/QuickMenu";
import AnimatedLines from "./components/AnimatedLines";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gert Fourie | Financial Advisor | Liberty Group FSP 2409 | Pretoria",
  description:
    "Calm, structured financial planning that replaces worry with clarity - Pretoria & Gauteng",
  icons: {
    icon: "/liberty-logo.svg",
    apple: "/liberty-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <GoogleAnalytics />
        <Analytics />
        <Script id="apollo-tracker" strategy="afterInteractive">{`
          var n=Math.random().toString(36).substring(7),o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
          o.async=true;o.defer=true;
          o.onload=function(){window.trackingFunctions.onLoad({appId:"6a05972c81c989000d5601a4"})};
          document.head.appendChild(o);
        `}</Script>
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <AnimatedLines />
          <div className="absolute inset-0 bg-black/0" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-[var(--gold)]/30 bg-[#0a110d]/85 backdrop-blur-md">
            <div className="container flex items-center justify-between py-4">
              <Link
                href="/"
                className="font-serif text-xl tracking-[0.12em] text-[var(--cream)] transition-colors hover:text-[var(--gold)]"
              >
                GERT FOURIE
              </Link>
              <QuickMenu />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-auto border-t border-[var(--gold)]/25 bg-[#060a08]/90 py-10 text-center text-sm text-[var(--cream)] backdrop-blur-[2px]">
            <div className="container mx-auto max-w-5xl px-6">
              <div className="mb-6 flex justify-center">
                <div className="rounded-xl bg-white/95 px-6 py-4">
                  <Image
                    src="/liberty-logo.svg"
                    alt="Liberty — Standard Bank Group"
                    width={100}
                    height={110}
                    className="h-auto w-[100px]"
                    unoptimized
                  />
                </div>
              </div>
              <p className="mb-3 font-medium text-white/90">
                &copy; {new Date().getFullYear()} Gert Fourie | Financial Advisor &ndash; Liberty Group Limited (FSP 2409) | Pretoria
              </p>
              <p className="mx-auto max-w-4xl leading-relaxed text-white/65">
                Liberty Group Limited is an Authorised Financial Services Provider (FSP 2409) in terms of the Financial Advisory
                and Intermediary Services Act 37 of 2002. Gert Fourie is a representative of Liberty Group Limited. All content on
                fortitudostudios.site is general information only and does not constitute financial advice, a recommendation or
                solicitation. Personalised advice is provided only after a full needs analysis. Past performance is not indicative
                of future results. Investments carry risk, including possible loss of capital.
              </p>
              <div className="mt-6 space-x-4 text-xs text-white/75">
                <a href="/disclaimer" className="transition-colors hover:text-[var(--gold)] hover:underline">Disclaimer</a>
                <span aria-hidden="true">&bull;</span>
                <a href="/privacy" className="transition-colors hover:text-[var(--gold)] hover:underline">Privacy Policy (POPIA)</a>
                <span aria-hidden="true">&bull;</span>
                <a href="/contact" className="transition-colors hover:text-[var(--gold)] hover:underline">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
