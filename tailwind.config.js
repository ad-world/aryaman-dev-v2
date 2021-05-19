module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      blue: {
        dark: '#5f85db',
        light: '#90b8f8',
      },
      grey: {
        dark: '#26282b',
        light: '#353941'
      },
      white: '#FFFFFF'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}