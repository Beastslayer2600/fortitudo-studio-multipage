import { guideLayoutMetadata } from "@/lib/guideMeta"

// Stops guide titles doubling "| Gert Fourie" (see lib/guideMeta.ts). Applies to the
// guides in child folders only; the /guides index in this folder keeps its own title.
export const metadata = guideLayoutMetadata

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
