/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Sora', 'sans-serif'],
      },
    }
  },
  plugins: [
  require('@tailwindcss/container-queries'),
],
}
