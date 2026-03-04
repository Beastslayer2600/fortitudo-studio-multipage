"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-[40%] z-0"
        animate={{
          x: [0, 320],
          y: [0, 320],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(188, 164, 114, 0.48) 0px, rgba(188, 164, 114, 0.48) 2px, transparent 2px, transparent 84px)",
          backgroundSize: "220px 220px",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-[40%] z-0"
        animate={{
          x: [-320, 0],
          y: [0, 320],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(248, 244, 234, 0.24) 0px, rgba(248, 244, 234, 0.24) 1.3px, transparent 1.3px, transparent 84px)",
          backgroundSize: "220px 220px",
          opacity: 0.38,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          opacity: [0.08, 0.18, 0.08],
          backgroundPosition: ["120% 0%", "-20% 100%", "120% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 42%, rgba(188, 164, 114, 0.5) 50%, transparent 58%)",
          backgroundSize: "180% 180%",
        }}
      />
    </>
  );
}
