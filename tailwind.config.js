const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'main-bg': "url('/public/img/defaultBackground.jpg')"
      }),
      colors: {
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
