"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Deep base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(11,15,30,0.95) 0%, #07090F 65%)",
        }}
      />

      {/* Slow diagonal gold lattice */}
      <motion.div
        className="absolute inset-[-20%] opacity-[0.07]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0px, transparent 88px, rgba(201,168,76,0.8) 88px, rgba(201,168,76,0.8) 90px, transparent 90px, transparent 176px)",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Slower counter-diagonal */}
      <motion.div
        className="absolute inset-[-20%] opacity-[0.04]"
        animate={{ backgroundPosition: ["100% 0%", "0% 100%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0px, transparent 120px, rgba(201,168,76,0.6) 120px, rgba(201,168,76,0.6) 122px, transparent 122px, transparent 240px)",
          backgroundSize: "260px 260px",
        }}
      />

      {/* Gold glow – top-left */}
      <motion.div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-[0.08]"
        animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Gold glow – bottom-right */}
      <motion.div
        className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        animate={{ opacity: [0.04, 0.10, 0.04], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 100% at 50% 50%, transparent 55%, rgba(7,9,15,0.7) 100%)",
        }}
      />
    </div>
  );
}
