"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const sections = [
  {
    title: "Who This Is Designed For",
    eyebrow: "Ideal Client Profile",
    body:
      "High-income professionals and business owners who want calm, structured financial decisions that hold up across cycles.",
    bullets: [
      "Professionals who want a disciplined, long-term framework.",
      "Families seeking retirement clarity and income certainty.",
      "Business owners who value structure over speculation.",
    ],
  },
  {
    title: "My Philosophy",
    eyebrow: "Structure Before Reaction",
    body:
      "Wealth is protected by process, not prediction. Every recommendation serves a defined strategy, built to endure volatility and preserve optionality.",
    bullets: [
      "Clarity over complexity.",
      "Discipline over emotion.",
      "Structure over speculation.",
    ],
  },
  {
    title: "How We Work Together",
    eyebrow: "Deliberate, Repeatable Process",
    body:
      "We begin with discovery, design a tailored strategy, implement precisely, and review consistently. Decisions are measured, not rushed.",
    bullets: [
      "Strategic discovery and full needs analysis.",
      "Structured plan aligned with goals and risk.",
      "Ongoing oversight and disciplined adjustments.",
    ],
  },
  {
    title: "Stewardship & Principle",
    eyebrow: "Capital Protected by Design",
    body:
      "Stewardship means protecting what you have built and ensuring continuity. Risk is managed deliberately so capital can compound with confidence.",
    bullets: [
      "Risk mitigation and protection alignment.",
      "Estate continuity and beneficiary structure.",
      "Long-term accountability and transparency.",
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-[#0B0D10] text-[var(--cream)] pt-20 md:pt-24">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[18, 36, 54, 72].map((top, index) => (
            <motion.div
              key={`hero-h-${top}`}
              className="absolute left-[-8%] right-[-8%] h-px bg-white/5"
              style={{ top: `${top}%` }}
              animate={{ opacity: [0.03, 0.08, 0.03], x: [0, 30, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.6,
              }}
            />
          ))}
          {[-5, 20, 45, 70].map((top, index) => (
            <motion.div
              key={`hero-d-${top}`}
              className="absolute left-[-45%] w-[190%] h-px bg-white/5"
              style={{ top: `${top}%` }}
              animate={{
                opacity: [0.02, 0.07, 0.02],
                x: [0, -40, 0],
                rotate: [-14, -9, -14],
              }}
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold leading-tight"
            {...reveal}
          >
            You work hard for your money. Let's structure it to endure.
          </motion.h1>
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-2xl text-white/80"
            {...reveal}
          >
            Financial strategy for high-income professionals who value clarity, discipline, and
            long-term growth - Pretoria
          </motion.p>
          <div className="mx-auto mt-8 h-px w-28 bg-[var(--gold)]/80" />
          <motion.p className="mt-6 text-sm md:text-base text-white/60" {...reveal}>
            Gert Fourie | Financial Advisor | Liberty Group (FSP 2409)
          </motion.p>
          <motion.div className="mt-10" {...reveal}>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] px-8 py-4 text-sm md:text-base tracking-[0.08em] uppercase hover:bg-[var(--gold)] hover:text-[#0B0D10] transition-colors duration-300"
              whileHover={{ y: -2, boxShadow: "0 14px 34px rgba(188,164,114,0.25)" }}
              whileTap={{ y: 0 }}
            >
              Schedule a Strategy Session
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-16 md:gap-20">
            {sections.map((section) => (
              <motion.div
                key={section.title}
                className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                {...reveal}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 text-2xl md:text-3xl font-serif">
                    {section.title}
                  </h2>
                  <div className="mt-4 h-px w-16 bg-[var(--gold)]/60" />
                </div>
                <div className="space-y-5 text-white/75">
                  <p className="text-base md:text-lg leading-relaxed">{section.body}</p>
                  <ul className="space-y-3 text-sm md:text-base">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
