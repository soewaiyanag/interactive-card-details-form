/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  corePlugins: {
    container: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "445px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        // small
        18: "4.5rem",
        // big
        68: "17rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
      colors: {
        error: "hsl(0, 100%, 66%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        violet: "hsl(249, 99%, 64%)",
        purple: "hsl(278, 94%, 30%)",
      },
      backgroundImage: {
        "card-front": "url('/src/images/bg-card-front.png')",
        "card-back": "url('/src/images/bg-card-back.png')",
        "main-desktop": "url('/src/images/bg-main-desktop.png')",
        "main-mobile": "url('/src/images/bg-main-mobile.png')",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "768px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
