// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all JSX/JS files are scanned
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
