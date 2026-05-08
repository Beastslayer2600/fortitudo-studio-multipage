"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const isHome    = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = !isHome || scrolled;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{
          backgroundColor: solid ? "rgba(7,9,15,0.96)" : "rgba(7,9,15,0)",
          borderBottomColor: solid ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ borderBottomWidth: "1px", borderBottomStyle: "solid" }}
      >
        {/* Blur only when solid */}
        <div className={`transition-all duration-350 ${solid ? "backdrop-blur-md" : ""}`}>
          <div className="site-container flex h-16 items-center justify-between md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-base tracking-[0.18em] text-[#EAE4D6] transition-colors hover:text-[#C9A84C] md:text-lg"
            >
              {/* [REPLACE: Advisor name / brand] */}
              RYNO GREYLING
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`group relative text-sm tracking-[0.06em] transition-colors ${
                      active ? "text-[#C9A84C]" : "text-[rgba(234,228,214,0.75)] hover:text-[#EAE4D6]"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
              <Link href="/contact" className="btn btn-primary ml-2 py-2.5 px-5 text-sm">
                Book a Consultation
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#EAE4D6] transition-colors hover:text-[#C9A84C] md:hidden"
            >
              {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-[#0B0F1E] border-l border-[rgba(201,168,76,0.15)] md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-[rgba(201,168,76,0.12)] px-6 py-5">
                <span className="font-heading text-sm tracking-[0.18em] text-[#EAE4D6]">
                  RYNO GREYLING
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-[rgba(234,228,214,0.6)] hover:text-[#EAE4D6]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                {[{ href: "/", label: "Home" }, ...navLinks].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm tracking-[0.06em] transition-colors ${
                      pathname === href
                        ? "bg-[rgba(201,168,76,0.12)] text-[#C9A84C]"
                        : "text-[rgba(234,228,214,0.75)] hover:bg-white/5 hover:text-[#EAE4D6]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* CTA at bottom */}
              <div className="border-t border-[rgba(201,168,76,0.12)] px-6 py-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
