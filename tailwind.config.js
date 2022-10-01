/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {      
      transitionProperty: {
      'max-height': 'max-height',
      "brightness": "brightness"
    }},
  },
  plugins: [],
}
