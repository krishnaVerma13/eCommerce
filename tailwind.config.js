/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        segoeScript: ['Segoe Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

