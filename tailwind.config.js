module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: { "login-image": "url('/src/assets/providus1.png')" },
      width: {
        "login-width": "380px",
      },
      height: {
        "login-height": "500px",
        "side-height": "1024px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        lblack: "#252733",
        lgray: "#9FA2B4",
        bgray: "#F0F1F7",
        ibgray: "#FCFDFE",
        buyellow: "#F7B811",
        siblack: "#363740",
        bImage: "#E5E5E5",
        textc: "#5E5873",
        ogold: "#F9B71220",
        gold: "#F9B712",
        tblue: "#3751FF",
        sgray: "#ACAFD260",
        sgry: "#ACAFD2",
      },
      gap:{
        700: '700px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
