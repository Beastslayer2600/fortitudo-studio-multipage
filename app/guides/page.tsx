import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & Videos",
};

export default function Guides() {
  return (
    <main className="py-16 sm:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-serif text-3xl" style={{ color: "var(--green)" }}>
          Guides & Videos
        </h1>
        <p className="mt-4 text-neutral-700">
          Practical guides and short videos are on the way. This section will cover retirement clarity, investment discipline,
          protection planning, and more.
        </p>
        <div className="mt-8 surface p-6">
          <p className="text-sm text-neutral-700">
            Want to be notified when new content drops? Send a message via the contact page.
          </p>
        </div>
      </div>
    </main>
  );
}
