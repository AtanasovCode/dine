/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        'beaver': "#9e7f66",
        'cod-gray': "#111111",
        //secondary
        'mirage': "#17192b",
        'ebony-clay': "#242b37",
        'shuttle-gray': "#5c6779",
        'hero-background': "#111111",
      },
      fontFamily: {
        'spartan': "League Spartan",
      },
      screens: {
        'xs': "500px",
        'sm': "601px",
        'md': "825px",
        'lg': "1199px",
      },
      boxShadow: {
        'picture': '30px 20px 12px 10px rgba(0, 0, 0, .6)', // Adjust values as needed
      },
    },
  },
  plugins: [],
}