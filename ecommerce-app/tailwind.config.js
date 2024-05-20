/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f7f7f7',
          700: '#333',
          900: '#111',
        },
      },
      fontSize:{
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}

