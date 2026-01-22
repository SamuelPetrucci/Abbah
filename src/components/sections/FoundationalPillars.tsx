'use client'

import ScrollAnimation from '@/components/ScrollAnimation'

export default function FoundationalPillars() {
  const pillars = [
    {
      number: 1,
      title: 'Supporting individuals with generational issues of fathering',
      description:
        'We provide guidance and support to those facing challenges related to generational fathering patterns, helping break cycles and build stronger family foundations.',
    },
    {
      number: 2,
      title: 'Building up the LGBTQ+ Community',
      description:
        'We support LGBTQ+ individuals and families who have unique needs and references to lack of fathering, creating inclusive spaces for growth and connection.',
    },
    {
      number: 3,
      title: 'Outreach within communities',
      description:
        'We actively engage with communities that have issues with fatherlessness, providing resources, programs, and support to create meaningful change.',
    },
  ]

  return (
    <section className="bg-abbah-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Foundational Pillars of Abbah</h2>
        </ScrollAnimation>
        <div className="relative">
          {pillars.map((pillar, index) => (
            <div key={pillar.number} className="relative">
              <div className="sticky top-20 md:top-24 py-8 md:py-12 bg-abbah-dark z-10">
                <ScrollAnimation>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-abbah-gold text-abbah-charcoal flex items-center justify-center text-2xl md:text-3xl font-bold">
                        {pillar.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">{pillar.title}</h3>
                      <p className="text-abbah-light leading-relaxed text-base md:text-lg">{pillar.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              {index < pillars.length - 1 && (
                <div className="h-8 md:h-12 border-l-2 border-abbah-light/20 ml-6 md:ml-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
