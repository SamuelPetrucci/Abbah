'use client'

import Link from 'next/link'
import ScrollAnimation from './ScrollAnimation'

export default function DonationCTA() {
  return (
    <section className="bg-gradient-to-r from-abbah-dark to-abbah-dark-alt py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Support Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your contribution helps us build stronger families and communities. Every donation makes a difference in the lives of fathers and families we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/donate"
                className="bg-abbah-gold hover:bg-abbah-gold-alt text-abbah-charcoal px-10 py-5 rounded-lg font-bold uppercase text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-abbah-gold/50"
              >
                Donate Now
              </Link>
              <Link
                href="/contact?type=donation"
                className="border-2 border-white text-white hover:bg-white hover:text-abbah-dark px-10 py-5 rounded-lg font-bold uppercase text-lg md:text-xl transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 text-white/80 text-sm md:text-base">
              <p>Your donations are tax-deductible. Abbah is a 501(c)(3) non-profit organization.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

