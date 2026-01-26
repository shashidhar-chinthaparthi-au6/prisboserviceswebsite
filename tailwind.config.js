/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0e27', // Deep Navy (luxury primary)
          dark: '#050811',
          light: '#1a1f3a',
        },
        secondary: {
          DEFAULT: '#1a1f3a', // Charcoal Navy
          dark: '#0f1119',
          light: '#2a2f4a',
        },
        gold: {
          DEFAULT: '#d4af37', // Luxury Gold
          dark: '#b8941f',
          light: '#e5c158',
          '50': '#faf8f3',
          '100': '#f5f0e6',
        },
        accent: {
          DEFAULT: '#c9a961', // Warm Gold Accent
          dark: '#a68b4f',
          light: '#d4b877',
          '50': '#f5f2e8',
          '100': '#ebe5d1',
        },
        neutral: {
          white: '#ffffff',
          gray: '#8b8d94',
          'dark-gray': '#1a1f3a',
          charcoal: '#0f1119',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.1em',
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
        'luxury-lg': '0 25px 80px -20px rgba(0, 0, 0, 0.4)',
        'gold': '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #c9a961 100%)',
      },
    },
  },
  plugins: [],
}
