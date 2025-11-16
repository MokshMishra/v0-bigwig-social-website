'use client'

import { useState, useEffect } from 'react'

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Gyan Ganga',
      title: 'Director',
      quote: 'Bigwig Social transformed our enrollment strategy. We saw a 150% increase in qualified leads within 3 months!',
      video: '🎬',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'The New Shop',
      title: 'Marketing Manager',
      quote: 'Their creative approach and data-driven insights helped us reach our target audience effectively.',
      video: '🎬',
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Gun for Glory',
      title: 'CEO',
      quote: 'Best investment in digital marketing we\'ve made. The ROI speaks for itself.',
      video: '🎬',
    },
  ]

  const handwrittenReviews = [
    'Amazing work! Highly recommended! ⭐⭐⭐⭐⭐',
    'They really understand our brand. Great team! 🙌',
    'Results exceeded expectations. Will work again! 💯',
    'Professional, creative, and results-driven. 🚀',
    'Transformed our online presence. Thank you! 🙏',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-r from-[var(--color-primary)]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Testimonials Carousel */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-12 text-center">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">Success Stories</span>
          </h2>

          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40 overflow-hidden">
            {/* Video/Media Area */}
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-2 h-96 md:h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/10 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-pulse">{testimonials[currentSlide].video}</div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <p className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] mb-4 leading-relaxed">
                    "{testimonials[currentSlide].quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[var(--color-accent)]">⭐</span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-[var(--color-text-primary)]">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {testimonials[currentSlide].title} at {testimonials[currentSlide].company}
                  </p>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-2 mt-6">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? 'bg-[var(--color-accent)] w-8'
                          : 'bg-[var(--color-accent)]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Handwritten Reviews Ribbon */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
            Client Feedback
          </h3>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...handwrittenReviews, ...handwrittenReviews].map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 h-48 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[var(--color-accent)]/30 transform hover:rotate-3 transition-transform"
                  style={{ transform: `rotate(${(idx % 2) * 2 - 1}deg)` }}
                >
                  <p className="text-[var(--color-text-primary)] font-handwriting text-base leading-relaxed">
                    {review}
                  </p>
                  <div className="mt-4 text-2xl">✍️</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @font-face {
          font-family: 'handwriting';
          src: url('data:font/woff2;base64,d09GMgABAAAAAAToAA0AAAAA2AAAAAwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAFQHYACCBhgKrnyGR7FUWQMsCwABaIGEBCQKo3WDd4APJQsqGxrXvqjgFh2SaYgEVICWNCBgdGVsLnRlIQAA/v/78+O9ezIvEv7/v//9v/zv9e99d8f0+87GHZnxBiZRSppEJZGVVBJVSERmMhEBwBCNURAQjAjCGCgAyGBBYMjlAcCYy8EBS+wQSASyQAKwNTUDDlwYgXpyYxBjUJR1jiLj4EDW3C7gKVJT3S4gBwcOZc3tApmGRtl1e5GrIQ5kze0aXM3xVd0F/6v63wEFJXO7gBwcXiTk5fVHXQnkKfKrIEdL0H9V10twv5vXBbiV0RfgVka3Q0hMvhJ9efhOVA0P42j/aWGFjZi4aCvLi0QKI6xvV8cNvgkE8gWwWNmZZONrpXCZbj7BdYBvfNfMFpzA3uX0eI0x6/X8xkPvS5//hxIkxh8SYxQc1CAFUi2B+ASmGDYLbDjT3wbsYCxQNqZUUBfVVQU1VXHbvHMAA') format('woff2');
        }

        .font-handwriting {
          font-family: 'handwriting', cursive;
        }
      `}</style>
    </section>
  )
}
