"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [pointer, setPointer] = useState({ x: 50, y: 38, visible: false });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const toPercent = (clientX: number, clientY: number) => {
      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      return {
        x: Math.min(100, Math.max(0, (clientX / width) * 100)),
        y: Math.min(100, Math.max(0, (clientY / height) * 100)),
      };
    };

    const movePointer = (clientX: number, clientY: number) => {
      const pos = toPercent(clientX, clientY);
      setPointer({ ...pos, visible: true });
      return pos;
    };

    const createRipple = (clientX: number, clientY: number) => {
      const pos = toPercent(clientX, clientY);
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev, { id, x: pos.x, y: pos.y }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 950);
    };

    const onMouseMove = (event: MouseEvent) => {
      movePointer(event.clientX, event.clientY);
    };

    const onMouseDown = (event: MouseEvent) => {
      createRipple(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) movePointer(touch.clientX, touch.clientY);
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      movePointer(touch.clientX, touch.clientY);
      createRipple(touch.clientX, touch.clientY);
    };

    const onLeave = () => {
      setPointer((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("blur", onLeave);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-[#0B0D10] text-[var(--cream)] min-h-screen relative overflow-x-hidden">
        {/* Layer 1: Green structural grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.2] pointer-events-none z-0"
          animate={{
            backgroundPosition: ["0% 0%", "180% 180%"],
            opacity: [0.14, 0.22, 0.14],
          }}
          transition={{
            backgroundPosition: { duration: 58, repeat: Infinity, ease: "linear" },
            opacity: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, #0a231a 25%, transparent 25%, transparent 75%, #0a231a 75%)",
            backgroundSize: "150px 150px",
          }}
        />

        {/* Layer 2: Gold cross-grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.14] pointer-events-none z-0"
          animate={{
            backgroundPosition: ["180% 180%", "0% 0%"],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            backgroundPosition: { duration: 72, repeat: Infinity, ease: "linear" },
            opacity: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 45%, #bca472 45%, #bca472 55%, transparent 55%)",
            backgroundSize: "210px 210px",
          }}
        />

        {/* Layer 3: Ambient glow */}
        <motion.div
          className="absolute -inset-[15%] pointer-events-none z-0 blur-3xl"
          animate={{
            x: ["-6%", "8%", "-4%"],
            y: ["-4%", "10%", "-3%"],
            rotate: [0, 5, -4, 0],
            scale: [1, 1.06, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 92, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 25%, rgba(188, 164, 114, 0.35), transparent 48%), radial-gradient(circle at 78% 68%, rgba(10, 35, 26, 0.55), transparent 52%)",
          }}
        />

        {/* Layer 4: Cursor/touch-follow glow */}
        <motion.div
          className="absolute z-0 h-[32rem] w-[32rem] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          animate={{
            left: `${pointer.x}%`,
            top: `${pointer.y}%`,
            opacity: pointer.visible ? 0.34 : 0.14,
            scale: pointer.visible ? 1 : 0.9,
          }}
          transition={{ type: "spring", stiffness: 78, damping: 22, mass: 0.8 }}
          style={{
            background:
              "radial-gradient(circle, rgba(188, 164, 114, 0.34) 0%, rgba(13, 42, 31, 0.26) 44%, rgba(11, 13, 16, 0) 72%)",
          }}
        />

        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute z-0 h-10 w-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--gold)]/60"
            style={{ left: `${ripple.x}%`, top: `${ripple.y}%` }}
            initial={{ scale: 0.35, opacity: 0.55 }}
            animate={{ scale: 5.5, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        ))}

        {/* Main content wrapper */}
        <div className="relative z-10 bg-[#0B0D10]/55 backdrop-blur-[1px] min-h-screen">
          <Navbar />
          {children}
          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-12 text-center text-sm text-white/60">
              <div className="mx-auto mb-6 h-px w-24 bg-[var(--gold)]/60" />
              <p className="mb-3 font-medium text-white/80">
                &copy; {new Date().getFullYear()} Gert Fourie | Liberty Accredited Financial Adviser
                | Pretoria
              </p>
              <p className="max-w-4xl mx-auto leading-relaxed">
                Liberty Group Limited is an authorised financial service provider (No. 2409) and
                part of the Standard Bank Group. Gert Fourie is a representative of Liberty Group
                Limited. All content on fortitudostudios.site is general information only and does
                not constitute financial advice, a recommendation or solicitation. Personalised
                advice is provided only after a full needs analysis. Past performance is not
                indicative of future results. Investments carry risk, including possible loss of
                capital.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs tracking-[0.18em] uppercase text-white/50">
                <a href="/disclaimer" className="hover:text-[var(--gold)] transition-colors">
                  Disclaimer
                </a>
                <span aria-hidden="true">|</span>
                <a href="/privacy" className="hover:text-[var(--gold)] transition-colors">
                  Privacy Policy (POPIA)
                </a>
                <span aria-hidden="true">|</span>
                <a href="/contact" className="hover:text-[var(--gold)] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
