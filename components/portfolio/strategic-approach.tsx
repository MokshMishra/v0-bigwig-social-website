'use client'

import { portfolioSectors, type SectorKey } from '@/lib/portfolio-data'

type StrategicApproachProps = {
  sector: typeof portfolioSectors[SectorKey]
}

export default function StrategicApproach({ sector }: StrategicApproachProps) {
  return (
    <section className="py-20 md:py-32 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Our 5-Step Digital Strategy
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A proven methodology tailored for {sector.title.toLowerCase()}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {sector.strategySteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative group animate-fade-in-scale"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Connector line */}
              {idx < sector.strategySteps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent"></div>
              )}

              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-[var(--color-primary)] rounded-2xl p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all duration-300">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 pt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
