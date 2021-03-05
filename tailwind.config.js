module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        motorblue: "#0076BD",
        checkgreen: "#23AD31",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        raleway: "Raleway, sans-serif",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      height: ["group-hover"],
      width: ["group-hover"],
      display: ["responsive", "group-hover"],
      transitionProperty: ["hover"],
    },
  },
  plugins: [],
};
