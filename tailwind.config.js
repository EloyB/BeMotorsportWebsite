module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        motorblue: "#0076BD",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        raleway: "Raleway, sans-serif",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      height: ["group-hover"],
      display: ["responsive", "group-hover"],
      transitionProperty: ["hover"],
    },
  },
  plugins: [],
};
