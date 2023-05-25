/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      robotoMono: ['Roboto Mono']
    },
    extend: {
      colors: {
        dm: '#151C2F',
        dmBgContent: '#1F2B48',
        dmSearchBtn: '#047BFF'
      }
    }
  },
  plugins: []
}
