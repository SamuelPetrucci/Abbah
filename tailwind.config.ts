import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Abbah Brand Colors
        'abbah-dark': '#1A3635', // Dark teal/green
        'abbah-dark-alt': '#2F4F4F', // Alternative dark teal
        'abbah-light': '#E0E0E0', // Light grey
        'abbah-slate': '#7A9090', // Muted blue-grey
        'abbah-gold': '#D4B04C', // Golden yellow/mustard
        'abbah-gold-alt': '#D4AF37', // Alternative gold
        'abbah-charcoal': '#2C3E50', // Dark grey/charcoal for text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
