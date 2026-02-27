"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        animate={{
          backgroundPosition: ["0% 0%", "200% 200%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(45deg, #0a231a 25%, transparent 25%, transparent 75%, #0a231a 75%),
            linear-gradient(-45deg, #bca472 25%, transparent 25%, transparent 75%, #bca472 75%)
          `,
          backgroundSize: "180px 180px",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        animate={{
          backgroundPosition: ["100% 100%", "-100% -100%"],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 45%, #bca472 45%, #bca472 55%, transparent 55%)",
          backgroundSize: "240px 240px",
        }}
      />
    </>
  );
}
