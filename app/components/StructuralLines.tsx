"use client";

import { motion } from "framer-motion";

const horizontalLines = [12, 24, 36, 48, 60, 72, 84];
const diagonalLines = [-8, 12, 32, 52, 72, 92];

export default function StructuralLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(130deg, rgba(11,13,16,0.95), rgba(18,21,26,0.9), rgba(11,13,16,0.95))",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(10,35,26,0.35), transparent 55%), radial-gradient(circle at 85% 30%, rgba(188,164,114,0.18), transparent 50%)",
        }}
      />

      {horizontalLines.map((top, index) => (
        <motion.div
          key={`h-${top}`}
          className="absolute left-[-10%] right-[-10%] h-px bg-white/5"
          style={{ top: `${top}%` }}
          animate={{ opacity: [0.03, 0.08, 0.03], x: [0, 40, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.4,
          }}
        />
      ))}

      {diagonalLines.map((top, index) => (
        <motion.div
          key={`d-${top}`}
          className="absolute left-[-45%] w-[190%] h-px bg-white/5"
          style={{ top: `${top}%` }}
          animate={{
            opacity: [0.02, 0.07, 0.02],
            x: [0, -50, 0],
            rotate: [-14, -8, -14],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.9,
          }}
        />
      ))}
    </div>
  );
}
