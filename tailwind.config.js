/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#549E83",
          90: "#65A88F",
          70: "#87BBA8",
          40: "#BBD8CD",
        },
        secondary: {
          100: "#343434",
          90: "#484848",
          70: "#717171",
          40: "#AEAEAE",
          10: "#EBEBEB",
        },
      },
      width: {
        large: "358px",
      },
      boxShadow:{
        cardShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.55)"
      },
    },
    fontSize: {
      '4xl': ['2.25rem', '2.5rem'], // Establece el tamaño de fuente y la altura de línea para text-4xl
    },
  },
  plugins: [],
};
