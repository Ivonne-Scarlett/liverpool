/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinkLiverpool': '#E821A6',
        'grayDark': '#2A2729',
        'grayLight': '#736B70',
      },
    },
  },
  plugins: [],
}
