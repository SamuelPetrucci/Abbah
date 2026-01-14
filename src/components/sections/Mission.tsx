'use client'

import ScrollAnimation from '@/components/ScrollAnimation'

export default function Mission() {
  return (
    <section className="bg-abbah-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16 border-t-4 border-abbah-gold">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-abbah-gold font-bold mb-4">OUR MISSION</h2>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-abbah-charcoal leading-relaxed">
                    Abbah is forming a united front in providing solutions to eliminate single parent families and create dual
                    parent families, resulting in an improved generational legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
