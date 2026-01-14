'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: 'Fathering Guide & Support Materials',
      description: 'Comprehensive resources for fathers including guides, articles, and support materials to help navigate the journey of fatherhood.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop&q=80',
      category: 'Guides',
    },
    {
      id: 2,
      title: 'Community Support Programs',
      description: 'Access information about our community support programs, group sessions, and networking opportunities for families.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80',
      category: 'Programs',
    },
    {
      id: 3,
      title: 'Educational Workshops & Events',
      description: 'Browse our upcoming workshops, educational events, and community gatherings designed to strengthen family bonds.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop&q=80',
      category: 'Education',
    },
  ]

  return (
    <section className="bg-abbah-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal mb-4 text-center">
            Resources
          </h2>
          <p className="text-center text-abbah-charcoal/70 mb-12 max-w-2xl mx-auto">
            Explore our comprehensive resources designed to support fathers and families in building stronger
            relationships and communities.
          </p>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ScrollAnimation key={resource.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-abbah-gold text-abbah-charcoal px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-abbah-charcoal">{resource.title}</h3>
                  <p className="text-abbah-charcoal/70">{resource.description}</p>
                  <Link
                    href={`/resources/${resource.id}`}
                    className="inline-block border-2 border-abbah-charcoal text-abbah-charcoal px-6 py-2 rounded-md font-semibold uppercase text-sm hover:bg-abbah-charcoal hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
