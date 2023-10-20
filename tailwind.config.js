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
    },
    fontSize: {
      small: "12px",
      medium: "20px",
      large: "30px",
    },
  },
  plugins: [],
};
