import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 bg-[#0B0D10]/70 backdrop-blur-[2px] min-h-screen text-[var(--cream)]">
      <div className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        <h1 className="text-4xl font-serif mb-8">Privacy Policy (POPIA)</h1>
        <p className="mb-6 text-white/70">
        We respect your privacy and are committed to protecting your personal information in accordance with the Protection of
        Personal Information Act, 4 of 2013 (POPIA).
        </p>
        <h2 className="text-2xl font-serif mt-8 mb-4">Information We Collect</h2>
        <p className="mb-6 text-white/70">
        When you use our contact form, we may collect your name, email address, phone number, and the contents of your message.
        </p>
        <h2 className="text-2xl font-serif mt-8 mb-4">Purpose of Collection</h2>
        <p className="mb-6 text-white/70">
        We use this information to respond to enquiries, provide requested information, and book consultations where applicable.
        </p>
        <h2 className="text-2xl font-serif mt-8 mb-4">Sharing of Data</h2>
        <p className="mb-6 text-white/70">
        We do not sell, rent, or trade your personal information. We only share data when required by law or to comply with a
        legal obligation.
        </p>
        <h2 className="text-2xl font-serif mt-8 mb-4">Your Rights</h2>
        <p className="mb-6 text-white/70">
        You have the right to request access to your personal information, to request correction or deletion, and to object to
        the processing of your data in certain circumstances.
        </p>
        <h2 className="text-2xl font-serif mt-8 mb-4">Contact</h2>
        <p className="text-white/70">
          For any privacy-related questions or requests, please contact us at gert.fourie@liblink.co.za.
        </p>
      </div>
    </div>
  );
}
