"use client";

import { motion } from "framer-motion";

export default function AnimatedLines() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-[16%] z-0"
        animate={{
          backgroundPosition: [
            "0px 0px, 0px 0px, 0px 0px",
            "920px 520px, -760px 660px, 420px 0px",
          ],
          rotate: [0, 1.2, 0, -1.2, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              32deg,
              rgba(188, 164, 114, 0.46) 0px,
              rgba(188, 164, 114, 0.46) 1.4px,
              transparent 1.4px,
              transparent 92px
            ),
            repeating-linear-gradient(
              -32deg,
              rgba(248, 244, 234, 0.2) 0px,
              rgba(248, 244, 234, 0.2) 1px,
              transparent 1px,
              transparent 92px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(13, 42, 31, 0.35) 0px,
              rgba(13, 42, 31, 0.35) 2px,
              transparent 2px,
              transparent 184px
            )
          `,
          backgroundSize: "220px 220px, 220px 220px, 320px 320px",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          backgroundPosition: ["0px 0px, 0px 0px", "0px 420px, -420px 0px"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(188, 164, 114, 0.14) 0px, rgba(188, 164, 114, 0.14) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, rgba(188, 164, 114, 0.1) 0px, rgba(188, 164, 114, 0.1) 1px, transparent 1px, transparent 36px)",
          backgroundSize: "180px 180px, 180px 180px",
          opacity: 0.2,
        }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-[20%] z-0 blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.12, 1],
          opacity: [0.28, 0.46, 0.28],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "conic-gradient(from 180deg at 50% 50%, rgba(188, 164, 114, 0.22), transparent 26%, rgba(13, 42, 31, 0.28) 58%, transparent 84%, rgba(188, 164, 114, 0.2))",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          opacity: [0.12, 0.3, 0.12],
          backgroundPosition: [
            "120% -20%, -20% 120%",
            "-20% 120%, 120% -20%",
            "120% -20%, -20% 120%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(112deg, transparent 42%, rgba(188, 164, 114, 0.52) 50%, transparent 58%), linear-gradient(292deg, transparent 42%, rgba(248, 244, 234, 0.22) 50%, transparent 58%)",
          backgroundSize: "220% 220%, 220% 220%",
        }}
      />
    </>
  );
}
