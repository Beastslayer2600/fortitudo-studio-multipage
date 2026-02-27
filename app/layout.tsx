import type { Metadata } from "next";
import AnimatedLines from "./components/AnimatedLines";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gert Fourie | Liberty Accredited Financial Adviser | Pretoria",
  description:
    "Structured financial planning for professionals and families in Pretoria - clarity, discipline, long-term growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0D10] text-[var(--cream)] min-h-screen relative overflow-x-hidden">
        <AnimatedLines />
        <div className="relative z-10 bg-[#0B0D10]/70 backdrop-blur-[2px] min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-12 text-center text-sm text-white/60">
              <div className="mx-auto mb-6 h-px w-24 bg-[var(--gold)]/60" />
              <p className="mb-3 font-medium text-white/80">
                &copy; {new Date().getFullYear()} Gert Fourie | Liberty Accredited Financial Adviser
                | Pretoria
              </p>
              <p className="max-w-4xl mx-auto leading-relaxed">
                Liberty Group Limited is an authorised financial service provider (No. 2409) and
                part of the Standard Bank Group. Gert Fourie is a representative of Liberty Group
                Limited. All content on fortitudostudios.site is general information only and does
                not constitute financial advice, a recommendation or solicitation. Personalised
                advice is provided only after a full needs analysis. Past performance is not
                indicative of future results. Investments carry risk, including possible loss of
                capital.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs tracking-[0.18em] uppercase text-white/50">
                <a href="/disclaimer" className="hover:text-[var(--gold)] transition-colors">
                  Disclaimer
                </a>
                <span aria-hidden="true">•</span>
                <a href="/privacy" className="hover:text-[var(--gold)] transition-colors">
                  Privacy Policy (POPIA)
                </a>
                <span aria-hidden="true">•</span>
                <a href="/contact" className="hover:text-[var(--gold)] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
