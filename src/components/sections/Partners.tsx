'use client'

import ScrollAnimation from '@/components/ScrollAnimation'

export default function Partners() {
  const partners = [
    {
      name: 'SCRIP',
      fullName: 'Second Chance Reentry Initiative Program',
      description: 'Supporting reentry and community reintegration programs',
    },
    {
      name: 'NEW LIFE II',
      fullName: 'New Life II',
      description: 'Empowering individuals and families through comprehensive support',
    },
  ]

  return (
    <section className="bg-abbah-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal text-center mb-4">
            Partnering Companies and Non-Profits
          </h2>
          <p className="text-center text-abbah-charcoal/70 mb-12 max-w-2xl mx-auto">
            We're proud to collaborate with organizations that share our mission of strengthening families and
            communities.
          </p>
        </ScrollAnimation>
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <ScrollAnimation key={partner.name}>
              <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow min-w-[280px] max-w-[350px]">
                <div className="text-abbah-charcoal">
                  <div className="text-3xl font-bold mb-2 text-abbah-dark">{partner.name}</div>
                  <div className="text-sm text-abbah-charcoal/70 mb-4 font-medium">{partner.fullName}</div>
                  <div className="text-xs text-abbah-charcoal/60">{partner.description}</div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
