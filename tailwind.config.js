// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        "segoe-print": "'Segoe Print'",
        poppins: "Poppins",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      violet: { "100": "#a1a3ef", "200": "#ea52c6" },
      gray: {
        "100": "#808080",
        "200": "#707070",
        "300": "#6a6a6a",
        "400": "#5a5454",
        "500": "#3b3735",
        "600": "#163235",
        "700": "#101010",
      },
      indigo: "#3a0c80",
    },
    fontSize: {
      "7xs": "13px",
      "6xs": "14px",
      "5xs": "15px",
      "4xs": "16px",
      "3xs": "18px",
      "2xs": "20px",
      xs: "22px",
      sm: "24px",
      base: "26px",
      lg: "33px",
      xl: "38px",
    },
  },
  corePlugins: { preflight: false },
};