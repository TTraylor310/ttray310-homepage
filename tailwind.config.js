/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#041f60',
        lightBlue: '#2D61DD',
        lighterBlack: '#1F1F1F',
        skillBG: '#f7f4f3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
