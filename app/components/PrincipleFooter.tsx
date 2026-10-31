"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { principleForPath, principleMeta } from "@/lib/principles";

// One quiet line under each guide and insight: which principle it belongs to,
// linking back to that row on the Guides page. Renders nothing elsewhere.
export default function PrincipleFooter() {
  const path = usePathname() ?? "";
  const principle = principleForPath(path);
  if (!principle) return null;
  const meta = principleMeta(principle);

  return (
    <div className="relative z-10 border-t border-[var(--gold)]/15 bg-[#0b0d10]/92 px-6 py-8 text-center">
      <Link
        href={`/guides#${meta.id}`}
        className="text-sm text-white/70 transition-colors hover:text-[var(--gold)]"
      >
        Part of <span className="text-[var(--gold)]">{meta.name}</span>: {meta.short} →
      </Link>
    </div>
  );
}
