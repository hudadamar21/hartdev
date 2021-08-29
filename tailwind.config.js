const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gray: colors.coolGray
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
