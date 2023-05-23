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
      fontFamily: {
        garamond: "'EB Garamond', serif",
        fraunces: "'Fraunces', serif"
      },
      fontSize: {
        custom: '17px',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'white-bg': '#F2F0EB',
        'blue-bg': '#86C0D9',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
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