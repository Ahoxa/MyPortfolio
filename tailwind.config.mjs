/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        noticia: ["Noticia Text", "serif"],
        cardo: ["Cardo", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
