"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function DelayedGratificationGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={6}
      totalRules={10}
      titleLine1="Delayed Gratification Is"
      titleLine2="Trained, Not Inherited"
      subtitle="The benefit of saving is delayed. The benefit of spending is instant. That's not a character flaw — it's how the brain is built."
      intro={[
        "If self-control were the whole story, financial advice would be simple: try harder. It isn't, and it doesn't work that way. What actually separates consistent savers from everyone else is a trained skill, not a personality trait they were born with.",
      ]}
      sections={[
        {
          number: "01",
          title: "Why This Feels Harder Than It Should",
          paragraphs: [
            "Humans are wired for immediate reward. Spending produces a fast, tangible payoff; saving produces a slow, invisible one. Every app, retail experience, and payment system has been designed to make spending as frictionless as possible — which means the odds are structurally tilted against patience.",
            "This is why willpower alone is such an unreliable strategy. You're not just competing with your own discipline — you're competing with systems specifically engineered to override it.",
          ],
          practice:
            "When an impulse purchase arises, apply a 48-hour rule before buying. Most urges fade well before the 48 hours are up.",
        },
        {
          number: "02",
          title: "What the Research Actually Shows",
          paragraphs: [
            "Research on high-net-worth individuals points to a “saver identity” — a learned habit of choosing long-term goals over short-term consumption, built through repetition rather than raw discipline.",
            "Interestingly, later research on delayed gratification found that people who don't wait for a larger future reward aren't always lacking willpower — sometimes they're responding rationally to an environment that feels unreliable. Trust in the future changes behaviour. Building that trust, through evidence that your plan is working, reinforces the skill over time.",
          ],
          quote:
            "Delayed gratification isn't something you're born with. It's a skill people train — usually with small, repeatable rules.",
          practice:
            "Remove saved card details from online stores. Adding even small friction to spending gives your slower, rational thinking time to catch up.",
        },
        {
          number: "03",
          title: "Training the Skill Deliberately",
          paragraphs: [
            "Like any trained skill, delayed gratification improves with small, repeated reps rather than one dramatic act of willpower. The 48-hour rule, automated saving (Rule 3), and friction on spending all serve the same purpose — they buy your rational mind enough time to weigh in.",
            "Evidence of progress helps too. Watching a savings or investment number grow, even slowly, gives your brain a concrete, visible reward to associate with the habit — closing some of the gap between the immediate pleasure of spending and the delayed pleasure of building.",
          ],
          practice:
            "Track your net worth or savings balance monthly. Watching the number move is what makes the delayed reward start to feel real.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "You don't need to become a fundamentally more disciplined person. You need small, repeatable systems that make patience the path of least resistance.",
        "That's a skill anyone can build — it just takes deliberate repetition, not raw willpower.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/the-cost-of-waiting"
      prevLabel="Rule 5 — The Cost of Waiting"
      nextHref="/guides/financial-education-compounds"
      nextLabel="Rule 7 — Financial Education Compounds Too"
    />
  )
}
