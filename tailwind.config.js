/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0095a9",
        "primary-light":"rgb(229, 240, 241)",
        "secondary-light":"#717b7c",
        "secondary-dark":"#373e3f",
        "light-gray":"#9ca6a8",
        "light-skin":"rgb(252, 246, 236)",
        "custom-orange":"#ff9e18"
      },
      boxShadow: {
        'custom': '0 9px 23px rgba(0, 149, 169, .09)',
      },
    },
  },
  plugins: [],
}