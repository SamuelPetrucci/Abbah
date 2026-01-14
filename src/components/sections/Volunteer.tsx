'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Volunteer() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&h=900&fit=crop&q=80"
          alt="Volunteer background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="bg-abbah-dark/95 backdrop-blur-sm rounded-lg p-8 md:p-12 text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become an active member of the Abbah Family</h2>
              <p className="text-lg text-abbah-light mb-8 leading-relaxed">
                Here at Abbah, we are working towards real change. Our mission guides us in helping individuals and
                families. If you have skills to share, we invite you to volunteer and help guide our mission. Together,
                we can create lasting impact in our communities.
              </p>
              <Link
                href="/contact?type=volunteer"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold uppercase text-sm hover:bg-white hover:text-abbah-dark transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
