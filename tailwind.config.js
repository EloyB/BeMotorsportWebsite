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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
