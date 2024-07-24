// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    screens: {
      lg: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "450px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        mOrange: "#fb8500",
        mGreen: "#c5e87c",
      },
    },
  },
  plugins: [],
};
