/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 4s infinite",
        yani: "yani 4s infinite",
        heroAnimated: "heroAnimated 7s infinite",
        easyAni: "heroAnimated 6s infinite",

      },
      keyframes: {

        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(50px, 40px) scale(0.7)",
          },
          "66%": {
            transform: "translate(50px, -80px) scale(0.5)",
          },
          "100%": {
            transform: "translate(0, 0)scale(1)",
          },
        },
        yani: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(0.7)",
          },
          "66%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        heroAnimated: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translate(10px, 10px)",
          },
          "66%": {
            transform: "translate(0, -20px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          }
        },
        easyAni: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translate(0, 10px)",
          },
          "66%": {
            transform: "translate(0, 20px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          }
        },
      },

    },
  },
  plugins: [require("daisyui")],
}