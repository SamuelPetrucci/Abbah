'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Slide {
  id: number
  type: 'event' | 'photo' | 'mission'
  title: string
  description?: string
  image: string
  link?: string
  cta?: string
}

const slides: Slide[] = [
  {
    id: 1,
    type: 'mission',
    title: 'A non-profit working towards change in communities with gaps in generational fathering',
    description: 'Join us in building stronger families and communities through support, guidance, and connection',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/about',
    cta: 'Learn More',
  },
  {
    id: 2,
    type: 'photo',
    title: 'Building Stronger Families Together',
    description: 'Supporting fathers and families in our community with resources, programs, and guidance',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/resources',
    cta: 'Get Resources',
  },
  {
    id: 3,
    type: 'event',
    title: 'Upcoming Event: Homemade Pasta Class',
    description: 'Join us for an interactive cooking class where families can learn together and create lasting memories',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/events',
    cta: 'Sign Up',
  },
  {
    id: 4,
    type: 'photo',
    title: 'Creating Lasting Connections',
    description: 'Our programs bring families together through shared experiences and meaningful activities',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/about',
    cta: 'Our Mission',
  },
  {
    id: 5,
    type: 'event',
    title: 'Volunteer Opportunities Available',
    description: 'Become an active member of the Abbah Family and make a meaningful difference in your community',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/contact?type=volunteer',
    cta: 'Volunteer',
  },
  {
    id: 6,
    type: 'photo',
    title: 'Supporting the LGBTQ+ Community',
    description: 'Building up the LGBTQ+ community with unique needs and references to lack of fathering',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/about',
    cta: 'Learn More',
  },
  {
    id: 7,
    type: 'event',
    title: 'Cooking for Little Ones',
    description: 'A family-friendly event focused on preparing healthy meals with and for children',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80',
    link: '/events',
    cta: 'Join Us',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-lg shadow-xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-abbah-dark/80 via-abbah-dark/70 to-abbah-dark/60"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8 z-20">
                <div className="max-w-2xl">
                  <div className="mb-4 animate-fade-in">
                    <span className="inline-block px-4 py-1.5 bg-abbah-gold text-abbah-charcoal text-xs font-semibold uppercase rounded-full shadow-lg">
                      {slide.type === 'event' ? 'Event' : slide.type === 'photo' ? 'Community' : 'Mission'}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.description && (
                    <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 leading-relaxed drop-shadow-md max-w-xl">
                      {slide.description}
                    </p>
                  )}
                  {slide.link && slide.cta && (
                    <Link
                      href={slide.link}
                      className="inline-block bg-abbah-gold hover:bg-abbah-gold-alt text-abbah-charcoal px-8 py-3 rounded-md font-semibold uppercase text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {slide.cta}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110 shadow-xl border-2 border-white/20"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110 shadow-xl border-2 border-white/20"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-abbah-gold shadow-lg'
                : 'w-2 bg-white/50 hover:bg-white/70 hover:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
