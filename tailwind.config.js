/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
      inter: ["Inter"],
      cursive: ["Sacramento"],
      monts: ["Montserrat"],
    },
    colors: {
      white: "#eeeeee",
      dark: "#222831",
      "dark-gray": "#393e46",
      primary: "#d65a31",
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;
