import type { Metadata } from 'next'
import DefinePurposeGuideClient from './DefinePurposeGuideClient'

export const metadata: Metadata = {
  title: 'Define a Specific Purpose for Your Money | Gert Fourie',
  description:
    'Why vague financial goals rarely survive a setback — and how a number and a date change the way you make money decisions. Rule 1 of 10.',
}

export default function DefinePurposeGuide() {
  return <DefinePurposeGuideClient />
}
