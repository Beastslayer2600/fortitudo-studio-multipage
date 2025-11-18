// app/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fortitudostudios.site"),
  title: {
    default: "Fortitudo Studios — Timeless Tools for Strength & Faith",
    template: "%s · Fortitudo Studios",
  },
  description:
    "Old-money aesthetic journals and brand tools. Discipline, stewardship, faith.",
  openGraph: {
    title: "Fortitudo Studios",
    description: "Timeless Tools for Strength & Faith",
    url: "https://fortitudostudios.site",
    siteName: "Fortitudo Studios",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortitudo Studios",
    images: ["/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.png", // drop a 256x256 (or 32x32) favicon.png in /public
  },
};

function Nav() {
  return (
    <header style={{ background: "var(--greenDark)" }} className="text-white">
      <div className="container py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="Fortitudo Studios crest"
            width={56}
            height={56}
            className="rounded-full transition-transform duration-300 hover:scale-105"
            priority
          />
          <span className="font-serif text-2xl tracking-widest" style={{ color: "var(--gold)" }}>
            Fortitudo Studios
          </span>
        </Link>

        {/* Primary Nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 font-serif text-lg"
        >
          <Link href="/journal" className="no-underline text-white hover:text-[var(--gold)] transition-colors">
            Journal
          </Link>
          <Link href="/about" className="no-underline text-white hover:text-[var(--gold)] transition-colors">
            About
          </Link>
          <Link href="/contact" className="no-underline text-white hover:text-[var(--gold)] transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="rule mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Fortitudo Studios crest"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p
              className="text-xs tracking-[0.28em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Fortitudo • Studios
            </p>
          </div>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Fortitudo Studios. All rights reserved.
          </p>
        </div>

        {/* Quick links */}
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Link href="/journal" className="no-underline text-neutral-700 hover:text-[var(--gold)]">
            Journal
          </Link>
          <Link href="/about" className="no-underline text-neutral-700 hover:text-[var(--gold)]">
            About
          </Link>
          <Link href="/contact" className="no-underline text-neutral-700 hover:text-[var(--gold)]">
            Contact
          </Link>
          {/* placeholders you can replace later */}
          <a href="mailto:info@fortitudostudios.site" className="no-underline text-neutral-700 hover:text-[var(--gold)]">
            info@fortitudostudios.site
          </a>
          <a href="#" className="no-underline text-neutral-700 hover:text-[var(--gold)]">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
