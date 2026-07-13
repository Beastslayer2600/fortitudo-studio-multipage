'use client'

import RuleGuideLayout from '../../components/RuleGuideLayout'

export default function DefinePurposeGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={1}
      totalRules={10}
      titleLine1="Define a Specific"
      titleLine2="Purpose for Your Money"
      subtitle="Vague hopes rarely survive a setback. A number and a date change everything."
      intro={[
        "You know you should have a financial goal. Most people do, in some vague form — “be comfortable,” “retire well,” “not worry about money.” The problem isn't that these hopes are wrong. It's that they're too soft to survive contact with a bad month.",
      ]}
      sections={[
        {
          number: '01',
          title: "Why Vague Goals Don't Survive Setbacks",
          paragraphs: [
            "Research into hundreds of high-achieving individuals found the same pattern again and again: a clearly defined goal, with a number and a timeframe attached, consistently outperforms a general wish to “do better” with money.",
            "A wish has no shape. When money is tight, or a tempting purchase appears, or the market has a bad quarter, a wish gives you nothing to hold onto — so it bends. A specific goal doesn't bend, because it's concrete enough to weigh against the thing tempting you to abandon it.",
          ],
          quote:
            "“I want to be comfortable” isn't a plan — it doesn't tell your decisions what to aim at.",
          practice:
            "Write down one financial goal with a number and a date attached. Not a range, not a feeling — a number.",
        },
        {
          number: '02',
          title: 'What Specificity Actually Changes',
          paragraphs: [
            "A specific target does two things a vague one can't. First, it turns an abstract future into a concrete present-day trade-off — “R2 million by 55” tells you, this month, roughly what needs to happen. Second, it gives you a way to measure progress that isn't just a feeling.",
            "That second part matters more than people expect. Financial anxiety often comes not from being behind, but from not knowing whether you're behind. A number replaces that uncertainty with a fact you can check.",
          ],
          practice:
            "Once you have your number, break it into a rough annual or monthly figure. Suddenly the goal is a series of ordinary decisions, not one impossible leap.",
        },
        {
          number: '03',
          title: 'Turning Purpose Into a Working Number',
          paragraphs: [
            "The number doesn't need to be perfect on day one. It needs to exist. Start with a reasonable estimate — what would financial independence, a paid-off home, or a specific retirement age actually cost in today's terms — and refine it as your life and income change.",
            "Purpose that's written down and reviewed stays alive. Purpose that lives only in your head quietly evaporates the first time life gets busy.",
          ],
          practice:
            "Revisit your number every quarter. Not to judge yourself against it — just to check that it still reflects what you actually want.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "Specificity is what turns a hope into a plan. Everything else in this series works better once this first rule is in place.",
        "A number and a date cost nothing to write down — and they change how every other financial decision gets made.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      nextHref="/guides/assets-vs-liabilities"
      nextLabel="Rule 2 — Know Assets From Liabilities"
    />
  )
}
