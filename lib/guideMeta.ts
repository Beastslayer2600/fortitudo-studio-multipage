import type { Metadata } from "next"

// Guide titles are written as "Title | Gert Fourie". The root layout's
// template ("%s | Gert Fourie | Pretoria") appended the name a second time,
// so guide layouts use this template instead and finish with "| Pretoria".
export const guideLayoutMetadata: Metadata = {
  title: { template: "%s | Pretoria", default: "Guides | Gert Fourie | Pretoria" },
}
