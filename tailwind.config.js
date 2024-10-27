/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["ClashDisplay", "serif"],
      },
      colors: {
        gray: "#EDEEF2",
        primary: "#5313CA",
        secondary: "#FF9963",
        accent: "#75F1F1",
        dark: "#050729",
        neutral: "#989AAE",
      },
      fontSize: {
        "1.5xl": ["22px", "33px"],
      },
      spacing: {
        5.5: "22px",
        7.5: "30px",
        18: "70px",
      },
      borderRadius: {
        "2lg": "10px",
      },
      boxShadow: {
        card: "0px 0px 50px -2px rgba(5, 7, 41, 0.11)",
      },
    },
  },
  plugins: [],
};

