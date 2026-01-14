'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import ContactModal from './ContactModal'

interface ContactContextType {
  openContact: () => void
  closeContact: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within ContactProvider')
  }
  return context
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openContact = () => setIsOpen(true)
  const closeContact = () => setIsOpen(false)

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContact} />
    </ContactContext.Provider>
  )
}

