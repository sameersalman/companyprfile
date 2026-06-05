/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff', 100:'#e0e7ff', 500:'#6366f1', 600:'#4f46e5', 700:'#4338ca', 900:'#1e1b4b'
        },
        ink: { 900: '#0b0b12', 800: '#11121a', 700: '#1a1b26' }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0b0b12 0%, #1a1b26 100%)',
      }
    }
  },
  plugins: []
}
