/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000814",
        navy: "#001D3D", 
        blue: "#003566",
        gold: "#CCA000",
        lightgold: "#F0CB46",
      },
    },
  },
  plugins: [],
}