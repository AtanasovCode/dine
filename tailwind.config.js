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
        'sm': "601px",
        'lg': "1199px",
      },
    },
  },
  plugins: [],
}