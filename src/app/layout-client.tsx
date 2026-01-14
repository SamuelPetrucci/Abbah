'use client'

import { useState } from 'react'
import ContactModal from '@/components/ContactModal'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      {children}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

