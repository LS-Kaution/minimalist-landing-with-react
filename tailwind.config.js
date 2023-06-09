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
      lineHeight: {
        10: '54px',
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
        'slideH1': 'slideH1 1s ease',
        'slideH2': 'slideH2 1s ease',
        'rotation': 'rotation 1s ease',
        'slideButtonsY': 'slideButtonsY 1s ease',
        'slideButtonsX': 'slideButtonsX 1s ease',
        'buttonsVisible': 'buttonsVisible 1s ease',
        'bgColorAnimation': 'bgColorAnimation 1s ease-in-out',
      },
      keyframes: {
        bgColorAnimation: {
          '0%': {
            visibility: 'visible',
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            visibility: 'hidden',
            opacity: '0'
          },
        },
        slideH1: {
          '0%': {transform: 'translateX(-15px)'},
          '100%': {transform: 'translateX(0px)'},
        },
        slideH2: {
          '0%': {transform: 'translateX(-30px)'},
          '100%': {transform: 'translateX(0px)'},
        },
        rotation: {
          '0%': {transform: 'rotate(-10deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        slideButtonsY: {
          '0%': {transform: 'translateY(10px)'},
          '100%': {transform: 'translateY(0px)'},
        },
        slideButtonsX: {
          '0%': {transform: 'translateX(10px)'},
          '100%': {transform: 'translateX(0px)'},
        },
        buttonsVisible: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
      },
      spacing: {
        '197': '197px',
        '577': '577px',
      },
    },
  },
  plugins: [],
}