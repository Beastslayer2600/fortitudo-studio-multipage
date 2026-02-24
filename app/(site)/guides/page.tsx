import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & Videos",
};

export default function Guides() {
  return (
    <main className="bg-[#0B0D10] text-[var(--cream)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container max-w-4xl">
        <h1 className="font-serif text-3xl text-[var(--cream)]">
          Guides & Videos
        </h1>
        <p className="mt-4 text-white/70">
          Practical guides and short videos are on the way. This section will cover retirement clarity, investment discipline,
          protection planning, and more.
        </p>
        <div className="mt-8 surface p-6">
          <p className="text-sm text-white/70">
            Want to be notified when new content drops? Send a message via the contact page.
          </p>
        </div>
      </div>
    </main>
  );
}
