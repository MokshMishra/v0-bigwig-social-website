'use client'

export default function MeetFounder() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="flex justify-center md:order-1">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/30 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 border border-white/40 overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/20 rounded-2xl flex items-center justify-center text-8xl">
                  👩‍💼
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 md:order-2 animate-slide-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
                Meet the Visionary:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">
                  The Founder
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                With over a decade of experience in digital marketing and brand building, our founder envisioned a different kind of agency. One that wouldn't settle for "good enough," but instead would challenge every assumption, push every boundary, and deliver extraordinary results.
              </p>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Her background spans strategy, creative direction, and performance marketing. She believed that the best ideas come from combining data-driven thinking with unbridled creativity—and she built Bigwig Social on exactly that foundation.
              </p>

              {/* Founder Quote */}
              <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-orange-500/5 border-l-4 border-[var(--color-accent)] p-8 rounded-lg my-8">
                <p className="text-xl md:text-2xl font-bold text-[var(--color-accent)] mb-3">
                  "The future of digital marketing isn't about louder messages—it's about smarter strategies and authentic connections."
                </p>
                <p className="text-[var(--color-text-secondary)] font-semibold">— Founder, Bigwig Social</p>
              </div>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Today, she leads a team of passionate professionals committed to proving that impact and integrity are not mutually exclusive. Her vision drives us every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
