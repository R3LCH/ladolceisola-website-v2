/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E88E5',
          dark: '#1565C0',
          light: '#42A5F5',
        },
        secondary: {
          DEFAULT: '#FF6F20',
          dark: '#E65100',
          light: '#FF8A50',
        },
        accent: {
          DEFAULT: '#FFC857',
          dark: '#FFB300',
          light: '#FFD54F',
        },
        neutral: {
          cream: '#FAF8F3',
          charcoal: '#2C3E50',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        menu: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'flip-page': 'flipPage 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flipPage: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(-180deg)' },
        },
      },
    },
  },
  plugins: [],
}
