import type { Metadata } from "next";
import Link from "next/link";
import { RESPONSE_TIME, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Message received",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center text-[var(--cream)]">
      <div className="text-center px-6">
        <h1 className="text-5xl font-serif mb-6">Thank You</h1>
        <p className="text-xl mb-4 max-w-2xl mx-auto">
          Your message has been received. I will reply within {RESPONSE_TIME}.
        </p>
        <p className="mb-10 max-w-2xl mx-auto text-white/70">
          Need me sooner?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--gold)]">
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[#0a231a] px-10 py-4 rounded-xl text-lg font-medium hover:bg-white transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
