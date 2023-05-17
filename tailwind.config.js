/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      width: {
        'footer': 'calc(100% - 44px)',
        'inp': 'calc(100% - 36px)',
        'item': 'calc(100% - 72px)',
        'chat': 'calc(100% - 320px)',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        opacity: 'opacity .5s ease forwards',
      }
    },
    maxHeight: {
      'cont': 'calc(100vh - 174px)',
      'body': 'calc(100vh - 128px)',
    },
    minHeight: {
      'cont': 'calc(100vh - 174px)',
      'body': 'calc(100vh - 128px)',
    },
    
  },
  plugins: [],
}

