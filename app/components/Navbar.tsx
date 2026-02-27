"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm i lucide-react if missing

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D10]/80 backdrop-blur-md border-b border-white/10 hidden md:flex">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl text-[var(--cream)] tracking-tight">
            GERT FOURIE
          </Link>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-[var(--cream)]/80">
            <Link href="/about" className="hover:text-[var(--gold)] transition">
              About
            </Link>
            <Link href="/services" className="hover:text-[var(--gold)] transition">
              Services
            </Link>
            <Link href="/process" className="hover:text-[var(--gold)] transition">
              Process
            </Link>
            <Link href="/insights" className="hover:text-[var(--gold)] transition">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-[var(--gold)] transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D10]/90 backdrop-blur-md border-b border-white/10 md:hidden">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif text-xl text-[var(--cream)]">
            GERT FOURIE
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? (
              <X className="w-7 h-7 text-[var(--cream)]" />
            ) : (
              <Menu className="w-7 h-7 text-[var(--cream)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-[#0B0D10]/95 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col py-6 px-6 gap-6 text-lg text-[var(--cream)]">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href="/process" onClick={() => setOpen(false)}>
                Process
              </Link>
              <Link href="/insights" onClick={() => setOpen(false)}>
                Insights
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-[var(--gold)] font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
