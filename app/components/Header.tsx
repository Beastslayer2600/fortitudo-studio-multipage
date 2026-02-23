"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/process", label: "Process" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/85 backdrop-blur-lg border-b border-[var(--gold)]/30 shadow-lg">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-24 -left-16 h-48 w-48 rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(188,164,114,0.35) 0%, rgba(188,164,114,0.0) 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 right-0 h-56 w-56 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(13,42,31,0.25) 0%, rgba(13,42,31,0.0) 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(13,42,31,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(13,42,31,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--greenDark)] to-[var(--green)] text-[var(--cream)] font-bold text-xl md:text-2xl shadow-lg ring-2 ring-[var(--gold)]/40">
                GF
              </div>

              <div className="flex flex-col">
                <Link
                  href="/"
                  className="text-xl md:text-2xl font-semibold text-[var(--greenDark)] tracking-tight hover:text-[var(--gold)] transition-colors duration-300"
                >
                  Gert Fourie
                </Link>
                <span className="text-xs md:text-sm text-[var(--ink)]/70 font-medium tracking-wide">
                  Financial Advisor | Liberty Group (FSP 2409) | Pretoria
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-[var(--ink)]/80 hover:text-[var(--greenDark)] font-medium transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="absolute bottom-[-6px] left-0 h-0.5 w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden text-[var(--greenDark)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 rounded-md p-1"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 bottom-0 left-0 w-72 bg-[var(--cream)] border-r border-[var(--gold)]/30 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-[var(--gold)]/30">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--greenDark)] to-[var(--green)] text-[var(--cream)] font-bold text-xl">
                  GF
                </div>
                <span className="text-lg font-semibold text-[var(--greenDark)]">Gert Fourie</span>
              </div>
              <button
                onClick={closeMenu}
                className="text-[var(--ink)]/60 hover:text-[var(--greenDark)] focus:outline-none"
                aria-label="Close menu"
                type="button"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium text-[var(--ink)]/80 hover:text-[var(--greenDark)] transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-[var(--gold)]/30 text-sm text-[var(--ink)]/70">
              Liberty Group (FSP 2409) | Pretoria Based
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
