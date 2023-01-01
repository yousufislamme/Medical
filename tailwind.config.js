/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 4s infinite",
        yani: "yani 4s infinite",
        heroAnimated: "heroAnimated 7s infinite",
        easyAni: "heroAnimated 6s infinite",
        aOne: "aOne 50s infinite",
        bOne: "bOne 50s infinite",
        cOne: "cOne 50s infinite",

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
        aOne: {
          "0%": {
            transform: "translate(0, 0)"
          },
          "10%": {
            transform: "translate(200px, -30px)"
          },
          "20%": {
            transform: "translate(300px, 0px)"
          },
          "30%": {
            transform: "translate(100px, 20px)"
          },
          "40%": {
            transform: "translate(0, 300px)"
          },
          "50%": {
            transform: "translate(200px, 150px)"
          },
          "60%": {
            transform: "translate(110px, 200px)"
          },
          "70%": {
            transform: "translate(200px, -30px)"
          },
          "80%": {
            transform: "translate(400px, -100px)"
          },
          "90%": {
            transform: "translate(-800px, 100px)"
          },
          "100%": {
            transform: "translate(0, 0)"
          },


        },
        bOne: {
          "0%": {
            transform: "translate(0, 0)"
          },
          "10%": {
            transform: "translate(-200px, 30px)"
          },
          "20%": {
            transform: "translate(-300px, 0px)"
          },
          "30%": {
            transform: "translate(-100px, -20px)"
          },
          "40%": {
            transform: "translate(0, 300px)"
          },
          "50%": {
            transform: "translate(200px, 150px)"
          },
          "60%": {
            transform: "translate(110px, 200px)"
          },
          "70%": {
            transform: "translate(200px, 30px)"
          },
          "80%": {
            transform: "translate(400px, 100px)"
          },
          "90%": {
            transform: "translate(800px, 100px)"
          },
          "100%": {
            transform: "translate(0, 0)"
          },

        },
        cOne: {
          "0%": {
            transform: "translate(0, 0)"
          },
          "10%": {
            transform: "translate(0px, -100px)"
          },
          "20%": {
            transform: "translate(10px, 20px)"
          },
          "30%": {
            transform: "translate(500px, -20px)"
          },
          "40%": {
            transform: "translate(60px, -300px)"
          },
          "50%": {
            transform: "translate(-200px, 150px)"
          },
          "60%": {
            transform: "translate(110px, 200px)"
          },
          "70%": {
            transform: "translate(-100px, 30px)"
          },
          "80%": {
            transform: "translate(0px, 100px)"
          },
          "90%": {
            transform: "translate(-50px, 500px)"
          },
          "100%": {
            transform: "translate(0, 0)"
          },
        },

      },

    },
  },
  plugins: [require("daisyui")],
}