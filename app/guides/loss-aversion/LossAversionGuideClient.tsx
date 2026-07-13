"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function LossAversionGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={4}
      totalRules={10}
      titleLine1="Loss Aversion Runs the Show"
      titleLine2="Unless You Notice It"
      subtitle="Nobel-winning research found we feel losses almost twice as intensely as equivalent gains."
      intro={[
        "Most money problems aren't maths problems. They're behaviour problems — which is exactly why financial education alone often isn't enough. One of the most consistent behaviour problems has a name, and understanding it changes how you read your own reactions.",
      ]}
      sections={[
        {
          number: "01",
          title: "The Research Behind the Bias",
          paragraphs: [
            "Daniel Kahneman and Amos Tversky's research on prospect theory found that people feel the pain of a loss roughly twice as intensely as the pleasure of an equivalent gain. Losing R10,000 hurts about twice as much as gaining R10,000 feels good.",
            "This isn't a flaw unique to inexperienced investors. It's a default setting in how the human brain evaluates risk — and it shapes decisions long before conscious reasoning gets involved.",
          ],
          practice:
            "Next time a decision feels urgent because of fear of loss, name it out loud: “this might be loss aversion talking.” Naming it creates a half-second of space to think.",
        },
        {
          number: "02",
          title: "Where This Shows Up in Real Decisions",
          paragraphs: [
            "Left unmanaged, loss aversion drives short-term, fear-based decisions — panic-selling during a downturn, avoiding necessary investment risk entirely, or over-insuring against remote possibilities while under-preparing for the real ones.",
            "It also works in reverse: the fear of a visible loss (a bad month on a statement) can outweigh the far larger, quieter cost of doing nothing — inflation eroding cash sitting idle, or years lost to indecision.",
          ],
          quote:
            "The emotional brain beats the logical brain more often than we'd like to admit — especially under time pressure.",
          practice:
            "Before reacting to market news or a financial scare, separate the emotional response from the actual data. A second opinion helps.",
        },
        {
          number: "03",
          title: "Designing Around the Bias, Not Fighting It",
          paragraphs: [
            "You can't switch loss aversion off — it's wired in. What you can do is design your financial decisions so the bias has less room to cause damage: automation (Rule 3) removes emotional in-the-moment choices, and a written plan (Rule 10) gives you something calmer to refer back to when fear spikes.",
            "The goal isn't to feel nothing when markets move. It's to have a system in place that doesn't require you to feel nothing in order to make a sound decision.",
          ],
          practice:
            "Before any major financial decision made under stress, sleep on it for at least 48 hours. Loss aversion is loudest in the moment and quieter the next day.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "Loss aversion isn't a character flaw — it's a predictable pattern you can plan around once you can see it.",
        "The people who navigate this well aren't immune to fear. They've just built systems that don't rely on being fearless.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/automate-the-discipline"
      prevLabel="Rule 3 — Automate the Discipline"
      nextHref="/guides/the-cost-of-waiting"
      nextLabel="Rule 5 — The Cost of Waiting"
    />
  )
}
