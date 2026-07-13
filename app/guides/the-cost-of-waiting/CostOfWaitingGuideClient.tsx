"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function CostOfWaitingGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={5}
      totalRules={10}
      titleLine1="Time Is the One Input"
      titleLine2="You Can't Buy Back"
      subtitle="Waiting for the “right time” is usually the most expensive decision on the table."
      intro={[
        "Of all the variables in building wealth — income, discipline, market returns — only one is completely non-negotiable and impossible to recover once it's spent. That variable is time, and most people spend it waiting.",
      ]}
      sections={[
        {
          number: "01",
          title: "Why Starting Early Beats Starting Big",
          paragraphs: [
            "Compound growth rewards starters, not perfectionists. Money invested in your twenties can outgrow a larger amount invested a decade later, purely because it had longer to compound — the mathematics are unforgiving in a genuinely good way.",
            "This means the decision to delay isn't neutral. It's an active choice with a real, calculable cost, even though it doesn't feel like a decision at all in the moment — it just feels like waiting.",
          ],
          practice:
            "Start with whatever amount is realistic today, even if it feels small. Increase it later — but start now.",
        },
        {
          number: "02",
          title: 'What "Waiting for the Right Time" Actually Costs',
          paragraphs: [
            "There's rarely a moment that feels obviously right. Markets feel too high or too uncertain. Income feels not quite settled yet. There's always a plausible reason to wait one more quarter, one more year.",
            "The cost of that waiting is invisible because it never shows up as a loss on a statement — it shows up only as a smaller number, decades from now, that you'll never get to compare against the version where you started earlier.",
          ],
          quote:
            "The most expensive financial decision is usually “I'll start when it's the right time.”",
          practice:
            "If you're waiting for a specific trigger to start investing — a raise, a windfall, more certainty — pick a date instead. Start then, regardless.",
        },
        {
          number: "03",
          title: "Making Time Work for You, Not Against You",
          paragraphs: [
            "Once money is invested, time does most of the remaining work with very little further input required from you. This is different from almost everything else in life, where more effort usually means more result — here, patience is the effort.",
            "The practical implication is simple: the earliest, smallest contribution you can make today is worth more than a larger, more comfortable contribution you're planning to make later.",
          ],
          practice:
            "If you have any lump sum sitting in a low-interest account waiting for the “right moment,” treat today as that moment.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "Every other rule in this series compounds better the earlier it's applied.",
        "You will never again have as much time ahead of you as you do right now. That's not motivational language — it's just the mathematics of compounding.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/loss-aversion"
      prevLabel="Rule 4 — Loss Aversion"
      nextHref="/guides/delayed-gratification"
      nextLabel="Rule 6 — Delayed Gratification"
    />
  )
}
