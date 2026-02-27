"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center bg-[#0B0D10] text-[var(--cream)]">

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
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--cream)]/70 text-sm tracking-widest md:bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl"
          >
            ↓
          </motion.div>
          <span className="hidden md:block">SCROLL TO EXPLORE</span>
          <span className="md:hidden">Swipe up to explore</span>
        </motion.div>
      </section>

    </>
  );
}
