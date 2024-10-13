/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mars: ['Mars', 'sans-serif'],
        automata: ['Automata', 'sans-serif'],
        batman: ['Batman', 'sans-serif'],
        jersey: ['Jersey', 'sans-serif'],
        crash: ['Crash', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
