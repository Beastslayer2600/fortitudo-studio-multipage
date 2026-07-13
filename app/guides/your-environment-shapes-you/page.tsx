import type { Metadata } from "next"
import EnvironmentGuideClient from "./EnvironmentGuideClient"

export const metadata: Metadata = {
  title: "Your Environment Is Doing More Than You Think | Gert Fourie",
  description:
    "The people around you measurably shift your own financial behaviour, for better or worse. Rule 8 of 10.",
}

export default function EnvironmentGuide() {
  return <EnvironmentGuideClient />
}
