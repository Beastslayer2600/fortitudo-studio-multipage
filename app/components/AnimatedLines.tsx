// app/components/AnimatedLines.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      {/* Deep green structural grid - slow movement */}
      <motion.div
        className="absolute inset-0 opacity-[0.12] pointer-events-none z-0"
        animate={{
          backgroundPosition: ["0% 0%", "140% 140%"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, #0a231a 25%, transparent 25%, transparent 75%, #0a231a 75%)",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Muted gold accent lines - opposite direction */}
      <motion.div
        className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
        animate={{
          backgroundPosition: ["140% 140%", "0% 0%"],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(135deg, transparent 45%, #bca472 45%, #bca472 55%, transparent 55%)",
          backgroundSize: "200px 200px",
        }}
      />
    </>
  );
}
