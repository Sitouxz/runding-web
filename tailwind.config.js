/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#5D5FEF',
          2: '#636499',
          3: '#121225',
        },
      },
      fontFamily: {
        logo: ['Manrope', 'sans-serif'],
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
