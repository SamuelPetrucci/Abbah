'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useContact } from './ContactProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openContact } = useContact()

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'BLOG', href: '/blog' },
  ]

  return (
    <header className="bg-abbah-light sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative h-16 md:h-20 lg:h-24 w-auto flex-shrink-0">
            <Image
              src="/comnyLogo.svg"
              alt="Abbah - Fathering for Good"
              width={200}
              height={96}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-abbah-charcoal hover:text-abbah-dark font-medium uppercase text-sm tracking-wide transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-abbah-gold hover:bg-abbah-gold-alt text-white px-6 py-2 rounded-md font-semibold uppercase text-sm transition-colors"
          >
            DONATE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-abbah-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-abbah-light border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-abbah-charcoal hover:text-abbah-dark font-medium uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false)
                openContact()
              }}
              className="block w-full text-left text-abbah-charcoal hover:text-abbah-dark font-medium uppercase text-sm"
            >
              CONTACT
            </button>
            <Link
              href="/donate"
              className="block bg-abbah-gold text-white px-6 py-2 rounded-md font-semibold uppercase text-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              DONATE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
