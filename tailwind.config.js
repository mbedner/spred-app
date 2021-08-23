module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8': '12.5%',
        '7/8': '87.5%',
      },
      fontSize: {
        '2xs': '9px',
      },
    },
  },
  variants: {
    display: ["group-hover"],
    extend: { 
    },
  },
  plugins: [],
}
