/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color" : "#3CB371",
        "base-color" : "#79CF9F",
        "bold-base-color" : "#72CC82",
        "accent-color" : "#0C964A",
        "bold-accent-color" : "#109972",
      },
      fontFamily: {
        nanumGothic: ["NanumGothic-Regular"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};