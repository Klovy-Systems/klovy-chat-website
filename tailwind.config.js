/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-funnel-display)", "system-ui", "sans-serif"],
      },
      colors: {
        light_bg: "#eef3ff",
        light_text: "#0b0a12",
        light_border: "#0b0a1220",

        dark_bg: "#0b0a12",
        dark_text: "#eef3ff",
        dark_border: "#eef3ff20",

        primary: "#7a5bf5",
      },

      spacing: {
        spacing_xxs: "4px",
        spacing_xs: "8px",
        spacing_sm: "16px",
        spacing_md: "24px",
        spacing_lg: "32px",
        spacing_xl: "48px",
        spacing_2xl: "64px",
        spacing_3xl: "80px",
        spacing_4xl: "120px",

        button_px: "24px",
        button_py: "12px",

        section: "200px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
