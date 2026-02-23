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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/85 backdrop-blur-lg border-b border-gray-800/50 shadow-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#A02633] text-white font-bold text-xl md:text-2xl shadow-lg ring-2 ring-[#A02633]/30">
                GF
              </div>

              <div className="flex flex-col">
                <Link
                  href="/"
                  className="text-xl md:text-2xl font-semibold text-white tracking-tight hover:text-[#A02633] transition-colors duration-300"
                >
                  Gert Fourie
                </Link>
                <span className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">
                  Financial Advisor | Liberty Group (FSP 2409) | Pretoria
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="absolute bottom-[-6px] left-0 h-0.5 w-0 bg-[#A02633] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#A02633]/50 rounded-md p-1"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 bottom-0 left-0 w-72 bg-gray-950 border-r border-gray-800 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A02633] text-white font-bold text-xl">
                  GF
                </div>
                <span className="text-lg font-semibold text-white">Gert Fourie</span>
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-400 hover:text-white focus:outline-none"
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
                  className="block text-lg font-medium text-gray-300 hover:text-[#A02633] transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-gray-800 text-sm text-gray-500">
              Liberty Group (FSP 2409) | Pretoria Based
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
