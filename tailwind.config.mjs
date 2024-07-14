const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mOrange: "#fb8500",
        mGreen: "#c5e87c",
      },
      darkMode: "selector",
    },
  },
  plugins: [],
};
