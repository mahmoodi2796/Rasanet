module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["IRANSansWebFaNum", "Arial", "sans-serif"],
    },
    extend: {
      skew: {
        30: "50deg",
        70: "70deg",
      },
      animation: {
        bounce: "bounce 20s linear infinite",
      },
      backgroundImage: {
        heropattern: "url('/images/iPhone.png')",
      },
      boxShadow: {
        shadow: "0 1px 7px 0 rgb(0 0 0 / 16%)",
      },
    },
  },
  plugins: [],
};
