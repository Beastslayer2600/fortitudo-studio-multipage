"use client";

import { Brain, Compass, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0B0D10] text-white pt-20 md:pt-24 min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0D10]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(11,13,16,0.95), rgba(18,21,26,0.9), rgba(11,13,16,0.95))",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 pointer-events-none">
          {[12, 28, 44, 60, 76, 90].map((top, index) => (
            <motion.div
              key={`h-${top}`}
              className="absolute left-[-5%] right-[-5%] h-px bg-white/5"
              style={{ top: `${top}%` }}
              animate={{ opacity: [0.03, 0.08, 0.03], x: [0, 30, 0] }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5,
              }}
            />
          ))}
          {[-10, 15, 40, 65, 90].map((top, index) => (
            <motion.div
              key={`d-${top}`}
              className="absolute left-[-40%] w-[180%] h-px bg-white/5"
              style={{ top: `${top}%` }}
              animate={{
                opacity: [0.02, 0.07, 0.02],
                x: [0, -40, 0],
                rotate: [-14, -8, -14],
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold tracking-tight leading-tight">
            You work hard for your money. Let's structure it to endure.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-2xl text-white/80 font-sans">
            Financial strategy for high-income professionals who value clarity, discipline, and long-term
            growth - Pretoria
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-[var(--gold)]/80" />
          <p className="mt-6 text-sm md:text-base text-white/60 tracking-[0.08em]">
            Gert Fourie | Financial Advisor | Liberty Group (FSP 2409)
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] px-8 py-4 text-sm md:text-base tracking-[0.08em] hover:bg-[var(--gold)] hover:text-[#0B0D10] transition-colors duration-300"
            >
              Schedule a Strategy Session
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] text-[var(--ink)] py-16 sm:py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Who this is for
              </p>
              <h2 className="mt-2 font-serif text-3xl" style={{ color: "var(--green)" }}>
                For people who want calm, not complexity
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                You are not looking for more noise. You are looking for a plan you can trust.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {[
                "Professionals earning well but unsure if their strategy is optimal.",
                "Families wanting retirement certainty and fewer surprises.",
                "Business owners who want structure, not guesswork.",
              ].map((item) => (
                <div key={item} className="surface p-6">
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Liberty FSP 2409</span>
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Pretoria based</span>
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Fiduciary focus</span>
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Personalised</span>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Clarity",
                text: "A plan you can understand and explain to your family.",
                icon: Compass,
              },
              {
                title: "Discipline",
                text: "A structure that reduces emotion and protects progress.",
                icon: ShieldCheck,
              },
              {
                title: "Confidence",
                text: "The quiet assurance that you are on the right path.",
                icon: Brain,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div key={title} className="surface p-6">
                <Icon className="h-6 w-6" style={{ color: "var(--gold)" }} />
                <h3 className="mt-4 font-serif text-xl" style={{ color: "var(--green)" }}>
                  {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
