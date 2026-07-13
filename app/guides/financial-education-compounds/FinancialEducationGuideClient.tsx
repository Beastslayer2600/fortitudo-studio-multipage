"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function FinancialEducationGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={7}
      totalRules={10}
      titleLine1="Financial Education"
      titleLine2="Compounds Too"
      subtitle="Understanding debt, risk, and markets compounds over time, just like capital does."
      intro={[
        "Most financial advice focuses entirely on what to do with your money. Fewer people talk about the quieter compounding asset sitting underneath every decision — how well you actually understand the system you're operating in.",
      ]}
      sections={[
        {
          number: "01",
          title: "Why Understanding Is an Asset, Not a Nice-to-Have",
          paragraphs: [
            "Financial intelligence — understanding how debt, risk, markets, and tax actually work — compounds over time in the same way capital does. A small amount of understanding, applied consistently over years, produces decisions that are meaningfully better than the ones made on instinct alone.",
            "This is also the fastest way to reduce reliance on any single source of financial advice, including your own past assumptions. Understanding gives you the ability to ask better questions, not just follow instructions.",
          ],
          practice:
            "Set aside even 20 minutes a week to learn — an article, a book chapter, or a focused conversation with your adviser.",
        },
        {
          number: "02",
          title: "Where Continuous Learners Actually Win",
          paragraphs: [
            "Continuous learners are better equipped to recognise their own biases, manage emotion under pressure, and make sound decisions consistently rather than sporadically. This matters more than it sounds — most financial damage isn't caused by a single bad decision, it's caused by repeated small ones made without enough context to know better.",
            "It also compounds with the earlier rules in this series: understanding loss aversion (Rule 4) only helps if you can recognise it happening in real time, and that recognition is itself a form of financial education.",
          ],
          quote:
            "Continuous learning helps investors understand biases, manage emotions, and make smarter decisions — not occasionally, but as a default.",
          practice:
            "Pick one area you understand least well — tax, retirement structures, offshore investing — and commit to genuinely understanding it this quarter.",
        },
        {
          number: "03",
          title: "Learning With Structure, Not Just Curiosity",
          paragraphs: [
            "Undirected learning helps, but structured learning compounds faster. A short, regular conversation with someone who understands your specific situation turns generic information into applied knowledge — the kind you can actually act on with confidence.",
            "This doesn't mean you need to become an expert in everything. It means treating your own financial literacy as a long-term project worth investing time in, the same way you'd invest money.",
          ],
          practice:
            "Bring one specific question to your next conversation with your adviser, rather than a general check-in. Specific questions produce specific, usable understanding.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "Understanding your own finances is not a one-time task you complete and move past — it's an ongoing habit that pays a return for the rest of your life.",
        "Twenty minutes a week, repeated for years, adds up to genuine financial fluency.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/delayed-gratification"
      prevLabel="Rule 6 — Delayed Gratification"
      nextHref="/guides/your-environment-shapes-you"
      nextLabel="Rule 8 — Your Environment Shapes You"
    />
  )
}
