import ArticleMeta from "@/components/ArticleMeta"
import { articleMetadata } from "@/lib/seo"
import WorthGuideClient from "./WorthGuideClient"
import { OG_ALT } from "@/lib/worthOg"

const PATH = "/guides/what-are-you-worth"

export const metadata = articleMetadata(PATH, {
  image: { url: `${PATH}/og`, width: 1200, height: 630, alt: OG_ALT },
})

export default function WhatAreYouWorthGuide() {
  return (
    <>
      <WorthGuideClient />
      <ArticleMeta path={PATH} />
    </>
  )
}
