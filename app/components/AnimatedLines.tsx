"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-[30%] z-0"
        animate={{
          backgroundPosition: ["0px 0px", "960px 640px"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(120deg, rgba(188,164,114,0) 0px, rgba(188,164,114,0) 78px, rgba(188,164,114,0.62) 78px, rgba(188,164,114,0.62) 81px, rgba(188,164,114,0) 81px, rgba(188,164,114,0) 168px)",
          backgroundSize: "320px 320px",
          opacity: 0.62,
        }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-[30%] z-0"
        animate={{
          backgroundPosition: ["0px 0px", "-880px 620px"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg, rgba(248,244,234,0) 0px, rgba(248,244,234,0) 112px, rgba(248,244,234,0.24) 112px, rgba(248,244,234,0.24) 114px, rgba(248,244,234,0) 114px, rgba(248,244,234,0) 220px)",
          backgroundSize: "360px 360px",
          opacity: 0.4,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
        animate={{
          opacity: [0.16, 0.3, 0.16],
          backgroundPosition: ["140% 10%", "-30% 90%", "140% 10%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 42%, rgba(188,164,114,0.75) 50%, transparent 58%)",
          backgroundSize: "220% 220%",
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          opacity: [0.18, 0.32, 0.18],
          backgroundPosition: ["0% 0%", "120% 120%", "0% 0%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(188,164,114,0.28), transparent 42%), radial-gradient(circle at 82% 76%, rgba(13,42,31,0.34), transparent 48%)",
        }}
      />
    </>
  );
}
