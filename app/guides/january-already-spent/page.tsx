import type { Metadata } from "next"
import JanuaryGuideClient from "./JanuaryGuideClient"
import { OG_ALT, isOgTier } from "@/lib/januaryOg"

const TITLE = "How Much of January Have You Already Spent? | Gert Fourie"
const DESCRIPTION =
  "Pay later still gets paid. Add up your instalments and see how much of your next six paydays is already gone — in ninety seconds, in your browser."
const PATH = "/guides/january-already-spent"

// Shared links carry ?t=manageable|crowded|spoken so the preview card shows
// the tier line. Never any personal figures.
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const t = (await searchParams)?.t
  const tier = typeof t === "string" && isOgTier(t) ? t : null
  const image = {
    url: tier ? `${PATH}/og?t=${tier}` : `${PATH}/og`,
    width: 1200,
    height: 630,
    alt: OG_ALT,
  }
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: PATH },
    openGraph: {
      type: "article",
      url: PATH,
      title: TITLE,
      description: DESCRIPTION,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [image.url],
    },
  }
}

export default function JanuaryAlreadySpentGuide() {
  return <JanuaryGuideClient />
}
