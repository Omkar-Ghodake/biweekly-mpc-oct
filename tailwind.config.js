/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mars: ['Mars', 'sans-serif'],
        automata: ['Automata', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
