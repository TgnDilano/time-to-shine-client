/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ecaf52",
        risenBlack: "#161819",
        risenGrey: "#55565a",
        risenGreen: "#cac927",
        risenGreenDark: "#97971e",
        davysGrey: "#D9DBF1",
      },
    },
  },
  plugins: [],
};
