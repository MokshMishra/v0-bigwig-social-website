'use client'

import { useEffect, useRef } from 'react'

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollContent = container.querySelector('.scroll-content') as HTMLElement
    if (!scrollContent) return

    // Clone items for infinite scroll
    const items = scrollContent.querySelectorAll('.logo-item')
    items.forEach((item) => {
      const clone = item.cloneNode(true)
      scrollContent.appendChild(clone)
    })

    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed
      const contentWidth = scrollContent.scrollWidth / 2

      if (Math.abs(position) > contentWidth) {
        position = 0
      }

      scrollContent.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const clients = [
    'Gyan Ganga',
    'The New Shop',
    'Gun for Glory',
    'TechStart India',
    'Fashion Forward',
    'Real Estate Pro',
  ]

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[var(--color-text-secondary)] text-sm font-semibold uppercase mb-8 tracking-wider">
          Trusted by Leading Brands
        </p>

        <div ref={containerRef} className="overflow-hidden">
          <div className="scroll-content flex gap-12 items-center">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="logo-item flex-shrink-0 group cursor-pointer"
              >
                <div className="h-20 px-8 flex items-center justify-center rounded-lg bg-white/50 group-hover:bg-white transition-all duration-300 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/50 group-hover:shadow-lg">
                  <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] font-semibold transition-colors text-sm md:text-base whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
