/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        textNormal: "#2E2E2E",
        textHover: "#FFECEC",
        description: "#A4A2AA",
        bgNormal: "#FF4D6D",
        bgHover: "#D90452",
        cardBg: "#FFF0F5",
        cardBorder: "#FFC0CB",
      },
    },
  },
  plugins: [],
};
