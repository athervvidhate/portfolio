/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Avenir Next"', 'Avenir', '"Segoe UI"', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        notion: {
          bg: '#191919',
          lightBg: '#fbfbfa',
          hover: '#252525',
          pill: '#2d2d2d',
          text: '#e3e3e3',
          muted: '#999999',
          link: '#58a6ff',
        }
      }
    },
  },
  plugins: [],
}
