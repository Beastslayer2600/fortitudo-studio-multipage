import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="py-16 sm:py-24">
      <div className="container max-w-4xl text-center">
        <h1 className="font-serif text-4xl sm:text-5xl" style={{ color: "var(--green)" }}>
          About Gert Fourie
        </h1>
        <Image
          src="/headshot.jpg"
          alt="Gert Fourie"
          width={400}
          height={400}
          className="rounded-full mx-auto mb-8 shadow-lg mt-8"
          priority
        />
        <div className="space-y-4 text-neutral-700 leading-relaxed text-left sm:text-center">
          <p>
            I am a Financial Advisor at Liberty Group Limited (FSP 2409), based in Pretoria. My role is to guide
            professionals, families, and business owners toward steady, long-term financial decisions that feel clear
            and grounded.
          </p>
          <p>
            I help clients across Pretoria and Gauteng with retirement planning, investment discipline, protection
            strategies, and estate planning. The focus is always on structure and calm, not quick fixes.
          </p>
          <p>
            I do this work because money carries real anxiety. People are not just looking for products. They want to
            know they are going to be okay. My job is to replace uncertainty with a plan you can trust.
          </p>
          <p>
            I am committed to steady, client-first decisions that hold up over time. That means honest conversations,
            measured advice, and a long-term view.
          </p>
        </div>
        <div className="mt-8 max-w-2xl mx-auto text-left sm:text-center">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
            Key Focus Areas
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>Retirement clarity and income planning</li>
            <li>Investment discipline and long-term strategy</li>
            <li>Family protection and risk management</li>
            <li>Estate planning and legacy structure</li>
          </ul>
        </div>
        <div className="mt-10">
          <Link href="/contact" className="btn btn-primary">
            Ready to talk?
          </Link>
        </div>
      </div>
    </main>
  );
}
