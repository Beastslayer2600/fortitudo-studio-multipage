import { guideLayoutMetadata } from "@/lib/guideMeta"

// Stops the guide title doubling "| Gert Fourie" (see lib/guideMeta.ts).
export const metadata = guideLayoutMetadata

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
