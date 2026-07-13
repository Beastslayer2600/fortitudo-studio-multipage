'use client'

import RuleGuideLayout from '../../components/RuleGuideLayout'

export default function AssetsLiabilitiesGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={2}
      totalRules={10}
      titleLine1="Know Assets"
      titleLine2="From Liabilities"
      subtitle="An asset puts money in your pocket. A liability takes it out — no matter how good either one looks."
      intro={[
        "Income doesn't determine wealth. What you understand about money — and what you do with what's left after spending — determines what stays. And that understanding starts with one distinction most people never learn to apply consistently.",
      ]}
      sections={[
        {
          number: "01",
          title: "The Distinction That Actually Matters",
          paragraphs: [
            "An asset puts money in your pocket. A liability takes money out. It sounds almost too simple to be useful — until you start applying it honestly to your own life.",
            "A financed car, a bigger home than you need, or a lifestyle upgrade funded by debt can all masquerade as progress. They look like success from the outside. On the inside, they're a monthly outflow working quietly against the goal you set in Rule 1.",
          ],
          quote: "“Does this generate income or growth — or does it just cost me money every month?”",
          practice:
            "Before your next major purchase, ask that question out loud, honestly, before you buy.",
        },
        {
          number: "02",
          title: "Why This Is Harder Than It Sounds",
          paragraphs: [
            "The difficulty isn't understanding the definition — it's applying it under social and emotional pressure. A liability often arrives dressed as a reward, a status marker, or a sign that things are going well. Financial decisions are frequently ruled by fear or image management, not by a cold read of the numbers.",
            "This is why financial intelligence — not income — is the real variable. Two people earning the same salary can end up in completely different financial positions purely because one consistently classifies their spending correctly and the other doesn't.",
          ],
          practice:
            "List your five largest monthly outflows. For each one, mark it honestly: asset or liability. Most people find at least one surprise.",
        },
        {
          number: "03",
          title: "Building the Habit of Classification",
          paragraphs: [
            "This isn't a one-time exercise — it's a lens you apply continuously as your income and lifestyle change. The goal isn't to eliminate every liability; a home to live in or a reliable car for work still has real value. The goal is to be honest about which column each decision belongs in.",
            "Over time, the habit shifts your default behaviour. You start noticing the asset-shaped opportunities you'd otherwise miss, simply because you're in the habit of asking the question.",
          ],
          practice:
            "Once a year, review your full balance sheet with this lens: what's genuinely building wealth, and what's just costing you money with good marketing?",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "Wealth isn't about how much comes in — it's about what happens to it once it arrives.",
        "Getting honest about assets and liabilities is one of the simplest, highest-leverage habits in this entire series.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/define-your-purpose"
      prevLabel="Rule 1 — Define Your Purpose"
      nextHref="/guides/automate-the-discipline"
      nextLabel="Rule 3 — Automate the Discipline"
    />
  )
}
