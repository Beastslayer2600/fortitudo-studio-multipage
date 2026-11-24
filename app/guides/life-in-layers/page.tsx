import type { Metadata } from "next"
import LayersGuideClient from "./LayersGuideClient"
import { OG_ALT } from "@/lib/layersOg"

const TITLE = "Life in Layers | Gert Fourie"
const DESCRIPTION =
  "One layer for every year of your life. See how many you've stacked, and how many paydays are left."
const PATH = "/guides/life-in-layers"
const IMAGE = { url: `${PATH}/og`, width: 1200, height: 630, alt: OG_ALT }

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
}

export default function LifeInLayersGuide() {
  return <LayersGuideClient />
}
