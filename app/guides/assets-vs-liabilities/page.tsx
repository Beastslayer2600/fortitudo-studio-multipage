import type { Metadata } from 'next'
import AssetsLiabilitiesGuideClient from './AssetsLiabilitiesGuideClient'

export const metadata: Metadata = {
  title: 'Know Assets From Liabilities | Gert Fourie',
  description:
    'An asset puts money in your pocket. A liability takes it out — regardless of how either one looks on the surface. Rule 2 of 10.',
}

export default function AssetsLiabilitiesGuide() {
  return <AssetsLiabilitiesGuideClient />
}
