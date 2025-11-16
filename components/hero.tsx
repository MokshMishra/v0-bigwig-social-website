'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const drawCityscape = () => {
      const width = canvas.width
      const height = canvas.height

      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#c5e7fb')
      gradient.addColorStop(1, '#e0f2fe')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw simple buildings with slight animation
      const buildings = [
        { x: width * 0.1, width: 60, height: 250 },
        { x: width * 0.25, width: 50, height: 300, isMain: false },
        { x: width * 0.4, width: 70, height: 280 },
        { x: width * 0.55, width: 55, height: 320, isMain: true }, // Tallest building
        { x: width * 0.7, width: 65, height: 270 },
        { x: width * 0.85, width: 50, height: 290 },
      ]

      buildings.forEach((building, idx) => {
        const yOffset = Math.sin((time + idx) * 0.02) * 3
        const baseY = height * 0.6

        // Building
        ctx.fillStyle = '#1a1f2e'
        ctx.fillRect(building.x, baseY - building.height + yOffset, building.width, building.height)

        // Windows
        ctx.fillStyle = '#ff9f43'
        for (let i = 0; i < building.height / 25; i++) {
          for (let j = 0; j < building.width / 20; j++) {
            ctx.fillRect(
              building.x + j * 18 + 3,
              baseY - building.height + i * 23 + 3 + yOffset,
              12,
              12
            )
          }
        }
      })

      // Draw lightning bolt on tallest building
      const mainBuilding = buildings[4]
      const boltX = mainBuilding.x + mainBuilding.width / 2
      const boltY = height * 0.6 - mainBuilding.height - 30

      ctx.strokeStyle = '#ff9f43'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(boltX, boltY - 40)
      ctx.lineTo(boltX + 10, boltY)
      ctx.lineTo(boltX - 5, boltY + 15)
      ctx.lineTo(boltX + 8, boltY + 30)
      ctx.stroke()

      // Glow effect
      ctx.strokeStyle = `rgba(255, 159, 67, ${0.5 + Math.sin(time * 0.05) * 0.3})`
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.moveTo(boltX, boltY - 40)
      ctx.lineTo(boltX + 10, boltY)
      ctx.lineTo(boltX - 5, boltY + 15)
      ctx.lineTo(boltX + 8, boltY + 30)
      ctx.stroke()

      time++
      animationId = requestAnimationFrame(drawCityscape)
    }

    drawCityscape()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen justify-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--color-text-primary)]">
                Jabalpur's Leading
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">
                  Digital Marketing
                </span>
                Agency
              </h1>
              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-2xl">
                We're a young & passionate team building brands <span className="font-semibold text-[var(--color-text-primary)]">global presence.</span>
              </p>
            </div>

            <button className="group px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-bold text-lg hover:bg-[var(--color-accent-dark)] transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
              Let's Talk Results
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <div className="flex items-center gap-6 pt-4 text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                50+ Happy Clients
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                200+ Projects
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative animate-float rounded-3xl overflow-hidden border border-white/30 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-[var(--color-text-primary)] font-semibold">Global Reach,</p>
                    <p className="text-[var(--color-accent)] font-bold text-lg">Local Touch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-text-secondary)] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[var(--color-text-secondary)] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
