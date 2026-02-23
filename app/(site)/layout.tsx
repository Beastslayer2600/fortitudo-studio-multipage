import Link from "next/link";
import QuickMenu from "../components/QuickMenu";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--gold)]/30 bg-[var(--cream)]">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-xl" style={{ color: "var(--green)" }}>
            Gert Fourie
          </Link>
          <QuickMenu />
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="py-10 bg-[var(--greenDark)] text-[var(--cream)] text-center text-sm border-t border-[var(--gold)]/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="mb-3 font-medium">
            &copy; {new Date().getFullYear()} Gert Fourie | Financial Advisor &ndash; Liberty
            Group Limited (FSP 2409) | Pretoria
          </p>
          <p className="max-w-4xl mx-auto leading-relaxed opacity-90">
            Liberty Group Limited is an Authorised Financial Services Provider (FSP 2409) in
            terms of the Financial Advisory and Intermediary Services Act 37 of 2002. Gert
            Fourie is a representative of Liberty Group Limited. All content on
            fortitudostudios.site is general information only and does not constitute
            financial advice, a recommendation or solicitation. Personalised advice is
            provided only after a full needs analysis. Past performance is not indicative of
            future results. Investments carry risk, including possible loss of capital.
          </p>
          <div className="mt-6 text-xs space-x-4">
            <a href="/disclaimer" className="hover:text-[var(--gold)] hover:underline">
              Disclaimer
            </a>
            <span aria-hidden="true">&bull;</span>
            <a href="/privacy" className="hover:text-[var(--gold)] hover:underline">
              Privacy Policy (POPIA)
            </a>
            <span aria-hidden="true">&bull;</span>
            <a href="/contact" className="hover:text-[var(--gold)] hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
