/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2626', // Red (main color for logo, headings)
          dark: '#b91c1c',
          light: '#ef4444',
        },
        secondary: {
          DEFAULT: '#1e3a8a', // Navy Blue (for buttons, accents)
          dark: '#1e293b',
          light: '#3b82f6',
        },
        neutral: {
          white: '#ffffff',
          gray: '#6b7280',
          'dark-gray': '#1f2937',
        },
      },
    },
  },
  plugins: [],
}
