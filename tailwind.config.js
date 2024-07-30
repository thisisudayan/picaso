const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4caf50',
          dark: '#1b5e20',
        },
        secondary: {
          light: '#ff5722',
          dark: '#e64a19',
        },
      },
    },

  },
  darkMode: "class",
  plugins: [nextui()]
}

