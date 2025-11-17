'use client'

import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'
import Image from 'next/image'

type ClientSuccessStoriesProps = {
  sector: typeof portfolioSectors[SectorKey]
}

export default function ClientSuccessStories({ sector }: ClientSuccessStoriesProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[var(--color-primary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Featured Client Success Stories
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Real results from real clients in the {sector.title.toLowerCase()}
          </p>
        </div>

        <div className="space-y-12">
          {sector.clients.map((client, idx) => (
            <div
              key={client.name}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-2xl animate-fade-in-scale ${
                idx % 2 === 0 ? 'lg:grid lg:grid-cols-2' : 'lg:grid lg:grid-cols-2'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Section - alternates left/right */}
              <div
                className={`relative h-80 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/20 flex items-center justify-center overflow-hidden ${
                  idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={client.image || "/placeholder.svg"}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-8 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  {client.name}
                </h3>

                <p className="text-sm font-semibold text-[var(--color-accent)] mb-4">
                  Service: {client.service}
                </p>

                <div className="bg-[var(--color-primary)]/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed">
                    <span className="text-[var(--color-accent)] font-bold">Result: </span>
                    {client.result}
                  </p>
                </div>

                {client.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {client.metrics.map((metric, i) => (
                      <div key={i} className="bg-[var(--color-accent)]/10 rounded-lg p-3 text-center">
                        <p className="text-[var(--color-accent)] font-bold text-sm">{metric}</p>
                      </div>
                    ))}
                  </div>
                )}

                <button className="w-full py-2 bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-lg font-semibold text-sm transition-all">
                  View Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
