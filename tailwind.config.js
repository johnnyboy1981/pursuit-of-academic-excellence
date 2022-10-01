/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/layout/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-overlay': 'rgba(0,0,0,0.3)',
        'button' : 'rgba(61,52,57,1)',
        'button-hover' : 'rgba(102,87,96,1)'
      },
      fontFamily: {
        'alkalami': ['Alkalami', 'system-ui'],
      }
    },
  },
  plugins: [],
}
