import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContactProvider } from '@/components/ContactProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abbah - Fathering for Good',
  description: 'A non-profit working towards change in communities with gaps in generational fathering.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      { url: '/browserIcon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/browserIcon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/browserIcon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ContactProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContactProvider>
      </body>
    </html>
  )
}
