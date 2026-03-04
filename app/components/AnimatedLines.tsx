"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-[20%] z-0 blur-[42px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 24%, rgba(188, 164, 114, 0.34), transparent 42%),
            radial-gradient(circle at 76% 72%, rgba(13, 42, 31, 0.42), transparent 48%),
            radial-gradient(circle at 52% 8%, rgba(188, 164, 114, 0.18), transparent 40%)
          `,
          backgroundSize: "140% 140%",
          opacity: 0.52,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          backgroundPosition: ["0% 0%", "120% 120%"],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(13, 42, 31, 0.26) 1px, transparent 1px), linear-gradient(-45deg, rgba(188, 164, 114, 0.22) 1px, transparent 1px)",
          backgroundSize: "150px 150px",
          opacity: 0.036,
          mixBlendMode: "screen",
          filter: "blur(0.45px)",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          opacity: [0.03, 0.06, 0.03],
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
          filter: "blur(2px)",
        }}
      />
    </>
  );
}
