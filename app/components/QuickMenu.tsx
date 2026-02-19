"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function QuickMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={menuRef} className="quick-menu" data-open={open ? "true" : "false"}>
      <button
        type="button"
        className="menu-button"
        aria-label="Quick access menu"
        aria-expanded={open}
        aria-controls="quick-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <div id="quick-menu-panel" className="quick-menu-panel" role="menu" aria-hidden={!open}>
        <nav className="menu-list">
          <Link href="/" className="menu-item" role="menuitem">
            Home
          </Link>
          <Link href="/contact" className="menu-item" role="menuitem">
            Contact
          </Link>
          <Link href="/guides" className="menu-item" role="menuitem">
            Guides & Videos
          </Link>
        </nav>
      </div>
    </div>
  );
}
