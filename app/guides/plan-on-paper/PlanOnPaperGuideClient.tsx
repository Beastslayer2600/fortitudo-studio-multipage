"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function PlanOnPaperGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={10}
      totalRules={10}
      titleLine1="A Plan on Paper Beats"
      titleLine2="a Good Intention"
      subtitle="“I should sort out my finances” isn't a plan. A number, a timeline, and a next step — written down — is."
      intro={[
        "Nine principles in, you have a purpose, a way of classifying decisions, an automated system, an awareness of your own biases, a respect for time, a trained patience, a habit of learning, a chosen environment, and a review rhythm. The tenth principle is what ties all of it into something you can actually execute.",
      ]}
      sections={[
        {
          number: "01",
          title: "Why Intentions Quietly Fail",
          paragraphs: [
            "Good intentions rarely survive contact with real life. They're vulnerable to busy weeks, competing priorities, and the simple fact that an unwritten goal is easy to postpone without ever consciously deciding to abandon it.",
            "A written plan doesn't have that vulnerability. It exists whether or not you're thinking about it that day, and it's specific enough to act as a checkpoint rather than a vague aspiration.",
          ],
          practice:
            "Put your goal, your timeline, and your next concrete step in writing — today, even in rough form.",
        },
        {
          number: "02",
          title: "What a Working Plan Actually Contains",
          paragraphs: [
            "Organised plans consistently outperform vague ambition, because they turn “I should sort out my finances” into a specific sequence of decisions you can actually execute — an amount, a date, an account, a review point.",
            "It doesn't need to be complex to work. The value comes from specificity and from having something concrete to measure against, not from the sophistication of the document itself.",
          ],
          quote:
            "A plan turns “I should sort out my finances” into a sequence of decisions you can actually execute.",
          practice:
            "Review and adjust your written plan with your adviser whenever something material changes — a new job, a new goal, a new life stage.",
        },
        {
          number: "03",
          title: "Bringing the Whole Series Together",
          paragraphs: [
            "Your plan is where the other nine rules meet. It holds the specific purpose from Rule 1, gets funded by the automated discipline from Rule 3, benefits from the patience trained in Rule 6, and gets checked against reality by the review habit in Rule 9.",
            "None of these principles need to be perfect individually. Applied together, consistently, over time, they compound into something far more durable than any single good financial decision ever could.",
          ],
          practice:
            "Take everything from this series and write one page: your purpose, your number, your automated system, and your next review date. That page is your plan.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "A wealthy mindset isn't built in a single decision — it's built in the accumulation of many small, deliberate ones, repeated over time.",
        "You now have all ten. The next step is simply writing them down and starting.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/review-beats-avoidance"
      prevLabel="Rule 9 — Review Beats Avoidance"
    />
  )
}
