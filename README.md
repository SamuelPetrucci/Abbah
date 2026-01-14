# Abbah - Fathering for Good

A modern, clean, and minimalistic website for Abbah, a non-profit organization working towards change in communities with gaps in generational fathering.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (Hosting & Deployment)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Environment Variables

For form submissions and email functionality, you may want to set up:
- Email service API keys (Resend, SendGrid, etc.)
- Any other required environment variables

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, minimalistic design with Abbah brand colors
- **Form Handling**: Newsletter signup and contact forms ready for Vercel integration
- **SEO Optimized**: Built-in Next.js SEO features
- **Fast Performance**: Optimized for speed and Core Web Vitals

## Project Structure

```
/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   ├── Header.tsx    # Site header
│   │   └── Footer.tsx    # Site footer
│   └── lib/              # Utilities
├── public/               # Static assets
└── package.json
```

## Brand Colors

- **Dark Teal/Green**: `#1A3635` (`abbah-dark`)
- **Light Grey**: `#E0E0E0` (`abbah-light`)
- **Muted Blue-Grey**: `#7A9090` (`abbah-slate`)
- **Golden Yellow**: `#D4B04C` (`abbah-gold`)
- **Charcoal**: `#2C3E50` (`abbah-charcoal`)

## License

Copyright © Abbah, 2024 All rights reserved.
