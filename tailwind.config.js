module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "alpha":"#102520"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
