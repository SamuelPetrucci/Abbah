import ScrollAnimation from '@/components/ScrollAnimation'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-abbah-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-abbah-charcoal text-center mb-4">
              About Abbah
            </h1>
            <p className="text-lg text-abbah-charcoal/70 text-center max-w-3xl mx-auto">
              A non-profit working towards change in communities with gaps in generational fathering.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal">Our Mission</h2>
                <p className="text-lg text-abbah-charcoal/70 leading-relaxed">
                  Abbah is dedicated to supporting fathers and families in our community, with a particular focus on
                  addressing generational gaps in fathering. We believe that strong, supportive fathering creates
                  positive ripple effects that strengthen entire communities.
                </p>
                <p className="text-lg text-abbah-charcoal/70 leading-relaxed">
                  Through our programs, resources, and community outreach, we work to break cycles, build connections,
                  and create lasting change for families across the Greater Hartford area.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop&q=80"
                  alt="Community support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-abbah-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal text-center mb-12">
              What We Do
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-abbah-charcoal mb-4">Community Programs</h3>
                <p className="text-abbah-charcoal/70">
                  We host regular events, workshops, and group sessions that bring families together. From cooking
                  classes to game nights, our programs create opportunities for connection and learning.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-abbah-charcoal mb-4">Support & Resources</h3>
                <p className="text-abbah-charcoal/70">
                  We provide comprehensive resources for fathers, including guides, articles, and access to support
                  networks. Our goal is to equip fathers with the tools they need to succeed.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-abbah-charcoal mb-4">Outreach & Advocacy</h3>
                <p className="text-abbah-charcoal/70">
                  We actively engage with communities facing challenges related to fatherlessness, working to raise
                  awareness and create meaningful change through partnerships and advocacy.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal text-center mb-12">
              Our Values
            </h2>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-abbah-dark mb-3">Inclusion</h3>
                <p className="text-abbah-charcoal/70 leading-relaxed">
                  We welcome all families and individuals, including our LGBTQ+ community members. Every person
                  deserves support, respect, and opportunities to grow.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-abbah-dark mb-3">Community</h3>
                <p className="text-abbah-charcoal/70 leading-relaxed">
                  We believe in the power of connection. Strong communities support strong families, and strong families
                  build strong communities. Together, we can create lasting change.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-abbah-dark mb-3">Growth</h3>
                <p className="text-abbah-charcoal/70 leading-relaxed">
                  We are committed to continuous learning and improvement. We support individuals in their journey to
                  become better fathers, partners, and community members.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}

