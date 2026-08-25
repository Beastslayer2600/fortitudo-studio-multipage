// app/components/AnimatedLines.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      {/* Primary structural lattice */}
      <motion.div
        className="pointer-events-none absolute inset-[-14%] z-0 opacity-[0.16]"
        animate={{
          backgroundPosition: ["0% 0%", "120% 120%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(6,8,10,0.98) 24%, transparent 24%, transparent 76%, rgba(6,8,10,0.98) 76%), linear-gradient(-45deg, rgba(18,20,24,0.72) 24%, transparent 24%, transparent 76%, rgba(18,20,24,0.72) 76%)",
          backgroundSize: "176px 176px",
        }}
      />

      {/* Metallic gold diagonal ribbons */}
      <motion.div
        className="pointer-events-none absolute inset-[-12%] z-0 opacity-[0.05] mix-blend-screen"
        animate={{
          backgroundPosition: ["135% 120%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0px, transparent 78px, rgba(245,199,92,0.16) 78px, rgba(245,199,92,0.16) 82px, rgba(245,199,92,0.94) 82px, rgba(245,199,92,0.94) 86px, rgba(255,231,163,0.96) 86px, rgba(255,231,163,0.96) 88px, rgba(245,199,92,0.3) 88px, rgba(245,199,92,0.3) 92px, transparent 92px, transparent 164px)",
          backgroundSize: "210px 210px",
        }}
      />

      {/* Soft gold atmospheric glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          backgroundPosition: ["14% 18%", "86% 78%", "14% 18%"],
          opacity: [0.28, 0.42, 0.28],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(245,199,92,0.24), transparent 34%), radial-gradient(circle at 78% 72%, rgba(214,170,73,0.16), transparent 42%), radial-gradient(circle at 55% 42%, rgba(24,18,10,0.38), transparent 30%)",
          backgroundSize: "140% 140%",
        }}
      />

      {/* Bright metallic sweep for polish */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
        animate={{
          backgroundPosition: ["140% 10%", "-20% 92%"],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 42%, rgba(255,222,138,0.9) 49%, rgba(245,199,92,0.72) 52%, transparent 58%)",
          backgroundSize: "220% 220%",
        }}
      />
    </>
  );
}
