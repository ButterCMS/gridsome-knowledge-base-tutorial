// ./tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Moderat", ...defaultTheme.fontFamily.sans],
        heading: ["Millik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        rhino: {
          50: "#f2f5fc",
          100: "#e2e9f7",
          200: "#cbd8f2",
          300: "#a7bfe9",
          400: "#7d9fdd",
          500: "#5e7ed3",
          600: "#4a65c6",
          700: "#4053b5",
          800: "#394694",
          900: "#2a3362",
          950: "#232748",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
