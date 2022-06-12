/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-rgba': 'rgba(0, 0, 0, 0.6)',
        'black-rgba-1': 'rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
