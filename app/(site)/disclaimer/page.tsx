import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl text-[var(--ink)]">
      <h1 className="text-4xl font-serif mb-8">Disclaimer</h1>
      <p className="mb-6">
        Liberty Group Limited is an Authorised Financial Services Provider (FSP 2409) in terms of the Financial Advisory and
        Intermediary Services Act 37 of 2002. Gert Fourie is a representative of Liberty Group Limited.
      </p>
      <p className="mb-6">
        All content on this website is general information only and does not constitute financial advice, a recommendation or
        solicitation. Personalised advice is provided only after a full needs analysis. Past performance is not indicative of
        future results. Investments carry risk, including possible loss of capital.
      </p>
      <p>Always consult directly for individual circumstances.</p>
    </div>
  );
}
