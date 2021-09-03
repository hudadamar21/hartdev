const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Bebas Neue', 'cursive'],
    },
    extend: {
      colors: {
        gray: colors.coolGray
      },
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
