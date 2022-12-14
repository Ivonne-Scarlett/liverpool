/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'pinkLiverpool': '#CC0F74',
        'pinkLiverpool': '#D3137A',
        'grayDark': '#2A2729',
        'grayLight': '#736B70',
        'grayFooter': '#5F5B5D',
        'grayFooterDark': '#4B4749',
      },
      backgroundImage: {
        'femaleIndex': "url('/img/female.jpg')",
        'maleIndex': "url('/img/male.jpeg')",
      },
    },
  },
  plugins: [],
}
