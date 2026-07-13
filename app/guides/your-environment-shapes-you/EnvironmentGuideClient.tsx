"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function EnvironmentGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={8}
      totalRules={10}
      titleLine1="Your Environment Is Doing"
      titleLine2="More Than You Think"
      subtitle="Napoleon Hill called it the “mastermind” effect: the people around you measurably shift your own behaviour."
      intro={[
        "Financial habits are rarely built in isolation. They're shaped, quietly and continuously, by the conversations, comparisons, and expectations of the people you spend the most time around — whether or not you notice it happening.",
      ]}
      sections={[
        {
          number: "01",
          title: "The Mastermind Effect",
          paragraphs: [
            "Napoleon Hill's research into successful individuals identified what he called the “mastermind” effect: surrounding yourself with people who think seriously about money, growth, and long-term goals measurably shifts your own financial behaviour.",
            "This works in both directions. An environment built around spending, status, and short-term comparison pulls your decisions the same way — often without a single explicit conversation about money ever happening.",
          ],
          practice:
            "Notice who you talk to about money. If those conversations are mostly about spending, seek out conversations about building.",
        },
        {
          number: "02",
          title: "Why Environment Beats Willpower",
          paragraphs: [
            "It's far easier to make good financial decisions when they're the default in your environment than to constantly resist a default that's working against you. This is one of the most underrated levers in personal finance, precisely because it doesn't feel like a financial decision at all.",
            "Social comparison is particularly powerful during periods of identity change — a new job, a new relationship, a new city. These are exactly the moments worth being deliberate about who you're absorbing financial cues from.",
          ],
          quote:
            "Environment isn't a minor factor — it's one of the strongest predictors of financial habits.",
          practice:
            "Identify one person whose financial habits you respect. Have one real conversation with them about how they think about money.",
        },
        {
          number: "03",
          title: "Building Your Own Mastermind",
          paragraphs: [
            "You don't need a formal group to benefit from this principle. A single trusted conversation partner — a partner, a mentor, an adviser — who takes long-term thinking seriously can shift the baseline of your own decisions considerably.",
            "This is also part of why working with an adviser helps beyond the technical advice itself: accountability creates social stakes, and knowing someone is tracking your progress engages the same social motivation that makes environment powerful in the first place — just redirected toward your benefit.",
          ],
          practice:
            "Schedule one recurring conversation — with an adviser, mentor, or accountability partner — specifically about your financial goals, not just your finances.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "You can build all the right systems and still get pulled off course by an environment working against you.",
        "Choosing your financial environment deliberately is as much a wealth-building decision as any budget or investment choice.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/financial-education-compounds"
      prevLabel="Rule 7 — Financial Education Compounds Too"
      nextHref="/guides/review-beats-avoidance"
      nextLabel="Rule 9 — Review Beats Avoidance"
    />
  )
}
