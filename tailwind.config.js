/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '601px',  // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
}

