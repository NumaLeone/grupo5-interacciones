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
          95 : "#3C3C43E3",
          90: "#484848",
          70: "#717171",
          40: "#AEAEAE",
          10: "#f8f8f8",
        },
      },
      width: {
        large: "358px",
      },
      boxShadow:{
        cardShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.55)"
      },
      fontFamily: {
        SFProText: ['SF Pro Text', 'sans'],
      },
    },
    fontSize: {
      '4xl': ['2rem', '2.25rem'], // Establece el tamaño de fuente y la altura de línea para text-4xl
      '3xl':['1.875rem','2.25rem'],
      '2xl': ['1.5rem', '1.75rem'],
      'xl':['1.25rem','1.75rem'],
      'sm':['0.875rem','1.25rem'],
      'navBar': '0.8rem',
      'ingredientsCard': '1.5rem',
      'ingredientName': '1.25rem',
    },
  },
  plugins: [],
};
