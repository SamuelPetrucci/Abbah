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
        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <ScrollAnimation key={pillar.number}>
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="text-6xl md:text-7xl font-bold text-abbah-light/30 underline">
                    {pillar.number}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-abbah-light leading-relaxed">{pillar.description}</p>
                  {index < pillars.length - 1 && (
                    <div className="mt-6 border-t border-abbah-slate/30"></div>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
