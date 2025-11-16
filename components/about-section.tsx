'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[var(--color-primary)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/30 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/20 rounded-2xl flex items-center justify-center text-7xl">
                🎯
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">Bigwig Social</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We are a dynamic, young, and passionate team based in Jabalpur, dedicated to building and amplifying brands on the global stage. Our mission is simple yet powerful:
              </p>

              <div className="bg-white/70 backdrop-blur-sm border-l-4 border-[var(--color-accent)] p-6 rounded-lg">
                <p className="text-xl font-bold text-[var(--color-accent)] mb-2">
                  "BRIDGING OUR EFFORTS WITH YOUR SUCCESS"
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  We don't charge for services; we invoice for <span className="font-bold text-[var(--color-text-primary)]">results, credibility, and value.</span>
                </p>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Every campaign is crafted with precision, every strategy backed by data, and every result measured by impact. We believe in transparency, innovation, and the power of storytelling to transform businesses.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30">
                <span className="text-sm font-semibold text-[var(--color-accent)]">📈 Results-Driven</span>
              </div>
              <div className="px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30">
                <span className="text-sm font-semibold text-[var(--color-accent)]">🌍 Global Vision</span>
              </div>
              <div className="px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30">
                <span className="text-sm font-semibold text-[var(--color-accent)]">💡 Innovative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
