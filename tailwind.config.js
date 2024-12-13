/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1D3557",
        "primary-light":"rgb(29, 53, 87)",
        "secondary-light":"#2D2D2D",
        "secondary-dark":"#E63946",
        "light-gray":"#9ca6a8",
        "light-skin":"rgb(252, 246, 236)",
        "custom-orange":"#ff9e18"
      },
      boxShadow: {
        'custom': '0 9px 23px rgba(0, 149, 169, .09)',
      },
      screens:{
        "xl-2":"1710px"
      }
    },
  },
  plugins: [],
}