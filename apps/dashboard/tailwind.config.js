/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0b1120",
        panel: "#111a2c",
        accent: "#818cf8",
      },
    },
  },
  plugins: [],
};