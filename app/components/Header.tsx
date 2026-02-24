"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((value) => !value);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  if (pathname === "/") {
    return null;
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "border-b border-white/10 backdrop-blur-md" : "border-b border-transparent"
        }`}
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(11, 13, 16, 0.9)" : "rgba(11, 13, 16, 0)",
          boxShadow: isScrolled ? "0 12px 30px rgba(0, 0, 0, 0.35)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent"
          initial={false}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link
              href="/"
              className="font-serif text-sm md:text-base tracking-[0.28em] text-white/90 hover:text-[var(--gold)] transition-colors"
            >
              GERT FOURIE
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm text-white/75 hover:text-white tracking-[0.08em] transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden text-white/90 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 rounded-md p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={26} strokeWidth={2.2} /> : <Menu size={26} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </motion.header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMenu} />
        <div
          className={`absolute top-0 bottom-0 right-0 w-72 bg-[#0B0D10] border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="font-serif text-white tracking-[0.2em] text-xs">GERT FOURIE</span>
            <button onClick={closeMenu} className="text-white/70 hover:text-white" type="button">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 text-sm tracking-[0.12em] hover:text-[var(--gold)] transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
