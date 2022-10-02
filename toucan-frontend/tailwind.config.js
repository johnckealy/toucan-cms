const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0066ff',
        'secondary': '#c5ff3e',
        'greyed': '#7c7c7c',
        'default-bg': '#f8f8ff',
        'secondary-bg': '#ffffff',
        'default': 'black',
        'default-hover': 'black',
        'default-light': '#f8f8ff',
        'default-light-hover': '#f8f8ff',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      // transitionProperty: {
      //   'width': 'width',
      //   'height': 'height',
      // }
    },
    // backgroundImage: {
    //   'hero-pattern': "url('/images/qambio-background.jpg')",
    // }
    // fontFamily: {
    //   arima: ['Arima', ...defaultTheme.fontFamily.sans],
    // },
  },
  plugins: [],
}
