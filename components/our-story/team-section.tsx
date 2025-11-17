export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Sarah Anderson',
      role: 'Lead Performance Strategist',
      bio: 'The data wizard who turns clicks into conversions',
      emoji: '📊'
    },
    {
      name: 'Arjun Patel',
      role: 'Content Head',
      bio: 'Storyteller extraordinaire crafting narratives that resonate',
      emoji: '✍️'
    },
    {
      name: 'Priya Singh',
      role: 'Creative Director',
      bio: 'Visual genius bringing brands to life through design',
      emoji: '🎨'
    },
    {
      name: 'Rahul Kumar',
      role: 'Web Developer',
      bio: 'Tech-savvy problem solver building seamless digital experiences',
      emoji: '💻'
    },
    {
      name: 'Maya Desai',
      role: 'Social Media Manager',
      bio: 'Community builder fostering authentic brand connections',
      emoji: '📱'
    },
    {
      name: 'Vikram Joshi',
      role: 'SEO Specialist',
      bio: 'Search expert optimizing visibility and driving organic growth',
      emoji: '🔍'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
            Meet the Engine:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">
              Our Dynamic Team
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 rounded-full mx-auto mb-8"></div>

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
            Our team is a collective of hard-working, creative, and professional minds united by a single passion: delivering exceptional results. Behind every successful campaign is a dedicated individual whose unique skills and relentless drive make it all possible.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-scale text-center"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--color-accent)] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform">
                {member.emoji}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">{member.name}</h3>
              <p className="text-sm text-[var(--color-accent)] font-semibold mb-4">{member.role}</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm italic">"{member.bio}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
