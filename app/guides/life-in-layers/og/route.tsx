import { ImageResponse } from "next/og"
import { OG_SIZE, renderLayersOg } from "@/lib/layersOg"

// 1200x630 share image. Fixed artwork and wording only; no personal data.
export async function GET() {
  return new ImageResponse(renderLayersOg(), {
    ...OG_SIZE,
    headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable" },
  })
}
