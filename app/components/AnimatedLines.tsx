"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-[12%] z-0"
        animate={{
          x: [0, 120],
          y: [0, 120],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(188, 164, 114, 0.34) 0px,
              rgba(188, 164, 114, 0.34) 2px,
              transparent 2px,
              transparent 88px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(13, 42, 31, 0.28) 0px,
              rgba(13, 42, 31, 0.28) 2px,
              transparent 2px,
              transparent 88px
            )
          `,
          backgroundSize: "240px 240px",
          opacity: 0.36,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          x: [160, 0],
          y: [0, 160],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(188, 164, 114, 0.24) 0px, rgba(188, 164, 114, 0.24) 1px, transparent 1px, transparent 120px)",
          backgroundSize: "220px 220px",
          opacity: 0.2,
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          opacity: [0.06, 0.16, 0.06],
          backgroundPosition: ["120% 20%", "0% 80%", "120% 20%"],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 38%, rgba(188, 164, 114, 0.28) 50%, transparent 62%)",
          backgroundSize: "180% 180%",
          filter: "blur(0.6px)",
        }}
      />
    </>
  );
}
