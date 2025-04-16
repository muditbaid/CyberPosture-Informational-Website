/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#1A1A1A',
        accent: '#00FFA3',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
} 