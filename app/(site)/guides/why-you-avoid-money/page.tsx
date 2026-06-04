import type { Metadata } from "next";
import Link from "next/link";

const sections = [
  {
    num: "01",
    title: "Money isn't logical. It's emotional.",
    body: [
      "Most financial advice treats people like spreadsheets. Input income. Subtract expenses. Save the rest. It's clean, rational, and almost completely useless — because human beings are not clean or rational.",
      "Your relationship with money was formed long before you earned any. By watching your parents fight over bills. By the feeling of being left out because your family couldn't afford something. By the story you quietly told yourself about what kind of person you are.",
      "Until you understand your emotional wiring around money, no amount of budgeting advice will stick. This guide is about that wiring.",
    ],
    pullquote: "The numbers are simple. The person behind the numbers never is.",
    pullquoteAfter: 1,
  },
  {
    num: "02",
    title: "The shame loop — why silence is so comfortable.",
    body: [
      "Here's something nobody tells you: avoiding money conversations isn't laziness. It's a sophisticated defence mechanism.",
      "When your financial situation feels uncertain — or worse, behind where you think you should be — talking about it feels like issuing a verdict on your worth as a person. So you go quiet. You change the subject. You tell yourself you'll deal with it when you earn more.",
      "This is the shame loop. Shame creates silence. Silence creates avoidance. Avoidance creates more financial drift. More drift creates more shame.",
      "Breaking the loop doesn't require willpower. It requires recognising that your avoidance is protective — and choosing, consciously, to step toward the discomfort anyway.",
    ],
    pullquote: "Shame doesn't just make you feel bad about money. It makes you stop thinking about it entirely — which is exactly when the real damage happens.",
    pullquoteAfter: 2,
  },
  {
    num: "03",
    title: "Your future self is a stranger — and you're stealing from them.",
    body: [
      "Psychologists call it temporal discounting: the further away something is, the less real it feels. Your brain experiences your 60-year-old self the same way it experiences a stranger — as someone vague and distant, whose problems are not urgent.",
      "This is why retirement feels abstract when you're 25. It's not that you don't care. It's that your brain is wired to prioritise now over later — and every financial system you interact with exploits that wiring.",
      "The fix is not willpower. It's making the future self feel more real. What does your life look like at 60 if you start now? What does it look like if you wait another five years? Naming those realities — concretely — changes how your brain weighs the decision.",
    ],
    pullquote: null,
    pullquoteAfter: null,
  },
  {
    num: "04",
    title: "Spending as identity — who are you buying for?",
    body: [
      "Most people think they spend money on things. They don't. They spend money on identity signals — messages to themselves and others about who they are and where they belong.",
      "The car. The apartment. The clothes. The restaurants. These aren't just purchases. They're answers to the question: am I keeping up?",
      "There's nothing wrong with wanting nice things. But when spending becomes a way of managing anxiety about status and belonging, it silently competes with every financial goal you say you have.",
    ],
    pullquote: "The question isn't whether you can afford it. It's whether you're buying the thing — or buying the feeling of being okay.",
    pullquoteAfter: 2,
  },
  {
    num: "05",
    title: "The avoidance-regret cycle — and how to exit it.",
    body: [
      "Here's the pattern most people live in: they avoid the conversation, the decision, the financial review. The avoidance feels like relief in the moment. Then a month or a year passes and they look back and feel regret — not just about the money, but about lost time.",
      "Regret is a different kind of pain than discomfort. Discomfort is short. Regret compounds — just like interest does, except in the wrong direction.",
      "The single most powerful thing you can do financially is not to pick the perfect product or find the best rate. It's to start — imperfectly, with incomplete information, earlier than feels comfortable. Because the cost of waiting is almost always higher than the cost of being wrong.",
    ],
    pullquote: null,
    pullquoteAfter: null,
  },
] as const;

export const metadata: Metadata = {
  title: "Why You Avoid Money. And What It's Actually Costing You. | Gert Fourie",
  description:
    "The psychology behind why smart people stay financially stuck — shame loops, identity spending, temporal discounting, and how to finally change it.",
};

export default function WhyYouAvoidMoneyPage() {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 text-[var(--cream)] sm:pt-28 sm:pb-24">
      <article className="container max-w-4xl">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/guides"
            className="text-sm uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[var(--gold)]"
          >
            Guides
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Guide</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Why You Avoid Money.<br />And What It&rsquo;s Actually Costing You.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            The psychology behind why smart people stay financially stuck — and how to finally change it.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">Before we start</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            This isn&rsquo;t a budgeting guide. There are thousands of those — and you&rsquo;ve probably read a few.
          </p>
          <p className="mt-4 text-base leading-7 text-white/70">
            This is about something deeper. The reason the budgeting guide didn&rsquo;t work. The reason you
            know what you should be doing and still aren&rsquo;t doing it. If you&rsquo;ve ever felt shame,
            avoidance, or paralysis around money — this is for you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">
          {sections.map((section) => (
            <section key={section.num} className="space-y-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">{section.num}</p>
              <h2 className="font-serif text-3xl text-[var(--gold)]">{section.title}</h2>
              {section.body.map((paragraph, i) => (
                <div key={i}>
                  <p className="text-lg leading-8 text-white/75">{paragraph}</p>
                  {section.pullquote && section.pullquoteAfter === i && (
                    <blockquote className="my-6 border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
                      &ldquo;{section.pullquote}&rdquo;
                    </blockquote>
                  )}
                </div>
              ))}
            </section>
          ))}

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Ready to have the conversation?</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Understanding your psychology is the first step. The second is sitting down with someone
              who will be straight with you — without the jargon, the pressure, or the script.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
            >
              Book a free consultation
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
