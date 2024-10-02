/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"],
      },
      screens:{
        'ms':'375px',
        'ml':'362px'
      }
    },
  },
  plugins: [],
};
