'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectorHero from '@/components/portfolio/sector-hero'
import StrategicApproach from '@/components/portfolio/strategic-approach'
import ClientSuccessStories from '@/components/portfolio/client-success-stories'
import CampaignShowcase from '@/components/portfolio/campaign-showcase'
import PortfolioCTA from '@/components/portfolio/portfolio-cta'
import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'

export default function SectorPage() {
  const params = useParams()
  const sectorId = params.sector as string
  const sector = portfolioSectors[sectorId as SectorKey]

  if (!sector) {
    return (
      <main className="w-full overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Sector Not Found</h1>
            <p className="text-[var(--color-text-secondary)]">The sector you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <SectorHero sector={sector} />
        <StrategicApproach sector={sector} />
        <ClientSuccessStories sector={sector} />
        <CampaignShowcase sector={sector} />
        <PortfolioCTA sector={sector} />
      </div>
      <Footer />
    </main>
  )
}
