"use client";

import { useEffect, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

export default function AnimatedLines() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Primary structural lattice */}
      <div
        className="pointer-events-none absolute inset-[-14%] z-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(6,8,10,0.98) 24%, transparent 24%, transparent 76%, rgba(6,8,10,0.98) 76%), linear-gradient(-45deg, rgba(18,20,24,0.72) 24%, transparent 24%, transparent 76%, rgba(18,20,24,0.72) 76%)",
          backgroundSize: "176px 176px",
          ...(reduced ? {} : { willChange: "transform", animation: "bg-fwd 30s linear infinite" }),
        }}
      />

      {/* Metallic gold diagonal ribbons */}
      <div
        className="pointer-events-none absolute inset-[-12%] z-0 opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0px, transparent 78px, rgba(245,199,92,0.16) 78px, rgba(245,199,92,0.16) 82px, rgba(245,199,92,0.94) 82px, rgba(245,199,92,0.94) 86px, rgba(255,231,163,0.96) 86px, rgba(255,231,163,0.96) 88px, rgba(245,199,92,0.3) 88px, rgba(245,199,92,0.3) 92px, transparent 92px, transparent 164px)",
          backgroundSize: "210px 210px",
          ...(reduced ? {} : { willChange: "transform", animation: "bg-rev 20s linear infinite" }),
        }}
      />

      {/* Fine tracer lines */}
      <div
        className="pointer-events-none absolute inset-[-10%] z-0 opacity-[0.10] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0px, transparent 118px, rgba(255,234,178,0.82) 118px, rgba(255,234,178,0.82) 120px, transparent 120px, transparent 228px)",
          backgroundSize: "260px 260px",
          ...(reduced ? {} : { willChange: "transform", animation: "bg-tracer 16s linear infinite" }),
        }}
      />

      {/* Soft gold atmospheric glow — opacity pulse only, no position animation */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(245,199,92,0.24), transparent 34%), radial-gradient(circle at 78% 72%, rgba(214,170,73,0.16), transparent 42%), radial-gradient(circle at 55% 42%, rgba(24,18,10,0.38), transparent 30%)",
          opacity: 0.35,
          ...(reduced ? {} : { animation: "glow-pulse 15s ease-in-out infinite" }),
        }}
      />

      {/* Metallic sweep — opacity fade only */}
      <div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 42%, rgba(255,222,138,0.9) 49%, rgba(245,199,92,0.72) 52%, transparent 58%)",
          backgroundSize: "220% 220%",
          backgroundPosition: "80% 50%",
          opacity: 0.14,
          ...(reduced ? {} : { animation: "sweep-fade 10s ease-in-out infinite" }),
        }}
      />
    </>
  );
}
