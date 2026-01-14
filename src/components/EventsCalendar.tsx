'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

interface Event {
  id: number
  title: string
  description: string
  date: Date
  time: string
  location: string
  image: string
  category: string
}

// Generate events for the next couple of weeks
const getUpcomingEvents = (): Event[] => {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to start of day
  
  const twoWeeksFromNow = new Date(today)
  twoWeeksFromNow.setDate(today.getDate() + 14) // 2 weeks from today

  const eventTemplates: Omit<Event, 'id' | 'date'>[] = [
    {
      title: 'Homemade Pasta Class',
      description: 'Join us for an interactive cooking class where families can learn to make pasta together. This hands-on workshop is perfect for parents and children to bond while learning new culinary skills.',
      time: '6:00 PM - 8:00 PM',
      location: 'Community Center, West Hartford',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop&q=80',
      category: 'Cooking',
    },
    {
      title: 'Cooking for Little Ones',
      description: 'A family-friendly event focused on preparing healthy meals with and for children. Learn fun recipes that kids love and nutritious tips for growing families.',
      time: '10:00 AM - 12:00 PM',
      location: 'Abbah Community Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80',
      category: 'Family',
    },
    {
      title: 'Sponsored Group Session',
      description: 'Join our monthly group session focused on fathering strategies, community support, and building stronger family connections. Open to all members.',
      time: '7:00 PM - 9:00 PM',
      location: 'Abbah Headquarters',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80',
      category: 'Support',
    },
    {
      title: 'Family Game Night',
      description: 'A fun-filled evening of board games, activities, and community bonding. Perfect for families looking to connect with others in the Abbah community.',
      time: '5:30 PM - 8:00 PM',
      location: 'Community Center, West Hartford',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&q=80',
      category: 'Community',
    },
  ]

  // Generate events spread over the next 2 weeks
  const events: Event[] = []
  let id = 1
  const daysToAdd = [3, 7] // Events on days 3 and 7 from today (only 2 events)

  daysToAdd.forEach((days, index) => {
    const eventDate = new Date(today)
    eventDate.setDate(today.getDate() + days)
    
    // Only add events that are within the 2-week window
    if (eventDate <= twoWeeksFromNow && index < eventTemplates.length) {
      events.push({
        id: id++,
        ...eventTemplates[index],
        date: eventDate,
      })
    }
  })

  // Sort by date (soonest first) and filter out past events
  const sortedEvents = events
    .filter(event => event.date >= today) // Only include future events
    .sort((a, b) => a.date.getTime() - b.date.getTime()) // Sort by date (soonest first)
  
  return sortedEvents
}

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showSignUp, setShowSignUp] = useState(false)
  
  const events = getUpcomingEvents()

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const handleSignUp = (event: Event) => {
    setSelectedEvent(event)
    setShowSignUp(true)
  }

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-abbah-charcoal mb-4">Upcoming Events</h2>
            <p className="text-lg text-abbah-charcoal/70 max-w-3xl mx-auto">
              Join the Abbah Community in enrichment events hosted by our donors and volunteers. Here are the events
              happening in the next couple of weeks.
            </p>
          </div>

          {events.length === 0 && (
            <div className="text-center py-12">
              <p className="text-abbah-charcoal/70 text-lg">
                No upcoming events in the next couple of weeks. Check back soon for new events!
              </p>
            </div>
          )}

          {/* Events Carousel */}
          {events.length > 0 && (
            <ScrollAnimation>
              <div className="relative">
                <div className="flex justify-center">
                  <div className="flex gap-6 md:gap-8 max-w-full w-full md:w-auto">
                    {events.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-abbah-light group flex-shrink-0 w-full md:w-[calc(50%-12px)]"
                        style={{ maxWidth: '500px' }}
                      >
                        {/* Event Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="350px"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-abbah-gold text-abbah-charcoal px-3 py-1 rounded-full text-xs font-semibold uppercase">
                              {event.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                            <div className="text-abbah-charcoal font-bold text-lg">
                              {event.date.getDate()}
                            </div>
                            <div className="text-abbah-slate text-xs uppercase">
                              {event.date.toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-abbah-charcoal mb-2">{event.title}</h4>
                          <p className="text-abbah-charcoal/70 text-sm mb-4 line-clamp-3">{event.description}</p>

                          {/* Event Info */}
                          <div className="space-y-2 mb-4 text-sm text-abbah-charcoal/70">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => handleSignUp(event)}
                            className="w-full bg-abbah-dark hover:bg-abbah-dark-alt text-white px-6 py-3 rounded-md font-semibold uppercase text-sm transition-colors"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    {/* Placeholder for second event if only one exists */}
                    {events.length === 1 && (
                      <div className="bg-abbah-light rounded-lg overflow-hidden shadow-md border-2 border-dashed border-abbah-slate flex-shrink-0 w-full md:w-[calc(50%-12px)] flex items-center justify-center min-h-[500px]"
                        style={{ maxWidth: '500px' }}
                      >
                        <div className="text-center p-8">
                          <svg className="w-16 h-16 mx-auto mb-4 text-abbah-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h3 className="text-xl font-bold text-abbah-charcoal mb-2">More Events Brewing</h3>
                          <p className="text-abbah-charcoal/70">We're planning more exciting events for our community. Check back soon!</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Sign Up Modal */}
      {showSignUp && selectedEvent && (
        <EventSignUpModal event={selectedEvent} onClose={() => setShowSignUp(false)} />
      )}
    </>
  )
}

interface EventSignUpModalProps {
  event: Event
  onClose: () => void
}

function EventSignUpModal({ event, onClose }: EventSignUpModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // In a real app, this would send to your API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      setStatus('success')
      setTimeout(() => {
        onClose()
        setStatus('idle')
        setFormData({ name: '', email: '', phone: '', guests: '1', message: '' })
      }, 2000)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-abbah-charcoal mb-2">{event.title}</h3>
              <p className="text-abbah-charcoal/70">
                {event.date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                at {event.time}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-abbah-charcoal/50 hover:text-abbah-charcoal transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-abbah-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-abbah-charcoal mb-2">Thank You!</h4>
              <p className="text-abbah-charcoal/70">You've successfully signed up for this event. We'll send you a confirmation email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-abbah-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-abbah-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-abbah-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-abbah-charcoal mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-abbah-charcoal mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-abbah-light rounded-md focus:outline-none focus:ring-2 focus:ring-abbah-gold"
                  placeholder="Any dietary restrictions, questions, or special requests..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border-2 border-abbah-charcoal text-abbah-charcoal px-6 py-3 rounded-md font-semibold uppercase text-sm hover:bg-abbah-light transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 bg-abbah-gold hover:bg-abbah-gold-alt text-abbah-charcoal px-6 py-3 rounded-md font-semibold uppercase text-sm transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Signing Up...' : 'Confirm Sign Up'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
