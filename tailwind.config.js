module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Noto: ["'Noto Serif JP', serif"],
      },
      fontSize: {
        txt: "2.2rem",
        txts: "1.8rem",
        txfs: "1rem",
        txf: "0.8rem",
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
        toBottom: {
          "0%": { top: "0" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [],
};
