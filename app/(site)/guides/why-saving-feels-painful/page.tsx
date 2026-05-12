import type { Metadata } from 'next'

import SavingPainfulGuideClient from './SavingPainfulGuideClient'

export const metadata: Metadata = {
  title: 'Why Saving Feels Painful | Gert Pretorius',
  description:
    'The neuroscience behind instant gratification vs delayed reward - and why your brain is working against your bank account.',
}

export default function SavingPainfulGuidePage() {
  return <SavingPainfulGuideClient />
}
