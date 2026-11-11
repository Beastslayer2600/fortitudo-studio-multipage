import type { Metadata } from "next"
import WorthGuideClient from "./WorthGuideClient"
import { OG_ALT } from "@/lib/worthOg"

const TITLE = "What Are You Worth? | Gert Fourie"
const DESCRIPTION = "You know what your car is worth. See what you are, in sixty seconds."
const PATH = "/guides/what-are-you-worth"
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

export default function WhatAreYouWorthGuide() {
  return <WorthGuideClient />
}
