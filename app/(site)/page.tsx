"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0B0D10] text-[var(--cream)] overflow-hidden pt-20 md:pt-24">
        {/* Subtle animated lines - already global from layout */}
        <div className="relative z-10 text-center container px-6 max-w-5xl">
          <p className="text-[var(--gold)] tracking-widest text-sm mb-4 uppercase">
            Liberty Group (FSP 2409) - Pretoria
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            You work hard for your money.<br />
            Let's structure it to endure.
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
            Financial strategy for high-income professionals who value clarity, discipline, and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[var(--gold)] text-[#0a231a] px-10 py-5 rounded-xl text-lg font-medium hover:bg-white transition-all shadow-lg">
              Schedule a Strategy Session
            </Link>
            <Link href="/about" className="border border-[var(--gold)] text-[var(--gold)] px-10 py-5 rounded-xl text-lg font-medium hover:bg-[var(--gold)]/10 transition-all">
              Learn My Approach
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--cream)]/70 text-sm tracking-widest md:bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl"
          >
            ↓
          </motion.div>
          <span className="hidden md:block">SCROLL TO EXPLORE</span>
          <span className="md:hidden">Swipe up to explore</span>
        </motion.div>
      </section>

      {/* Who This Is Designed For */}
      <section className="py-32 px-6 bg-[#0B0D10]/95">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-[var(--gold)]">
            Who This Is Designed For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-[var(--gold)]/20 rounded-xl hover:border-[var(--gold)] hover:shadow-[0_0_20px_rgba(188,164,114,0.2)] transition-all duration-300">
              <h3 className="text-2xl font-serif mb-4 text-[var(--gold)]">High-income professionals</h3>
              <p className="text-lg opacity-90">Seeking clarity and structure in a complex financial world.</p>
            </div>
            <div className="p-8 border border-[var(--gold)]/20 rounded-xl hover:border-[var(--gold)] hover:shadow-[0_0_20px_rgba(188,164,114,0.2)] transition-all duration-300">
              <h3 className="text-2xl font-serif mb-4 text-[var(--gold)]">Business owners</h3>
              <p className="text-lg opacity-90">Building sustainable wealth without speculation.</p>
            </div>
            <div className="p-8 border border-[var(--gold)]/20 rounded-xl hover:border-[var(--gold)] hover:shadow-[0_0_20px_rgba(188,164,114,0.2)] transition-all duration-300">
              <h3 className="text-2xl font-serif mb-4 text-[var(--gold)]">Families</h3>
              <p className="text-lg opacity-90">Planning multi-decade security and legacy.</p>
            </div>
            <div className="p-8 border border-[var(--gold)]/20 rounded-xl hover:border-[var(--gold)] hover:shadow-[0_0_20px_rgba(188,164,114,0.2)] transition-all duration-300">
              <h3 className="text-2xl font-serif mb-4 text-[var(--gold)]">Disciplined thinkers</h3>
              <p className="text-lg opacity-90">Who value long-term stewardship over short-term hype.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discipline Over Emotion */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-10 text-[var(--gold)]">
            Discipline Over Emotion. Structure Over Speculation.
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-12">
            Markets fluctuate. Noise increases. Trends tempt. I believe wealth is built through structured planning, disciplined execution, and long-term thinking - not reactionary decisions. Performance matters, but only within a framework that protects your future.
          </p>
          <p className="text-2xl font-serif text-[var(--gold)] italic">
            Strategy first. Emotion second.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-[#0B0D10]/95">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[var(--gold)]">
            Ready to Structure Your Future?
          </h2>
          <p className="text-xl opacity-90 mb-12">
            If you value clarity over complexity and stewardship over speculation, let's speak.
          </p>
          <Link href="/contact" className="inline-block bg-[var(--gold)] text-[#0a231a] px-12 py-6 rounded-xl text-xl font-medium hover:bg-white transition-all shadow-lg">
            Schedule a Strategy Session
          </Link>
        </div>
      </section>
    </>
  );
}
