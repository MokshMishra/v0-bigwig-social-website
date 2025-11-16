'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-[var(--color-primary)] to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent)] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-[var(--color-primary)] px-3 py-2 rounded-lg">
                <span className="font-bold text-lg text-[var(--color-text-primary)]">⚡</span>
              </div>
            </div>
            <span className="font-bold text-xl text-[var(--color-text-primary)]">Bigwig</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-[var(--color-accent)] text-white rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[var(--color-primary)] rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-6 py-2 bg-[var(--color-accent)] text-white rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
