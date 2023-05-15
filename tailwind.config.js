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
      }
    },
    maxHeight: {
      'cont': 'calc(100vh - 120px)',
      'body': 'calc(100vh - 128px)',
    },
    
  },
  plugins: [],
}

