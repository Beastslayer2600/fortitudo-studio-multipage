export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[var(--cream)]">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-center tracking-tight">
          Gert Fourie
        </h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="mb-8 leading-relaxed text-lg">
            I am a financial advisor with Liberty Group (FSP 2409), based in Pretoria. My work is
            grounded in one principle: wealth is not built by reacting - it is built by structure,
            discipline, and long-term clarity.
          </p>

          <p className="mb-8 leading-relaxed text-lg">
            I advise high-income professionals, business owners, and families who understand that
            earning well is only the beginning. The real advantage comes from strategy - aligning
            income, assets, risk, and legacy into a system that works quietly and consistently over
            time.
          </p>

          <p className="mb-8 leading-relaxed text-lg">
            My role is not to predict markets or chase trends. It is to design financial
            architecture that creates stability, protects growth, and removes uncertainty from
            major decisions.
          </p>

          <p className="leading-relaxed text-lg font-medium">
            If you value clarity over complexity and stewardship over speculation, we will work
            well together.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-[var(--gold)] text-[#0a231a] px-12 py-5 rounded-xl text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg"
          >
            Schedule a Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
}
