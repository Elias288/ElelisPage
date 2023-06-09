/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': "#000716",
        'dark-blue': "#000714",
        'light-blue': "#001336cf",
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addComponents }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      }),
        addComponents({
          'p': {
            padding: '1rem 0 .3rem'
          },
          'a': {
            color: '#545ff4',
            '&:hover': {
              color: '#949cff'
            }
          }
        })
    }),

  ],
}

