/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#EA454C", // Màu chính
          500: "#EA454C",
          transparent: "rgba(233, 68, 75, 0.25)", 
        }
      }
    },
  },
  plugins: [],
}