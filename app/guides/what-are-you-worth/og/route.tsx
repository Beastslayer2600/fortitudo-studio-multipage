import { ImageResponse } from "next/og"
import { OG_SIZE, renderWorthOg } from "@/lib/worthOg"

// 1200x630 share image. Only fixed wording is ever drawn, never a visitor's number.
export async function GET() {
  return new ImageResponse(renderWorthOg(), {
    ...OG_SIZE,
    headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable" },
  })
}
