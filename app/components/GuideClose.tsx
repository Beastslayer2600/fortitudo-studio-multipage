import Link from "next/link";

const WHATSAPP_NUMBER = "27773866299";

interface GuideCloseProps {
  /**
   * The guide-specific sentence that gets appended to the pre-filled WhatsApp
   * message, e.g. "and I think I have gaps and overlaps. Can you take a look?"
   */
  prefill: string;
  /** Visual system to match — "site" (gold/cream/surface) or "dark" (zinc/#c9a84c). */
  variant?: "site" | "dark";
}

function waLink(prefill: string) {
  const text = `Hi Gert. ${prefill}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Shared closing module dropped at the foot of every guide. Turns a passive
 * "get in touch if you'd like" close into two specific, low-friction actions:
 * the Income Interruption Test, and a pre-written WhatsApp message.
 */
export default function GuideClose({ prefill, variant = "site" }: GuideCloseProps) {
  if (variant === "dark") {
    return (
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm text-zinc-500">
            Most people finish this and do nothing, because there is no obvious next step.
          </p>
          <Link
            href="/guides/income-interruption-test"
            className="mt-6 inline-block bg-[#c9a84c] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#0a0a0a] transition-colors duration-300 hover:bg-[#e0bc6a]"
          >
            Take the ninety-second Income Interruption Test
          </Link>
          <div className="mt-6">
            <a
              href={waLink(prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 underline underline-offset-4 transition-colors hover:text-[#c9a84c]"
            >
              Or message Gert on WhatsApp directly →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl surface p-6 text-center sm:p-8">
      <p className="text-sm text-white/60">
        Most people finish this and do nothing, because there is no obvious next step.
      </p>
      <Link
        href="/guides/income-interruption-test"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
      >
        Take the ninety-second Income Interruption Test
      </Link>
      <div className="mt-4">
        <a
          href={waLink(prefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--gold)] underline underline-offset-2 transition-colors hover:text-white"
        >
          Or message Gert on WhatsApp directly →
        </a>
      </div>
    </div>
  );
}
