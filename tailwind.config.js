/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#F9F6F0',
          200: '#F5F0E6',
          300: '#EDE5D6',
          400: '#E0D4C0',
        },
        chocolate: {
          300: '#8B6B50',
          400: '#6B4C3A',
          500: '#5A3F30',
          600: '#4A3328',
          700: '#3A2820',
        },
        accent: {
          DEFAULT: '#E85C2C',
          light: '#F07040',
          dark: '#C94A20',
        },
      },
    },
  },
  plugins: [],
}