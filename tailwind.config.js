/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-color": "rgb(240,249,248)",
        "menu-color1": "rgb(86,204,195)",
        "menu-color2": "rgb(255,255,255)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
