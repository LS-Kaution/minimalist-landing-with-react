/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(45deg, #F2F0EB 54%, #86C0D9 100%)'
      },
      colors: {
        'white-bg': '#F2F0EB',
        'blue-bg': '#86C0D9',
      },
      animation: {
        'rotation': 'rotation 1s ease',
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}