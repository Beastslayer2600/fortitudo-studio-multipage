import type { Metadata } from "next"
import ArticleMeta from "@/components/ArticleMeta"
import { articleMetadata } from "@/lib/seo"
import JanuaryGuideClient from "./JanuaryGuideClient"
import { OG_ALT, isOgTier } from "@/lib/januaryOg"

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
  return articleMetadata(PATH, {
    image: {
      url: tier ? `${PATH}/og?t=${tier}` : `${PATH}/og`,
      width: 1200,
      height: 630,
      alt: OG_ALT,
    },
  })
}

export default function JanuaryAlreadySpentGuide() {
  return (
    <>
      <JanuaryGuideClient />
      <ArticleMeta path={PATH} />
    </>
  )
}
