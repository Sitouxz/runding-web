/** @type {import('tailwindcss').Config} */
require('@mertasan/tailwindcss-variables');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--color-primary)',
          2: 'var(--color-primary)',
          3: 'var(--color-tertiary)',
        },
      },
      fontFamily: {
        logo: ['Manrope', 'sans-serif'],
      },
    },
    variables: {
      DEFAULT: {
        color: {
          primary: '#5D5FEF',
          secondary: '#636499',
          tertiary: '#121225',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: ['@mertasan/tailwindcss-variables'],
};
