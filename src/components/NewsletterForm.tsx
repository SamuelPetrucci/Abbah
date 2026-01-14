'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        disabled={status === 'loading'}
        className="w-full px-3 py-1.5 text-abbah-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold disabled:opacity-50 text-xs"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-abbah-charcoal hover:bg-abbah-slate px-4 py-1.5 rounded-md font-semibold uppercase text-xs transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'SIGNING UP...' : 'SIGN UP'}
      </button>
      {message && (
        <div className={`text-xs mt-1 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </div>
      )}
    </form>
  )
}
