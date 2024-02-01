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
      textColor: {
        grayColor: "rgb(169,179,185)",
        mintColor: "rgb(86,204,195)",
      },
      borderColor: {
        mintColor: "rgb(86,204,195)",
      },
      boxShadow: {
        custom:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.03), 0 -2px 4px -1px rgba(0, 0, 0, 0.06),0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
