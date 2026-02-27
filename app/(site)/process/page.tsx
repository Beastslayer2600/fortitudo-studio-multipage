export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Strategic Clarity Session",
      description:
        "We begin with a focused conversation to understand your current position, goals, concerns, and timeline. No products or pitches - just clarity on where you stand and what matters most.",
    },
    {
      number: "02",
      title: "Financial Analysis & Alignment",
      description:
        "A thorough review of your income, assets, liabilities, risk exposure, tax position, and existing plans. We identify gaps, inefficiencies, and opportunities - building a complete picture.",
    },
    {
      number: "03",
      title: "Structured Plan Design",
      description:
        "We create a tailored, disciplined strategy that aligns your resources with your long-term objectives. Emphasis is on simplicity, resilience, and tax efficiency - not complexity or speculation.",
    },
    {
      number: "04",
      title: "Ongoing Review & Optimization",
      description:
        "Regular check-ins (quarterly or as needed) to monitor progress, adjust for life changes or market conditions, and ensure the plan remains effective. Discipline is maintained through structure, not emotion.",
    },
  ];

  return (
    <div className="relative z-10 bg-[#0B0D10]/60 backdrop-blur-[2px] min-h-screen text-[var(--cream)]">
      <div className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            A Structured Approach
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            When clients see clear process, uncertainty fades. This is how we turn financial
            anxiety into confidence.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                <span className="text-4xl md:text-5xl font-serif text-[var(--gold)]">
                  {step.number}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[var(--gold)]">
                  {step.title}
                </h2>
                <p className="text-lg leading-relaxed opacity-90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block bg-[var(--gold)] text-[#0B0D10] px-12 py-5 rounded-xl text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg"
          >
            Begin Your Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
}

