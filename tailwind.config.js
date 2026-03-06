/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        'acid': '#CAFF00',
        'gray-750': '#374151',
      },
    },
  },
  plugins: [],
}
