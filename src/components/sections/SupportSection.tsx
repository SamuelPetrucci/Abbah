'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function SupportSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Panel - Text */}
          <ScrollAnimation>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-abbah-charcoal">
                We provide caring support
              </h2>
              <p className="text-lg text-abbah-charcoal/80 leading-relaxed">
                Our support extends to all members and volunteers, with a dedicated focus on elevating fathering. We
                believe in the power of community and the transformative impact of strong, supportive relationships.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-abbah-charcoal hover:text-abbah-dark font-medium text-lg group"
              >
                Read more about us
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollAnimation>

          {/* Right Panel - Image */}
          <ScrollAnimation>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/father-daughter-teeth.png"
                alt="Black father providing support and guidance to child through everyday bonding moments"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
