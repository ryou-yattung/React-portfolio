module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Noto: ["'Noto Serif JP', serif"],
      },
      fontSize: {
        txh1: "7rem",
        txt: "2rem",
        txts: "2.4rem",
        txf: "0.8rem",
        txfs: "1rem",
      },
      colors: {
        ftcolor: "#372F1F",
        bgcolor1: "#D9CEBB",
        bgcolor2: "#F9C270",
      },
      backgroundImage: {
        intro1: "url('img/intro.jpg')",
        intro2: "url('img/intro2.jpg')",
        aboutBg: "url('img/about_map.jpeg')",
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
