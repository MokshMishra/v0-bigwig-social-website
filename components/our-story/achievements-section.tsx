'use client'

import { useState } from 'react'

export default function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState('awards')

  const achievements = {
    awards: [
      {
        title: 'Excellence in Social Media Strategy',
        year: '2024',
        description: 'Recognized for innovative and results-driven social media campaigns'
      },
      {
        title: 'Best Digital Marketing Agency - Jabalpur',
        year: '2024',
        description: 'Awarded for outstanding contributions to the digital marketing landscape'
      },
      {
        title: 'Innovation in Content Creation',
        year: '2024',
        description: 'Celebrated for creative excellence and audience engagement'
      }
    ],
    certifications: [
      {
        title: 'Google Partners Certified',
        year: 'Active',
        description: 'Certified partner demonstrating expertise in Google advertising platforms'
      },
      {
        title: 'Meta Business Partner',
        year: 'Active',
        description: 'Recognized expert in Facebook and Instagram advertising solutions'
      },
      {
        title: 'HubSpot Partner',
        year: 'Active',
        description: 'Certified partner in HubSpot marketing and sales automation'
      }
    ]
  }

  const currentAchievements = achievements[selectedCategory as keyof typeof achievements]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[var(--color-primary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
            Our Achievements
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">
              and Milestones
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 rounded-full mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['awards', 'certifications'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-[var(--color-accent)] text-white shadow-lg'
                  : 'bg-white/70 text-[var(--color-text-secondary)] hover:bg-white/90'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentAchievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">{selectedCategory === 'awards' ? '🏆' : '✅'}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{achievement.title}</h3>
              <p className="text-sm text-[var(--color-accent)] font-semibold mb-3">{achievement.year}</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
