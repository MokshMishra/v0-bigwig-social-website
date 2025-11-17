'use client'

import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'

type CampaignShowcaseProps = {
  sector: typeof portfolioSectors[SectorKey]
}

export default function CampaignShowcase({ sector }: CampaignShowcaseProps) {
  return (
    <section className="py-20 md:py-32 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            High-Impact Campaigns
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Specialized campaigns designed for the {sector.title.toLowerCase()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sector.campaigns.map((campaign, idx) => (
            <div
              key={campaign.name}
              className="group relative bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-2xl p-8 animate-fade-in-scale"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                  {campaign.name}
                </h3>

                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {campaign.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">Key Highlights:</p>
                  <ul className="space-y-2">
                    {campaign.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-block w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[var(--color-text-secondary)] text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
