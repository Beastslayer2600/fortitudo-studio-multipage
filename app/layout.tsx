"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0D10] text-[var(--cream)] min-h-screen relative overflow-x-hidden">
        {/* Layer 1: Green structural grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.18] pointer-events-none z-0"
          animate={{
            backgroundPosition: ["0% 0%", "180% 180%"],
            opacity: [0.14, 0.2, 0.14],
          }}
          transition={{
            backgroundPosition: { duration: 55, repeat: Infinity, ease: "linear" },
            opacity: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, #0a231a 25%, transparent 25%, transparent 75%, #0a231a 75%)",
            backgroundSize: "150px 150px",
          }}
        />

        {/* Layer 2: Gold cross-layer */}
        <motion.div
          className="absolute inset-0 opacity-[0.12] pointer-events-none z-0"
          animate={{
            backgroundPosition: ["180% 180%", "0% 0%"],
            opacity: [0.09, 0.14, 0.09],
          }}
          transition={{
            backgroundPosition: { duration: 70, repeat: Infinity, ease: "linear" },
            opacity: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 45%, #bca472 45%, #bca472 55%, transparent 55%)",
            backgroundSize: "210px 210px",
          }}
        />

        {/* Layer 3: Soft moving glow */}
        <motion.div
          className="absolute -inset-[15%] pointer-events-none z-0 blur-3xl"
          animate={{
            x: ["-6%", "8%", "-4%"],
            y: ["-4%", "10%", "-3%"],
            rotate: [0, 5, -4, 0],
            scale: [1, 1.06, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{ duration: 90, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 25%, rgba(188, 164, 114, 0.35), transparent 48%), radial-gradient(circle at 78% 68%, rgba(10, 35, 26, 0.55), transparent 52%)",
          }}
        />

        {/* Main content wrapper */}
        <div className="relative z-10 bg-[#0B0D10]/55 backdrop-blur-[1px] min-h-screen">
          <Navbar />
          {children}
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
                <span aria-hidden="true">|</span>
                <a href="/privacy" className="hover:text-[var(--gold)] transition-colors">
                  Privacy Policy (POPIA)
                </a>
                <span aria-hidden="true">|</span>
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
