import type { Metadata } from "next"
import ReviewBeatsAvoidanceGuideClient from "./ReviewBeatsAvoidanceGuideClient"

export const metadata: Metadata = {
  title: "Review Beats Avoidance | Gert Fourie",
  description:
    "Most people who feel behind financially haven't looked closely enough to know whether that feeling is even accurate. Rule 9 of 10.",
}

export default function ReviewBeatsAvoidanceGuide() {
  return <ReviewBeatsAvoidanceGuideClient />
}
