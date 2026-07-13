import type { Metadata } from "next"
import DelayedGratificationGuideClient from "./DelayedGratificationGuideClient"

export const metadata: Metadata = {
  title: "Delayed Gratification Is Trained, Not Inherited | Gert Fourie",
  description:
    "Good financial habits feel harder than bad ones because the brain is wired for immediate reward. Here's how to train the opposite. Rule 6 of 10.",
}

export default function DelayedGratificationGuide() {
  return <DelayedGratificationGuideClient />
}
