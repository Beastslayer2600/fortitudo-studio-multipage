import type { Metadata } from "next"
import LossAversionGuideClient from "./LossAversionGuideClient"

export const metadata: Metadata = {
  title: "Loss Aversion Runs the Show Unless You Notice It | Gert Fourie",
  description:
    "We feel losses roughly twice as intensely as equivalent gains. Left unmanaged, that bias drives most bad financial decisions. Rule 4 of 10.",
}

export default function LossAversionGuide() {
  return <LossAversionGuideClient />
}
