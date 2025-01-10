/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#063E73",
        "secondary-50" : "#fdf9ed",
        "secondary-100" : "#FAEECB",
        "secondary-200" : "#F4DD93",
        "secondary-300" : "#EEC457",
        "secondary-400" : "#eab035",
        "secondary-500" : "#e3901d",
        "secondary-600" : "#c96e16",
        "secondary-700" : "#a74f16",
      },
      fontFamily:{
        roboto:["Roboto","serif"]
      }
    },
  },
  plugins: [],
}

