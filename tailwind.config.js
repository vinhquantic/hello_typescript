/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
      },
      boxShadow: {
        zui: "0px 1px 3px #00000029",
      },
    },
  },
};
