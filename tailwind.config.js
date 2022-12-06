/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--color-primary)',
          2: 'var(--color-primary)',
          3: 'var(--color-primary)',
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
