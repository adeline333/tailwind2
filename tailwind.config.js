/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Adjust the path if your HTML files are elsewhere
    './dist/**/*.html', // This ensures Tailwind scans your compiled HTML files as well
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


