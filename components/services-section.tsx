'use client'

export default function ServicesSection() {
  const services = [
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that engage your audience and build brand loyalty across all platforms.',
    },
    {
      icon: '📊',
      title: 'Content Strategy',
      description: 'Data-driven content that resonates with your target market and drives conversions.',
    },
    {
      icon: '🎨',
      title: 'Creative Design',
      description: 'Stunning visuals and designs that make your brand stand out in a crowded market.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Boost your online visibility and rank higher on search engines with our proven strategies.',
    },
    {
      icon: '📧',
      title: 'Email Marketing',
      description: 'Personalized campaigns that nurture leads and drive repeat business.',
    },
    {
      icon: '🎯',
      title: 'Performance Analytics',
      description: 'Real-time insights and detailed reports to measure the success of every campaign.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">Services</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/40 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-transparent group-hover:from-[var(--color-accent)]/10 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow button */}
                <div className="mt-6 flex items-center gap-2 text-[var(--color-accent)] font-semibold group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
