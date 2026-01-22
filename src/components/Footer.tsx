'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' },
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <footer className="bg-[#283533] text-[#C2C6C5]">
      <div className="container mx-auto px-4 py-10 md:py-12">
        {/* Top Section: Three-column layout with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Left Column: Logo with breathing room */}
          <div className="flex items-start justify-center md:justify-start">
            <div className="relative w-40 h-24 md:w-48 md:h-28">
              <Image
                src="/footer.png"
                alt="Abbah Logo"
                fill
                className="object-contain"
                style={{
                  filter: 'invert(1)',
                  mixBlendMode: 'screen',
                }}
                sizes="192px"
              />
            </div>
          </div>

          {/* Center Column: Newsletter and Donate - Action items grouped together */}
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-normal mb-4 text-[#C2C6C5]">
              Learn about our upcoming events
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-2.5 bg-white text-[#A9A9A9] rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-2.5 border border-white text-white rounded-md font-semibold uppercase text-xs transition-colors disabled:opacity-50 hover:bg-white/10 whitespace-nowrap"
              >
                {status === 'loading' ? 'SIGNING UP...' : 'SIGN UP'}
              </button>
            </form>
            {message && (
              <div className={`text-xs mb-4 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </div>
            )}
            {/* Donate Button - Grouped with newsletter as primary actions */}
            <Link
              href="/donate"
              className="inline-block bg-[#D2B16B] hover:bg-[#C4A15A] text-white px-6 py-2.5 rounded-md font-semibold uppercase text-xs md:text-sm transition-colors whitespace-nowrap text-center"
            >
              DONATE
            </Link>
          </div>

          {/* Right Column: Contact Information - Grouped together */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="text-xs md:text-sm mb-2">West Hartford, CT</div>
            <div className="text-xs md:text-sm mb-2">
              <a href="mailto:info@abbah.org" className="hover:text-white transition-colors">
                info@abbah.org
              </a>
            </div>
            <div className="text-xs md:text-sm">
              <a href="tel:2035654766" className="hover:text-white transition-colors">
                203.565.4766
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Links - Full width with generous spacing */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mb-8 md:mb-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition-colors uppercase text-xs md:text-sm font-normal"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Section: Social Media, Copyright, and Credit - Evenly distributed */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-[#C2C6C5]/20">
          {/* Social Media Icons - Left */}
          <div className="flex gap-5">
            <a
              href="https://instagram.com/abbah_org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163c0-3.403 2.759-6.162 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>

          {/* Copyright - Center */}
          <div className="text-xs md:text-sm text-[#C2C6C5]">
            All rights reserved 2026
          </div>

          {/* Credit - Right */}
          <div className="text-xs md:text-sm text-[#C2C6C5]">
            <a
              href="https://aitransformationllc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              aitransformationllc.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
