'use client'

import { useState, useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const type = params.get('type')
      if (type) {
        setFormData((prev) => ({ ...prev, type: type === 'volunteer' ? 'volunteer' : 'general' }))
      }
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage('Thank you for your message! We will get back to you soon.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          type: 'general',
        })
        setTimeout(() => {
          onClose()
          setStatus('idle')
        }, 2000)
      } else {
        setStatus('error')
        setStatusMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-abbah-light p-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-abbah-charcoal">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-abbah-charcoal hover:text-red-500 transition-colors p-2"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contact Info */}
        <div className="p-6 bg-abbah-light/30 border-b border-abbah-light">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-abbah-gold rounded-full p-2">
                <svg className="w-5 h-5 text-abbah-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-abbah-charcoal/60 uppercase tracking-wide">Email</div>
                <a href="mailto:info@abbah.org" className="text-abbah-dark hover:text-abbah-gold transition-colors font-medium">
                  info@abbah.org
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-abbah-gold rounded-full p-2">
                <svg className="w-5 h-5 text-abbah-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-abbah-charcoal/60 uppercase tracking-wide">Phone</div>
                <a href="tel:2035654766" className="text-abbah-dark hover:text-abbah-gold transition-colors font-medium">
                  203.565.4766
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
              {statusMessage}
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-abbah-charcoal mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-abbah-charcoal mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-abbah-charcoal mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-abbah-charcoal mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-abbah-charcoal mb-2">
                Inquiry Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
              >
                <option value="general">General Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="donation">Donation</option>
                <option value="event">Event Information</option>
                <option value="support">Support Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-abbah-charcoal mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-abbah-charcoal mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border-2 border-abbah-slate text-abbah-charcoal px-6 py-3 rounded-md font-semibold uppercase text-sm hover:bg-abbah-light transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 bg-abbah-dark hover:bg-abbah-dark-alt text-white px-6 py-3 rounded-md font-semibold uppercase text-sm transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

