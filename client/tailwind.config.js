/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'esm': '500px',
        'sm': '640px',
        'md': '768px',
        'lmd': '880px',
        'lg': '1024px',
        'pxl': '1200px',
        'xl': '1280px',
        '2xl': '1370px',
        '4xl': '1536px'
      },
    },
  },
  darkMode: 'class', // Correct spelling
  plugins: [],
}

