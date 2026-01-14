'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function MeetTheTeam() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const teamPreview = [
    {
      name: 'Leadership Team',
      role: 'Vision & Strategy',
      description: 'Our leadership team brings years of experience and passion for community development.',
    },
    {
      name: 'Program Coordinators',
      role: 'Community Programs',
      description: 'Dedicated coordinators who ensure our programs reach those who need them most.',
    },
    {
      name: 'Volunteers',
      role: 'Community Support',
      description: 'Compassionate volunteers who are the heart of our organization.',
    },
    {
      name: 'Family Support Specialists',
      role: 'Direct Services',
      description: 'Specialists who work directly with families to provide guidance and resources.',
    },
    {
      name: 'Community Outreach',
      role: 'Engagement',
      description: 'Building connections and partnerships within our communities.',
    },
  ]

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamPreview.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, teamPreview.length])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + teamPreview.length) % teamPreview.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % teamPreview.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal mb-4">Meet the Team</h2>
            <p className="text-lg text-abbah-charcoal/70 max-w-2xl mx-auto">
              Get to know the passionate individuals who make Abbah's mission possible. Our team is dedicated to
              creating positive change in our communities.
            </p>
          </div>
        </ScrollAnimation>

        {/* Carousel Container */}
        <div className="relative mb-12 max-w-6xl mx-auto" ref={carouselRef}>
          <div
            className="relative overflow-hidden rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slides Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {teamPreview.map((member, index) => (
                <div key={index} className="min-w-full flex-shrink-0 px-4">
                  <div className="bg-abbah-light rounded-lg p-6 md:p-8 lg:p-10 text-center h-full hover:shadow-lg transition-shadow max-w-md mx-auto">
                    <div className="w-24 h-24 bg-abbah-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl text-abbah-gold font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-abbah-charcoal mb-2">{member.name}</h3>
                    <p className="text-sm text-abbah-gold font-semibold mb-3 uppercase">{member.role}</p>
                    <p className="text-abbah-charcoal/70 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg text-abbah-charcoal p-3 rounded-full transition-all hover:scale-110 border border-abbah-light"
            aria-label="Previous team member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg text-abbah-charcoal p-3 rounded-full transition-all hover:scale-110 border border-abbah-light"
            aria-label="Next team member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {teamPreview.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-abbah-gold shadow-lg'
                    : 'w-2 bg-abbah-charcoal/30 hover:bg-abbah-charcoal/50 hover:w-3'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <ScrollAnimation>
          <div className="text-center">
            <Link
              href="/team"
              className="inline-block bg-abbah-dark hover:bg-abbah-dark-alt text-white px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
            >
              Learn More About Our Team
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

