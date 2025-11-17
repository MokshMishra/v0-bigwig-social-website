'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import OurStoryHero from '@/components/our-story/story-hero'
import WhatIsBigwig from '@/components/our-story/what-is-bigwig'
import MeetFounder from '@/components/our-story/meet-founder'
import AchievementsSection from '@/components/our-story/achievements-section'
import TeamSection from '@/components/our-story/team-section'
import StoryyCTA from '@/components/our-story/story-cta'

export default function OurStory() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <OurStoryHero />
      <WhatIsBigwig />
      <MeetFounder />
      <AchievementsSection />
      <TeamSection />
      <StoryyCTA />
      <Footer />
    </main>
  )
}
