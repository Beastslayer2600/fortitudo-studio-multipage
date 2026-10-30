// app/components/AnimatedLines.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedLines() {
  const reduce = useReducedMotion();
  const loop = reduce ? 0 : Infinity;
  return (
    <>
      {/* Primary structural lattice */}
      <motion.div
        className="pointer-events-none absolute inset-[-14%] z-0 opacity-[0.22]"
        animate={{
          backgroundPosition: ["0% 0%", "120% 120%"],
        }}
        transition={{
          duration: 30,
          repeat: loop,
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
        className="pointer-events-none absolute inset-[-12%] z-0 opacity-[0.1] mix-blend-screen"
        animate={{
          backgroundPosition: ["135% 120%", "0% 0%"],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: loop,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0px, transparent 78px, rgba(245,199,92,0.16) 78px, rgba(245,199,92,0.16) 82px, rgba(245,199,92,0.94) 82px, rgba(245,199,92,0.94) 86px, rgba(255,231,163,0.96) 86px, rgba(255,231,163,0.96) 88px, rgba(245,199,92,0.3) 88px, rgba(245,199,92,0.3) 92px, transparent 92px, transparent 164px)",
          backgroundSize: "210px 210px",
          filter: "drop-shadow(0 0 24px rgba(245,199,92,0.26))",
        }}
      />

      {/* Fine tracer lines for a sharper look */}
      <motion.div
        className="pointer-events-none absolute inset-[-10%] z-0 opacity-[0.12] mix-blend-screen"
        animate={{
          backgroundPosition: ["0% 120%", "120% 0%"],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: loop,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0px, transparent 118px, rgba(255,234,178,0.82) 118px, rgba(255,234,178,0.82) 120px, transparent 120px, transparent 228px)",
          backgroundSize: "260px 260px",
          filter: "drop-shadow(0 0 10px rgba(255,234,178,0.12))",
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
          repeat: loop,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(245,199,92,0.24), transparent 34%), radial-gradient(circle at 78% 72%, rgba(214,170,73,0.16), transparent 42%), radial-gradient(circle at 55% 42%, rgba(24,18,10,0.38), transparent 30%)",
          backgroundSize: "140% 140%",
        }}
      />

    </>
  );
}
