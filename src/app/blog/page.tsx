import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Fathering in Our Communities',
      excerpt:
        'Exploring how positive fathering impacts families and communities, and the role we can all play in supporting stronger family structures.',
      date: 'March 15, 2024',
      category: 'Community',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Breaking Generational Cycles: A Guide for Fathers',
      excerpt:
        'Understanding generational patterns and practical steps fathers can take to create positive change for their children and future generations.',
      date: 'March 10, 2024',
      category: 'Resources',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Supporting LGBTQ+ Families in Our Community',
      excerpt:
        'How Abbah provides inclusive support and resources for LGBTQ+ families, recognizing their unique needs and experiences.',
      date: 'March 5, 2024',
      category: 'Inclusion',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Building Community Connections Through Events',
      excerpt:
        'A look at our recent community events and how they bring families together, creating lasting bonds and support networks.',
      date: 'February 28, 2024',
      category: 'Events',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Volunteer Spotlight: Making a Difference Together',
      excerpt:
        'Highlighting the amazing work of our volunteers and how their dedication helps us reach more families in our community.',
      date: 'February 20, 2024',
      category: 'Community',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Resources Every Father Should Know About',
      excerpt:
        'A comprehensive guide to resources and support services available to fathers and families in our community.',
      date: 'February 15, 2024',
      category: 'Resources',
      readTime: '8 min read',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-abbah-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-abbah-charcoal text-center mb-4">
              Blog & Resources
            </h1>
            <p className="text-lg text-abbah-charcoal/70 text-center max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and resources from Abbah. Learn about our programs,
              community stories, and tips for building stronger families.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <ScrollAnimation key={post.id}>
                <article className="bg-white border border-abbah-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-abbah-gold uppercase">{post.category}</span>
                      <span className="text-xs text-abbah-charcoal/60">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-abbah-charcoal mb-3">{post.title}</h2>
                    <p className="text-abbah-charcoal/70 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-abbah-light">
                      <span className="text-xs text-abbah-charcoal/60">{post.date}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-sm font-semibold text-abbah-dark hover:text-abbah-gold transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
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
              Want to Stay Updated?
            </h2>
            <p className="text-xl text-abbah-light mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest blog posts, event updates, and resources directly in
              your inbox.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block bg-abbah-gold hover:bg-abbah-gold-alt text-white px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

