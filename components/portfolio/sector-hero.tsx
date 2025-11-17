'use client'

import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'

type SectorHeroProps = {
  sector: typeof portfolioSectors[SectorKey]
}

export default function SectorHero({ sector }: SectorHeroProps) {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-6 inline-block">
          <span className="text-6xl">{sector.icon}</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4 text-balance">
          {sector.title}
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-[var(--color-accent)] mb-6">
          {sector.tagline}
        </p>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 text-balance">
          {sector.description}
        </p>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/40 max-w-3xl mx-auto animate-slide-in-up">
          <p className="text-[var(--color-text-primary)] text-lg leading-relaxed">
            {sector.proposition}
          </p>
        </div>
      </div>
    </section>
  )
}
