module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans JP"],
      },
      colors: {
        ftcolor: "#372F1F",
        bgcolor1: "#D9CEBB",
        bgcolor2: "#F9C270",
      },
      backgroundImage: {
        intro1: "url('img/intro.jpg')",
        intro2: "url('img/intro.jpg2')",
      },
      keyframes: {
        aaa: {
          "0%": { top: "0" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [],
};
