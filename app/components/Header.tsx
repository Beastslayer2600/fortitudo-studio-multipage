import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
              GF
            </div>
            <div>
              <Link href="/" className="text-xl font-semibold text-white">
                Gert Fourie
              </Link>
              <p className="text-xs text-gray-400">
                Financial Advisor | Liberty Group (FSP 2409) | Pretoria
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/process" className="text-gray-300 hover:text-white transition">
              Process
            </Link>
            <Link href="/insights" className="text-gray-300 hover:text-white transition">
              Insights
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </nav>

          <button className="md:hidden text-white" type="button" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
