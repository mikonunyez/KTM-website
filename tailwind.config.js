const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'blender-pro': ['Blender Pro'],
    },
    extend: {
      backgroundImage: theme => ({
        'main-bg': "url('/public/img/defaultBackground.jpg')",
        'gallery-bg': "url('/public/img/galleryBackground.jpg')"
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
