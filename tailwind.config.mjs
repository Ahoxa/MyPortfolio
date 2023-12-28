/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        noticia: ["Noticia Text", "serif"],
        cardo: ["Cardo", "serif"],
      },
      colors: {
        beige: {
          100: "#EEE2B6",
          200: "#D4CCAC",
        },
        navy: {
          100: "#295C82",
          200: "#1D2B58",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
