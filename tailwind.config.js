/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      width: {
        'item': 'calc(100% - 72px)',
      }
    },
    maxHeight: {
      'cont': 'calc(100vh - 120px)',
    },
    
  },
  plugins: [],
}

