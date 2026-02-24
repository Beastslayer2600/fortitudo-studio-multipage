import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0D10] text-[var(--cream)]">
      <div className="text-center px-6">
        <h1 className="text-5xl font-serif mb-6">Thank You</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Your message has been received. I will reply within 24-48 hours.
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
