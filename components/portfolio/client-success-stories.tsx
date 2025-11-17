'use client'

import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'

type ClientSuccessStoriesProps = {
  sector: typeof portfolioSectors[SectorKey]
}

export default function ClientSuccessStories({ sector }: ClientSuccessStoriesProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[var(--color-primary)]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Featured Client Success Stories
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Real results from real clients in the {sector.title.toLowerCase()}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sector.clients.map((client, idx) => (
            <div
              key={client.name}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-2xl animate-fade-in-scale"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Header with icon */}
              <div className="relative h-40 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/20 flex items-center justify-center overflow-hidden">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 line-clamp-2">
                  {client.name}
                </h3>

                <p className="text-sm font-semibold text-[var(--color-accent)] mb-3">
                  Service: {client.service}
                </p>

                <div className="bg-[var(--color-primary)]/20 rounded-lg p-4 mb-4">
                  <p className="text-sm text-[var(--color-text-secondary)] font-medium">
                    <span className="text-[var(--color-accent)] font-bold">Result: </span>
                    {client.result}
                  </p>
                </div>

                <button className="w-full py-2 bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-lg font-semibold text-sm transition-all">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
