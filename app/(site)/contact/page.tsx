import type { Metadata } from "next";
import { Clock, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

// [REPLACE: SEO metadata]
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Ryno Greyling. Reach out to discuss your financial goals — first meeting is obligation-free.",
};

export default function ContactPage() {
  return (
    <div className="text-[#EAE4D6]">
      {/* Hero bar */}
      <div className="relative border-b border-[rgba(201,168,76,0.12)] pt-28 pb-20 px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0, transparent 88px, rgba(201,168,76,1) 88px, rgba(201,168,76,1) 90px)",
            backgroundSize: "180px 180px",
          }}
        />
        <div className="site-container relative">
          <p className="section-label mb-4">Contact</p>
          <h1 className="font-heading text-4xl font-bold text-[#EAE4D6] md:text-5xl">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-4 max-w-xl text-[rgba(234,228,214,0.65)]">
            Your first consultation is obligation-free. Come with questions — leave with clarity.
          </p>
        </div>
      </div>

      {/* Form + Info */}
      <section className="py-20 px-6">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[1fr_400px]">

            {/* Contact form */}
            <div>
              <p className="section-label mb-6">Send a message</p>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <aside className="space-y-8">
              {/* Contact details */}
              <div className="surface p-7 space-y-5">
                <p className="section-label mb-2">Contact Details</p>

                <div className="flex items-start gap-3 text-sm">
                  <Phone size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" strokeWidth={1.7} />
                  <div>
                    <p className="text-xs text-[rgba(234,228,214,0.45)] mb-1">Phone</p>
                    {/* [REPLACE: Phone number] */}
                    <a
                      href="tel:+27000000000"
                      className="text-[rgba(234,228,214,0.8)] hover:text-[#C9A84C] transition-colors"
                    >
                      +27 00 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" strokeWidth={1.7} />
                  <div>
                    <p className="text-xs text-[rgba(234,228,214,0.45)] mb-1">Email</p>
                    {/* [REPLACE: Email address] */}
                    <a
                      href="mailto:advisor@example.com"
                      className="text-[rgba(234,228,214,0.8)] hover:text-[#C9A84C] transition-colors"
                    >
                      advisor@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" strokeWidth={1.7} />
                  <div>
                    <p className="text-xs text-[rgba(234,228,214,0.45)] mb-1">Location</p>
                    {/* [REPLACE: City / area] */}
                    <p className="text-[rgba(234,228,214,0.8)]">Pretoria, Gauteng</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" strokeWidth={1.7} />
                  <div>
                    <p className="text-xs text-[rgba(234,228,214,0.45)] mb-1">Office Hours</p>
                    {/* [REPLACE: Office hours] */}
                    <p className="text-[rgba(234,228,214,0.8)]">Monday – Friday</p>
                    <p className="text-[rgba(234,228,214,0.5)]">08:00 – 17:00</p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="surface p-7 space-y-3">
                <p className="section-label mb-3">What to expect</p>
                {[
                  "A focused, judgment-free conversation",
                  "No product pitches in the first meeting",
                  "Clear next steps before we end the call",
                  "Response within 24–48 hours",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-[rgba(234,228,214,0.65)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A84C] opacity-70" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Compliance note */}
              <p className="text-xs leading-relaxed text-[rgba(234,228,214,0.3)]">
                {/* [REPLACE: Full compliance line] */}
                Ryno Greyling is an authorised representative of Liberty Group Limited (FSP 2409). All information
                shared is confidential and protected under POPIA.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
