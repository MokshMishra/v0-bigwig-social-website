'use client'

import Link from 'next/link'
import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'

type PortfolioCTAProps = {
  sector: typeof portfolioSectors[SectorKey]
}

export default function PortfolioCTA({ sector }: PortfolioCTAProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4 text-balance">
          Ready to Transform Your {sector.title}?
        </h2>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
          Let's discuss how Bigwig Social can drive results for your business in the {sector.title.toLowerCase()}.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" className="px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:shadow-lg">
            Start Your Campaign
          </Link>
          <Link href="#portfolio" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-[var(--color-text-primary)] rounded-full font-semibold border border-white/40 hover:bg-white/30 transition-all">
            View All Sectors
          </Link>
        </div>
      </div>
    </section>
  )
}
