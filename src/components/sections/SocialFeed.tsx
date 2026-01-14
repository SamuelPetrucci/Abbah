'use client'

import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function SocialFeed() {
  const posts = [
    {
      id: 1,
      type: 'graphic',
      content: '1 + 1 = 10',
      bgColor: 'bg-abbah-dark',
      textColor: 'text-white',
    },
    {
      id: 2,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=600&fit=crop&q=80',
      alt: 'Father reading with child',
    },
    {
      id: 3,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=600&fit=crop&q=80',
      alt: 'Community gathering',
    },
    {
      id: 4,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=600&fit=crop&q=80',
      alt: 'Family playing together',
    },
    {
      id: 5,
      type: 'graphic',
      content: "Let's grow together",
      bgColor: 'bg-abbah-gold',
      textColor: 'text-white',
    },
  ]

  return (
    <section className="bg-abbah-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal text-center mb-4">
            Follow @Abbah_org
          </h2>
          <p className="text-center text-abbah-charcoal/70 mb-12 max-w-2xl mx-auto">
            Stay connected with our community on social media. See the latest updates, events, and stories from Abbah.
          </p>
        </ScrollAnimation>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <ScrollAnimation key={post.id}>
              <div
                className={`aspect-square rounded-lg overflow-hidden ${
                  post.bgColor || ''
                } ${post.textColor || ''} flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-xl`}
              >
                {post.type === 'graphic' && (
                  <div className="text-center p-4">
                    <div className="text-xl md:text-2xl font-bold mb-2">{post.content}</div>
                    <div className="w-8 h-8 mx-auto border-2 border-current rounded-full"></div>
                  </div>
                )}
                {post.type === 'image' && post.image && (
                  <div className="relative w-full h-full">
                    <Image
                      src={post.image}
                      alt={post.alt || 'Social media post'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/abbah_org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-abbah-dark hover:bg-abbah-dark-alt text-white px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
            >
              Follow Us on Instagram
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
