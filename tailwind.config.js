module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#EFEFEF",
      },
      screens: {
        smmd: "670px",
        lgxl: "1220px",
        cutOff: "1200px",
        smsm: [{ min: "0px", max: "440px" }],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineClamp: {
        7: "7",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
