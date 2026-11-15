import { ImageResponse } from "next/og"
import { OG_SIZE, isOgTier, renderJanuaryOg } from "@/lib/januaryOg"

// 1200x630 share image. /og for the default card, /og?t=crowded etc. for the
// tier line. Only fixed wording is ever drawn.
export async function GET(request: Request) {
  const t = new URL(request.url).searchParams.get("t")
  return new ImageResponse(renderJanuaryOg(t && isOgTier(t) ? t : null), {
    ...OG_SIZE,
    headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable" },
  })
}
