'use client'

import { useState } from 'react'

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filters = ['ALL WORKS', 'EDUCATION', 'FMCG', 'REAL ESTATE', 'FINANCE', 'HOSPITALITY']

  const works = [
    {
      id: 1,
      category: 'EDUCATION',
      client: 'Gyan Ganga',
      title: 'Student Enrollment Campaign',
      image: '🎓',
    },
    {
      id: 2,
      category: 'FMCG',
      client: 'The New Shop',
      title: 'Product Launch Strategy',
      image: '🛍️',
    },
    {
      id: 3,
      category: 'FINANCE',
      client: 'Gun for Glory',
      title: 'Brand Awareness Drive',
      image: '💰',
    },
    {
      id: 4,
      category: 'REAL ESTATE',
      client: 'Property Pro',
      title: 'Digital Real Estate Solution',
      image: '🏢',
    },
    {
      id: 5,
      category: 'HOSPITALITY',
      client: 'Resort Paradise',
      title: 'Tourism Marketing',
      image: '🏨',
    },
    {
      id: 6,
      category: 'EDUCATION',
      client: 'Tech Institute',
      title: 'Online Course Promotion',
      image: '💻',
    },
  ]

  const filteredWorks = activeFilter === 'ALL WORKS'
    ? works
    : works.filter(work => work.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[var(--color-primary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Success Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">Industries</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeFilter === filter
                  ? 'bg-[var(--color-accent)] text-white shadow-lg scale-105'
                  : 'bg-white/50 backdrop-blur-sm text-[var(--color-text-secondary)] hover:bg-white/70 border border-white/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredWorks.map((work, idx) => (
            <div
              key={work.id}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-2xl cursor-pointer animate-fade-in-scale"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-56 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/20 overflow-hidden flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {work.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-bold text-[var(--color-accent)] uppercase mb-2">
                  {work.category}
                </p>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Client: <span className="font-semibold">{work.client}</span>
                </p>

                <button className="w-full py-2 bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-lg font-semibold text-sm transition-all">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
