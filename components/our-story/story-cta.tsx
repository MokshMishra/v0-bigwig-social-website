'use client'

import Link from 'next/link'

export default function StoryCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-[var(--color-accent)]/20 via-transparent to-orange-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)]">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">
              Success Story?
            </span>
          </h2>

          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Your brand deserves a partner that believes in your vision as much as you do. Let's create something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/#services">
              <button className="group px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-bold text-lg hover:bg-[var(--color-accent-dark)] transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                Explore Our Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            <Link href="/#contact">
              <button className="px-8 py-4 bg-white/80 text-[var(--color-text-primary)] rounded-full font-bold text-lg hover:bg-white transition-all hover:shadow-xl hover:scale-105 border border-white/40">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
