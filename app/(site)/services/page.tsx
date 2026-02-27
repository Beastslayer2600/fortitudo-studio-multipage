const services = [
  {
    title: "Retirement Clarity",
    description:
      "Turn the question 'Will I have enough?' into a clear income plan with steady milestones.",
  },
  {
    title: "Investment Discipline",
    description:
      "A strategy that reduces emotional decision-making when markets feel uncertain.",
  },
  {
    title: "Protection That Lasts",
    description:
      "Insurance planning that removes the fear of disruption and protects your family.",
  },
  {
    title: "Legacy & Estate Planning",
    description:
      "Structure your estate so the people you love are cared for and confusion is avoided.",
  },
  {
    title: "Tax-Efficient Structure",
    description:
      "Use allowances and smart structuring so more of your money stays working for you.",
  },
  {
    title: "Risk Management",
    description:
      "Identify vulnerabilities early and build safeguards around what matters most.",
  },
];

export default function Services() {
  return (
    <main className="relative z-10 bg-[#0B0D10]/70 backdrop-blur-[2px] min-h-screen text-[var(--cream)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container max-w-5xl">
        <h1 className="font-serif text-3xl text-[var(--cream)]">
          How I Help
        </h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Practical, fear-reducing planning under Liberty Group Limited (FSP 2409).
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="surface p-6">
              <h2 className="font-serif text-xl text-[var(--gold)]">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60">
          All services are provided under Liberty Group Limited (FSP 2409) after a full needs analysis.
        </p>
      </div>
    </main>
  );
}
