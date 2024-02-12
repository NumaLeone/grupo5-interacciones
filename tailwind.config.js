/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#DDECE6",
          400: "#AACFC1",
          500: "#549E83",
          600: "#4C8E76",
          700: "#3B6F5C",
        },
        secondary: {
          300: "#DDE2EC",
          400: "#AAB7CF",
          500: "#546F9E",
          600: "#4C648E",
          700: "#3B4E6F",
        },
        greyscale: {
          white: "#FFFFFF",
          100 : "#EBEBEB",
          200: "#D6D6D6",
          300: "#AEAEAE",
          400: "#858585",
          500: "#5D5D5D",
          600: "#343434",
          translucid: "rgba(52, 52, 52, 0.89)",
        },
        state: {
          success: "#57C45B",
          error: "#FB3636",
          warning: "#F4D63A",
        }
      },
      width: {
        large: "358px",
      },
      boxShadow:{
        cardShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
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
      'sm':['0.85rem','1.2rem'],
      'navBar': '0.8rem',
      'ingredientsCard': '1.5rem',
      'ingredientName': '1.25rem',
    },
  },
  plugins: [],
};
