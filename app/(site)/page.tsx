"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D10]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-serif text-2xl text-[var(--cream)] tracking-tight">GERT FOURIE</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[var(--cream)]/80">
            <Link href="/about" className="hover:text-[var(--gold)] transition">
              About
            </Link>
            <Link href="/services" className="hover:text-[var(--gold)] transition">
              Services
            </Link>
            <Link href="/process" className="hover:text-[var(--gold)] transition">
              Process
            </Link>
            <Link href="/insights" className="hover:text-[var(--gold)] transition">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-[var(--gold)] transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-[#0B0D10] text-[var(--cream)] overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, #0a231a 25%, transparent 25%, transparent 75%, #0a231a 75%)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 text-center container px-6 max-w-5xl">
          <p className="text-[var(--gold)] tracking-widest text-sm mb-4 uppercase">
            Liberty Group (FSP 2409) • Pretoria
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            You work hard for your money.
            <br />
            Let's structure it to endure.
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
            Financial strategy for high-income professionals who value clarity, discipline, and
            long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--gold)] text-[#0a231a] px-10 py-5 rounded-xl text-lg font-medium hover:bg-white transition-all shadow-lg"
            >
              Schedule a Strategy Session
            </Link>
            <Link
              href="/about"
              className="border border-[var(--gold)] text-[var(--gold)] px-10 py-5 rounded-xl text-lg font-medium hover:bg-[var(--gold)]/10 transition-all"
            >
              Learn My Approach
            </Link>
          </div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--cream)]/60 text-sm tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
        >
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl"
          >
            ↓
          </motion.span>
          SCROLL TO EXPLORE
        </motion.div>
      </section>
    </>
  );
}
