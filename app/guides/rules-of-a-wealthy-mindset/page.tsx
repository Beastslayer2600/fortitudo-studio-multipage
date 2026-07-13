import type { Metadata } from 'next'
import WealthyMindsetGuideClient from './WealthyMindsetGuideClient'

export const metadata: Metadata = {
  title: 'Rules & Foundations of a Wealthy Mindset | Gert Fourie',
  description:
    'Ten research-backed principles — from classic wealth literature to modern behavioural finance — for building a mindset that actually builds wealth. Read the full series, one rule per guide.',
}

export default function WealthyMindsetGuide() {
  return <WealthyMindsetGuideClient />
}
