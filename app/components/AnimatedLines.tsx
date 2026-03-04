"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-[8%] z-0"
        animate={{
          backgroundPosition: ["0% 0%", "120% 120%"],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(188, 164, 114, 0.2) 0px,
              rgba(188, 164, 114, 0.2) 1.2px,
              transparent 1.2px,
              transparent 90px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(13, 42, 31, 0.22) 0px,
              rgba(13, 42, 31, 0.22) 1.2px,
              transparent 1.2px,
              transparent 90px
            )
          `,
          backgroundSize: "220px 220px",
          opacity: 0.17,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          backgroundPosition: ["120% 0%", "0% 120%"],
        }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(188, 164, 114, 0.16) 0px, rgba(188, 164, 114, 0.16) 1px, transparent 1px, transparent 120px)",
          backgroundSize: "280px 280px",
          opacity: 0.12,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          opacity: [0.09, 0.16, 0.09],
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
          filter: "blur(1px)",
        }}
      />
    </>
  );
}
