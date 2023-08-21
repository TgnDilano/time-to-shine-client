/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        risenBlack: "#161819",
        grey: "#55565a",
        risenGreen: "#cac927",
        risenGreenDark: "#97971e",
      },
    },
  },
  plugins: [],
}