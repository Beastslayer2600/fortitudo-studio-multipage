import { Brain, Compass, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--greenDark)] via-[var(--greenDark)] to-[var(--green)] text-[var(--cream)] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center container px-6 max-w-5xl">
          <p className="text-lg md:text-xl mb-4 opacity-90 font-medium tracking-wide">
            Gert Fourie | Financial Advisor | Liberty Group (FSP 2409) | Pretoria
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            You work hard for your money.<br className="hidden md:block" /> Let's structure it to
            endure.
          </h1>

          <p className="text-xl md:text-3xl mb-12 font-light max-w-4xl mx-auto">
            Financial strategy for high-income professionals who value clarity, discipline, and long-term
            growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--gold)] text-[var(--greenDark)] px-10 py-5 rounded-xl text-lg font-medium hover:bg-[var(--gold)]/90 transition shadow-lg"
            >
              Schedule a Strategy Session
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-[var(--gold)] text-[var(--gold)] px-10 py-5 rounded-xl text-lg font-medium hover:bg-[var(--gold)]/10 transition"
            >
              Learn My Approach
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm md:text-base opacity-80">
            <div>Liberty Group FSP 2409</div>
            <div>Pretoria Based</div>
            <div>Discipline Over Emotion</div>
            <div>Structure Over Speculation</div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Who this is for
              </p>
              <h2 className="mt-2 font-serif text-3xl" style={{ color: "var(--green)" }}>
                For people who want calm, not complexity
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                You are not looking for more noise. You are looking for a plan you can trust.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {[
                "Professionals earning well but unsure if their strategy is optimal.",
                "Families wanting retirement certainty and fewer surprises.",
                "Business owners who want structure, not guesswork.",
              ].map((item) => (
                <div key={item} className="surface p-6">
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Liberty FSP 2409</span>
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Pretoria based</span>
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Fiduciary focus</span>
            <span className="px-3 py-2 rounded-full border border-[var(--gold)]">Personalised</span>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Clarity",
                text: "A plan you can understand and explain to your family.",
                icon: Compass,
              },
              {
                title: "Discipline",
                text: "A structure that reduces emotion and protects progress.",
                icon: ShieldCheck,
              },
              {
                title: "Confidence",
                text: "The quiet assurance that you are on the right path.",
                icon: Brain,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div key={title} className="surface p-6">
                <Icon className="h-6 w-6" style={{ color: "var(--gold)" }} />
                <h3 className="mt-4 font-serif text-xl" style={{ color: "var(--green)" }}>
                  {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
