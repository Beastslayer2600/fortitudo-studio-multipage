import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact",  label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(201,168,76,0.12)] bg-[#07090F]">
      <div className="gold-rule" />

      <div className="site-container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            {/* [REPLACE: Advisor name / brand] */}
            <p className="font-heading text-lg tracking-[0.16em] text-[#EAE4D6]">RYNO GREYLING</p>
            <p className="text-sm leading-relaxed text-[rgba(234,228,214,0.5)]">
              {/* [REPLACE: one-line value proposition] */}
              Strategic wealth management for professionals who value clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[rgba(234,228,214,0.55)] transition-colors hover:text-[#C9A84C]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="section-label mb-4">Connect</p>
            <div className="space-y-2 text-sm text-[rgba(234,228,214,0.55)]">
              {/* [REPLACE: phone number] */}
              <p>
                <a href="tel:+27000000000" className="hover:text-[#C9A84C] transition-colors">
                  +27 00 000 0000
                </a>
              </p>
              {/* [REPLACE: email address] */}
              <p>
                <a href="mailto:advisor@example.com" className="hover:text-[#C9A84C] transition-colors">
                  advisor@example.com
                </a>
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              {/* [REPLACE: LinkedIn URL] */}
              <a
                href="https://linkedin.com/in/replace-me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(201,168,76,0.2)] text-[rgba(234,228,214,0.6)] transition-all hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                <Linkedin size={16} strokeWidth={1.8} />
              </a>
              {/* [REPLACE: Instagram URL] */}
              <a
                href="https://instagram.com/replace-me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(201,168,76,0.2)] text-[rgba(234,228,214,0.6)] transition-all hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                <Instagram size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[rgba(201,168,76,0.1)] pt-8">
          <p className="text-xs leading-relaxed text-[rgba(234,228,214,0.38)]">
            {/* [REPLACE: Full compliance disclaimer with FSP number] */}
            Ryno Greyling is an authorised representative of Liberty Group Limited (FSP 2409) in terms of the
            Financial Advisory and Intermediary Services Act 37 of 2002. All content on this website is general
            information only and does not constitute financial advice. Personalised advice is provided only after
            a full needs analysis. Past performance is not indicative of future results. Investments carry risk,
            including possible loss of capital.
          </p>
          <p className="mt-4 text-xs text-[rgba(234,228,214,0.28)]">
            &copy; {year} Ryno Greyling Financial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
