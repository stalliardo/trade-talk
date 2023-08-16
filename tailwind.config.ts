/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'custom_main': '#080f25',
        'custom_secondary': '#101935',
        'custom_border': '#343b4f',
        'custom_button': '#212c4d',
        'custom_button_hover': '#6c72ff',
      },
    },
  },
  plugins: [],
}