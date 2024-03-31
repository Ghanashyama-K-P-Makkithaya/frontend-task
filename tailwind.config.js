/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

      'ltmd': { 'max': '768px' }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#69477a',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'red':'#ff4040',
      'orange':'#ff7f50',
      'cyan':'#18a7b5',
      'olive':'#d2b48c',
      'half-black':"#00000070",
      'black' : "#000000"
    },
    extend: {
      rotate: {
        '10': '10deg',
      },
    },
  },
  plugins: [],

}

