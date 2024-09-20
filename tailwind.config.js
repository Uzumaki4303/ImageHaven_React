/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave': "url('/src/assets/wave.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      height:{
        Height : '90vh',
      },

      screens: {
        'sm-max': { 'max': '599px' }, // Custom breakpoint for max-width 599px
        'md-max': { 'max': '768px' }, // Custom breakpoint for max-width 699px
      },

      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}