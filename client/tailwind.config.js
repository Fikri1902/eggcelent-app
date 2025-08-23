/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'eggcelent-brown': '#7A5A2B',
        'eggcelent-yellow': '#E2B584',
        'eggcelent-cream': '#F8F2E7',
      },
    },
  },
  plugins: [],
}