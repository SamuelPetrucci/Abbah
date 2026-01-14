'use client'

import Link from 'next/link'
import Image from 'next/image'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'BLOG', href: '/blog' },
  ]

  return (
    <footer className="bg-abbah-dark text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-3">Newsletter</h3>
            <p className="text-xs text-abbah-light/80 mb-3">Stay updated on our events</p>
            <NewsletterForm />
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-abbah-gold transition-colors uppercase text-xs font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Meet the Team */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-3">Meet the Team</h3>
            <p className="text-xs text-abbah-light/80 mb-3">
              Learn about the dedicated individuals behind Abbah
            </p>
            <Link
              href="/team"
              className="text-xs hover:text-abbah-gold transition-colors uppercase font-medium inline-block"
            >
              View Team →
            </Link>
          </div>

          {/* Contact Info & Donate */}
          <div className="md:col-span-1">
            <div className="text-center md:text-left mb-4 space-y-2">
              <div className="relative w-24 h-24 mx-auto md:mx-0 mb-3">
                <Image
                  src="/comnyLogo.png"
                  alt="Abbah Logo"
                  fill
                  className="object-contain opacity-90"
                  sizes="96px"
                />
              </div>
              <div className="text-sm font-semibold">Abbah</div>
              <div className="text-xs text-abbah-light/80">West Hartford, CT</div>
              <div className="text-xs">
                <a href="mailto:info@abbah.org" className="hover:text-abbah-gold transition-colors">
                  info@abbah.org
                </a>
              </div>
              <div className="text-xs">
                <a href="tel:2035654766" className="hover:text-abbah-gold transition-colors">
                  203.565.4766
                </a>
              </div>
            </div>
            <Link
              href="/donate"
              className="bg-abbah-gold hover:bg-abbah-gold-alt text-white px-4 py-2 rounded-md font-semibold uppercase text-xs transition-colors inline-block w-full text-center"
            >
              DONATE
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-abbah-slate/50 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <div className="text-abbah-light/80">© 2026 Abbah. All rights reserved.</div>
          <div className="text-abbah-light/60">
            Brought to you by{' '}
            <a
              href="https://aitransformationllc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-abbah-gold transition-colors"
            >
              AItransformationllc.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
