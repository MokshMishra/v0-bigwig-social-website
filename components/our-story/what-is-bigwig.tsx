export default function WhatIsBigwig() {
  const values = [
    {
      title: 'Results First',
      description: 'We measure success by your ROI, not by our activities. Every campaign is designed with conversion in mind.'
    },
    {
      title: 'Creative Excellence',
      description: 'Innovation is at our core. We push creative boundaries while maintaining strategic focus.'
    },
    {
      title: 'Transparency',
      description: 'No hidden metrics, no vague reporting. You always know exactly what we\'re doing and why.'
    },
    {
      title: 'Client Partnership',
      description: 'We don\'t work for clients; we work with them. Your success is our success.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">Bigwig Social?</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 rounded-full mx-auto mb-8"></div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Founded in 2024, Bigwig Social emerged from a simple belief: businesses in Jabalpur and beyond deserve world-class digital marketing without compromise.
            </p>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              We are not just a service provider. We are creative partners, strategic advisors, and growth catalysts. We combine data-driven insights with creative storytelling to craft campaigns that captivate, convert, and create lasting impact.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{value.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
