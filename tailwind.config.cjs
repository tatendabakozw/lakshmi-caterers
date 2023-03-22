/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          original: "#131921",
          dark: "#71061f",
          light: "#c8cd85",
          superdark: "#410312",
          superlight: "#da9cab",
        },
        secondary: {
          original: "#b0b850",
          dark: "#7b8138",
          light: "#ffb872",
          superdark: "#06162a",
          superlight: "#ffd6ae",
        },
        green:{
          original: '#585f31',
          dark: '#3e4322',
          superdark: "#232614",
          light: '#8a8f6f',
          superlight: '#acaf98'
        },
        services:{
          green: '#a9b364'
        }
      },
    },
  },
  plugins: [],
}
