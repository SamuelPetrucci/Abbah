import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message, type } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'First name, last name, email, and message are required' }, { status: 400 })
    }

    const name = `${firstName} ${lastName}`

    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // TODO: Integrate with Vercel's form handling or email service
    // For now, we'll just log it. You can integrate with:
    // - Vercel Forms (if using Vercel Pro)
    // - Resend API (recommended for Next.js)
    // - SendGrid
    // - Or any other email service

    console.log('Contact form submission:', { name, email, subject, message, type })

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
