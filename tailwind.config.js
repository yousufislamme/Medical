/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 4s infinite",
        yani: "yani 4s infinite",

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
      },

    },
  },
  plugins: [],
}