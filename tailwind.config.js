/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "hero-image": "url('/background.png')"
      }
    },
  },
  plugins: [],
}

