import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function Disclaimer() {
  return (
    <div className="bg-[#0B0D10] text-[var(--cream)]">
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
        <p className="text-white/70">Always consult directly for individual circumstances.</p>
      </div>
    </div>
  );
}
