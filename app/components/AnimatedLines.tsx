// app/components/AnimatedLines.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      {/* Primary structural grid */}
      <motion.div
        className="pointer-events-none absolute inset-[-12%] z-0 opacity-[0.18]"
        animate={{
          backgroundPosition: ["0% 0%", "115% 115%"],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(10,35,26,0.9) 24%, transparent 24%, transparent 76%, rgba(10,35,26,0.9) 76%), linear-gradient(-45deg, rgba(12,46,34,0.46) 24%, transparent 24%, transparent 76%, rgba(12,46,34,0.46) 76%)",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Gold diagonal accent lines */}
      <motion.div
        className="pointer-events-none absolute inset-[-10%] z-0 opacity-[0.14] mix-blend-screen"
        animate={{
          backgroundPosition: ["130% 120%", "0% 0%"],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0px, transparent 86px, rgba(188,164,114,0.88) 86px, rgba(188,164,114,0.88) 90px, transparent 90px, transparent 176px)",
          backgroundSize: "220px 220px",
          filter: "drop-shadow(0 0 16px rgba(188,164,114,0.18))",
        }}
      />

      {/* Soft moving atmospheric glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          backgroundPosition: ["15% 20%", "85% 75%", "15% 20%"],
          opacity: [0.24, 0.38, 0.24],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(188,164,114,0.2), transparent 34%), radial-gradient(circle at 78% 72%, rgba(28,86,61,0.22), transparent 40%), radial-gradient(circle at 55% 42%, rgba(248,244,234,0.06), transparent 26%)",
          backgroundSize: "140% 140%",
        }}
      />

      {/* Thin luminous sweep for polish */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
        animate={{
          backgroundPosition: ["140% 10%", "-20% 92%"],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 42%, rgba(188,164,114,0.72) 50%, transparent 58%)",
          backgroundSize: "220% 220%",
        }}
      />
    </>
  );
}
