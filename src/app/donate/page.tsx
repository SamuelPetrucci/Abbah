import ScrollAnimation from '@/components/ScrollAnimation'

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-abbah-charcoal mb-6">
              Support Abbah
            </h1>
            <p className="text-lg text-abbah-charcoal/70 mb-8">
              Your contribution helps us continue our mission to empower families and build stronger communities.
            </p>
            <div className="bg-abbah-light rounded-lg p-8 md:p-12">
              <p className="text-abbah-charcoal mb-6">
                Donation processing coming soon. Please check back later or contact us directly.
              </p>
              <a
                href="/contact"
                className="inline-block bg-abbah-dark hover:bg-abbah-dark-alt text-white px-8 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

