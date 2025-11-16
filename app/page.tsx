'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ClientLogos from '@/components/client-logos'
import AboutSection from '@/components/about-section'
import StatsSection from '@/components/stats-section'
import ServicesSection from '@/components/services-section'
import PortfolioSection from '@/components/portfolio-section'
import TestimonialSection from '@/components/testimonial-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ClientLogos />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
