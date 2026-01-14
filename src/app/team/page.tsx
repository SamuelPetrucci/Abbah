import ScrollAnimation from '@/components/ScrollAnimation'
import Image from 'next/image'

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Executive Director',
      role: 'Leadership',
      bio: 'With over 15 years of experience in non-profit leadership and community development, our Executive Director brings vision and strategic thinking to Abbah. They are passionate about breaking generational cycles and building stronger families.',
      responsibilities: ['Strategic Planning', 'Community Relations', 'Program Development'],
      email: 'director@abbah.org',
    },
    {
      id: 2,
      name: 'Program Director',
      role: 'Programs & Operations',
      bio: 'Our Program Director oversees the day-to-day operations of all Abbah programs. With a background in social work and community organizing, they ensure our programs meet the needs of the families we serve.',
      responsibilities: ['Program Coordination', 'Volunteer Management', 'Event Planning'],
      email: 'programs@abbah.org',
    },
    {
      id: 3,
      name: 'Community Outreach Coordinator',
      role: 'Outreach & Engagement',
      bio: 'The Community Outreach Coordinator works tirelessly to connect Abbah with the communities we serve. They build partnerships, organize events, and ensure our message reaches those who need it most.',
      responsibilities: ['Community Partnerships', 'Event Organization', 'Public Relations'],
      email: 'outreach@abbah.org',
    },
    {
      id: 4,
      name: 'Family Support Specialist',
      role: 'Direct Services',
      bio: 'Our Family Support Specialist works directly with families, providing guidance, resources, and support. With expertise in family dynamics and fathering, they help families navigate challenges and build stronger connections.',
      responsibilities: ['Family Consultation', 'Resource Distribution', 'Support Services'],
      email: 'support@abbah.org',
    },
    {
      id: 5,
      name: 'Youth Programs Coordinator',
      role: 'Youth Engagement',
      bio: 'The Youth Programs Coordinator focuses on programs that engage young people and help them understand the importance of positive fathering. They develop age-appropriate activities and mentorship programs.',
      responsibilities: ['Youth Programs', 'Mentorship Coordination', 'Educational Activities'],
      email: 'youth@abbah.org',
    },
    {
      id: 6,
      name: 'Volunteer Coordinator',
      role: 'Volunteer Management',
      bio: 'Our Volunteer Coordinator manages our amazing team of volunteers, ensuring they have the training and support needed to make a meaningful impact. They recruit, train, and coordinate volunteer activities.',
      responsibilities: ['Volunteer Recruitment', 'Training Programs', 'Volunteer Coordination'],
      email: 'volunteers@abbah.org',
    },
  ]

  const boardMembers = [
    {
      name: 'Board Chair',
      role: 'Governance & Strategy',
      bio: 'The Board Chair provides leadership and guidance to ensure Abbah fulfills its mission and maintains strong governance practices.',
    },
    {
      name: 'Board Member',
      role: 'Community Relations',
      bio: 'Board members bring diverse expertise and perspectives to guide Abbah\'s strategic direction and community impact.',
    },
    {
      name: 'Board Member',
      role: 'Financial Oversight',
      bio: 'Our board members ensure financial accountability and help secure resources to support Abbah\'s mission.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-abbah-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-abbah-charcoal text-center mb-4">
              Meet the Team
            </h1>
            <p className="text-lg text-abbah-charcoal/70 text-center max-w-3xl mx-auto">
              The dedicated individuals behind Abbah are committed to creating positive change in our communities.
              Learn more about the people who make our mission possible.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal text-center mb-12">
              Our Staff
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.id}>
                <div className="bg-white border border-abbah-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-abbah-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-abbah-gold font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-abbah-charcoal text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-abbah-gold font-semibold text-center mb-4 uppercase">
                    {member.role}
                  </p>
                  <p className="text-abbah-charcoal/70 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-abbah-charcoal mb-2">Key Responsibilities:</p>
                    <ul className="text-xs text-abbah-charcoal/70 space-y-1">
                      {member.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-abbah-gold mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-abbah-dark hover:text-abbah-gold transition-colors block text-center"
                  >
                    {member.email}
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="bg-abbah-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal text-center mb-4">
              Board of Directors
            </h2>
            <p className="text-center text-abbah-charcoal/70 mb-12 max-w-2xl mx-auto">
              Our Board of Directors provides strategic guidance and governance to ensure Abbah remains true to its
              mission and values.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <ScrollAnimation key={index}>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-abbah-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl text-abbah-gold font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-abbah-charcoal mb-1">{member.name}</h3>
                  <p className="text-xs text-abbah-gold font-semibold mb-3 uppercase">{member.role}</p>
                  <p className="text-abbah-charcoal/70 text-sm">{member.bio}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center bg-abbah-dark rounded-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-abbah-light mb-6">
                Are you passionate about our mission? We're always looking for dedicated individuals to join our team
                or volunteer with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact?type=volunteer"
                  className="inline-block bg-abbah-gold hover:bg-abbah-gold-alt text-abbah-charcoal px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
                >
                  Volunteer
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-abbah-dark px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

