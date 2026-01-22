import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'
import Image from 'next/image'

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: 'Fathering Guide & Support Materials',
      description:
        'Comprehensive resources for fathers including guides, articles, and support materials to help navigate the journey of fatherhood. Access our library of downloadable resources covering topics from communication to discipline, bonding activities, and more.',
      image: '/family-laptop.png',
      category: 'Guides',
      items: ['Fathering Basics Guide', 'Communication Strategies', 'Bonding Activities', 'Discipline Approaches'],
    },
    {
      id: 2,
      title: 'Community Support Programs',
      description:
        'Learn about our community support programs, group sessions, and networking opportunities. We offer regular support groups, peer mentorship programs, and community events designed to connect fathers with resources and each other.',
      image: '/abbah-tribe-family.png',
      category: 'Programs',
      items: ['Monthly Support Groups', 'Peer Mentorship', 'Community Events', 'Networking Opportunities'],
    },
    {
      id: 3,
      title: 'Educational Workshops & Events',
      description:
        'Browse our upcoming workshops, educational events, and community gatherings. Our workshops cover topics like parenting skills, work-life balance, relationship building, and more. Check our events calendar for upcoming sessions.',
      image: '/hero-painting.png',
      category: 'Education',
      items: ['Parenting Workshops', 'Skill-Building Sessions', 'Guest Speaker Events', 'Family Activities'],
    },
    {
      id: 4,
      title: 'Referral Services',
      description:
        'We work with local partners to connect families with additional services including counseling, legal assistance, job training, and housing resources. Contact us to learn more about referral options available in your area.',
      image: '/hero-painting.png',
      category: 'Services',
      items: ['Counseling Referrals', 'Legal Assistance', 'Job Training Programs', 'Housing Resources'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-abbah-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-abbah-charcoal text-center mb-4">Resources</h1>
            <p className="text-lg text-abbah-charcoal/70 text-center max-w-3xl mx-auto">
              Comprehensive resources designed to support fathers and families in building stronger relationships and
              communities.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <ScrollAnimation key={resource.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-abbah-light">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-abbah-gold text-abbah-charcoal px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {resource.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-abbah-charcoal">{resource.title}</h2>
                    <p className="text-abbah-charcoal/70 leading-relaxed">{resource.description}</p>

                    <div>
                      <h3 className="text-sm font-semibold text-abbah-charcoal mb-2 uppercase tracking-wide">
                        Includes:
                      </h3>
                      <ul className="space-y-1">
                        {resource.items.map((item, index) => (
                          <li key={index} className="text-sm text-abbah-charcoal/70 flex items-center gap-2">
                            <svg className="w-4 h-4 text-abbah-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
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

      {/* CTA Section */}
      <section className="bg-abbah-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Additional Support?
            </h2>
            <p className="text-xl text-abbah-light mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us to learn more about our resources and how we can support you and
              your family.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-abbah-gold hover:bg-abbah-gold-alt text-white px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
            >
              Get In Touch
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

