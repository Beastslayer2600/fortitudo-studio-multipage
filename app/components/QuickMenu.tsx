"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function QuickMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click + Escape
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative z-50">
      <button
        type="button"
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[var(--greenDark)] text-[var(--cream)] hover:bg-[var(--green)] transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        aria-label={open ? "Close menu" : "Open quick menu"}
        aria-expanded={open}
        aria-controls="quick-menu-panel"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      <div
        id="quick-menu-panel"
        className={`fixed inset-0 bg-[var(--greenDark)]/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="menu"
        aria-hidden={!open}
      >
        <div className="absolute inset-0" onClick={() => setOpen(false)} />

        <nav
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 text-2xl md:text-3xl font-serif text-[var(--cream)] ${
            open ? "scale-100" : "scale-95"
          } transition-transform duration-300`}
        >
          <Link
            href="/"
            className="hover:text-[var(--gold)] transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[var(--gold)] transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-[var(--gold)] transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/process"
            className="hover:text-[var(--gold)] transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Process
          </Link>
          <Link
            href="/insights"
            className="hover:text-[var(--gold)] transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Insights
          </Link>
          <Link
            href="/fee-transparency"
            className="hover:text-[var(--gold)] transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Fees
          </Link>
          <Link
            href="/contact"
            className="mt-6 px-10 py-4 bg-[var(--gold)] text-[var(--greenDark)] rounded-xl text-xl font-medium hover:bg-[var(--gold)]/90 transition"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Schedule a Session
          </Link>
        </nav>
      </div>
    </div>
  );
}
