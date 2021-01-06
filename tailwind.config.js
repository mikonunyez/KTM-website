const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'blender-pro': ['Blender Pro']
    },
    extend: {
      backgroundImage: theme => ({
        'main-bg': "url('img/defaultBackground.jpg')",
        'gallery-bg': "url('img/galleryBackground.jpg')",
        'xmas-bg': "url('img/christmasbackground.jpg')"
      }),

      colors: {
        orange: colors.orange,
      },
      spacing: {
        'gallery-content': '720px'
      },
      height: {
        '500px': '500px',
        '770px': '770px'
      },
      width: {
        '500px': '500px',
        '770px': '770px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
