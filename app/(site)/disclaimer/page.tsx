import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function Disclaimer() {
  return (
    <div className="relative z-10 min-h-screen text-[var(--cream)]">
      <div className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        <h1 className="text-4xl font-serif mb-8">Disclaimer</h1>
        <p className="mb-6 text-white/70">
        Liberty Group Limited is an authorised financial service provider (No. 2409) and part of the Standard Bank Group. Gert
        Fourie is a representative of Liberty Group Limited.
        </p>
        <p className="mb-6 text-white/70">
        All content on this website is general information only and does not constitute financial advice, a recommendation or
        solicitation. Personalised advice is provided only after a full needs analysis. Past performance is not indicative of
        future results. Investments carry risk, including possible loss of capital.
        </p>
        <p className="mb-6 text-white/70">Always consult directly for individual circumstances.</p>

        <h2 className="text-2xl font-serif mt-12 mb-4 text-[var(--gold)]">Complaints Procedure</h2>
        <p className="mb-6 text-white/70">
        If you are unsatisfied with any advice or service provided, please raise your concern directly so it can be addressed
        promptly &ndash; contact details are available on the <a href="/contact" className="text-[var(--gold)] hover:underline">Contact page</a>.
        </p>
        <p className="mb-6 text-white/70">
        If a complaint cannot be resolved directly, it may be referred to the FAIS Ombud or the National Financial Ombud Scheme
        South Africa (NFO), which handle disputes between clients and financial services providers independently and free of
        charge.
        </p>
        <p className="text-white/70">
        FAIS Ombud &ndash; 012 762 5000 &middot; <a href="https://www.faisombud.co.za" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">www.faisombud.co.za</a>
        <br />
        National Financial Ombud Scheme SA &ndash; 0860 800 900 &middot; <a href="https://www.nfosa.co.za" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">www.nfosa.co.za</a>
        </p>
      </div>
    </div>
  );
}
