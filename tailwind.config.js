/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary': '#3b82f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

