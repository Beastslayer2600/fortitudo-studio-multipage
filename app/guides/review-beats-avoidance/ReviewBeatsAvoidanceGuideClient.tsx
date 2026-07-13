"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function ReviewBeatsAvoidanceGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={9}
      totalRules={10}
      titleLine1="Review Beats"
      titleLine2="Avoidance"
      subtitle="Most people who feel behind financially haven't looked closely enough to know whether that's even true."
      intro={[
        "Financial anxiety and financial avoidance feed each other. The less you look, the scarier the unknown becomes — and the scarier it becomes, the less you want to look. A short, regular habit breaks that loop entirely.",
      ]}
      sections={[
        {
          number: "01",
          title: "Why Avoidance Feels Safer Than It Is",
          paragraphs: [
            "Not checking your numbers feels like protection from bad news. In reality, it just delays information you'll eventually need — usually until the moment it's most stressful to receive, like a shortfall discovered right before it matters.",
            "A short, regular habit of financial reflection — as little as five minutes — replaces that anxiety-driven avoidance with a calm, objective lens on where things actually stand.",
          ],
          practice:
            "Set a recurring monthly check-in with your own numbers: what came in, what went out, what grew.",
        },
        {
          number: "02",
          title: "What Regular Review Actually Reveals",
          paragraphs: [
            "Most people who feel behind financially haven't looked closely enough to know whether that feeling is accurate. Sometimes the review confirms the worry — and now it's a solvable problem instead of a vague dread. Just as often, it reveals steady, quiet progress that the avoidance was hiding from view.",
            "Either outcome is more useful than not knowing. Uncertainty is what makes financial stress feel unmanageable; a number, even an uncomfortable one, is something you can actually make a decision about.",
          ],
          quote:
            "A review isn't there to judge you. It's there to replace a feeling with a fact.",
          practice:
            "Keep the monthly review to a fixed, short window — 15 minutes, same day each month. Consistency matters more than depth.",
        },
        {
          number: "03",
          title: "Turning Review Into Progress",
          paragraphs: [
            "The real value of regular review isn't the review itself — it's what it makes possible. Seeing a trend over several months tells you far more than any single number in isolation, and it's the input that makes the written plan in Rule 10 worth revisiting and adjusting.",
            "Review also compounds with Rule 8 — a short conversation with an adviser about what the numbers show turns a private check-in into an accountable one.",
          ],
          practice:
            "Once a quarter, turn your monthly check-in into a slightly longer session — look at the trend across the last three months, not just the latest number.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "Looking at your numbers regularly is one of the least discussed, highest-leverage financial habits there is.",
        "It costs five minutes and replaces months of quiet anxiety with an honest, workable picture.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/your-environment-shapes-you"
      prevLabel="Rule 8 — Your Environment Shapes You"
      nextHref="/guides/plan-on-paper"
      nextLabel="Rule 10 — A Plan on Paper"
    />
  )
}
