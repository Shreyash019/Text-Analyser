/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '600px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '601px', 'max': '950px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '951px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    colors: {
      // Colors
      'white': '#ffffff',
      'black': '#000000',
      'black-gray': '#262626',
      'black-light': '#1a1a1a',
      'navy': '#000080',
      'red': '#ff0000',
      'blue': '#00bfff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray': '#8492a6', 
      'grey-light': '#cccccc',
      'grey-dark': '#404040',
      'blue_border': '#006dff',
      'yellow': '#ffff00',

      'white-input-light': '#f2f2f2',
      'linkedIn-color': '#1a53ff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        "0": "0%",
      },
    }
  },
  plugins: [],
}