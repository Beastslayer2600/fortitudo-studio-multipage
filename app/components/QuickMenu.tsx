"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function QuickMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/guides", label: "Guides" },
    { href: "/process", label: "Process" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border border-[var(--gold)]/35 bg-black/25 px-3 py-2 text-sm text-[var(--cream)] transition-colors hover:border-[var(--gold)] hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/45"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="quick-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="hidden sm:inline text-xs uppercase tracking-[0.12em]">Menu</span>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div
        id="quick-menu-panel"
        className={`absolute right-0 top-[calc(100%+0.65rem)] z-50 w-[min(18rem,calc(100vw-2rem))] origin-top-right rounded-2xl border border-[var(--gold)]/30 bg-[#0b0f0d]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-md transition-all ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        role="menu"
        aria-hidden={!open}
      >
        <nav className="grid gap-1">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm tracking-[0.08em] transition-colors ${
                  active
                    ? "bg-[var(--gold)]/15 text-[var(--gold)]"
                    : "text-[var(--cream)]/85 hover:bg-white/5 hover:text-[var(--gold)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
