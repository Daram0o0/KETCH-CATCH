import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#494271",
        white: "#ffffff",
        FF9686: "#FF9686",
        red: {
          50: "#fbe6e6",
          100: "#fec5ba",
          200: "#fb9f90",
          300: "#f97866",
          400: "#f85847",
          500: "#f6322b",
          600: "#ec2c27",
          700: "#de2522",
          800: "#d01d1e",
          900: "#b60a15",
        },
        blue: {
          500: "#2196F3",
        },
        purple: {
          50: "#f1edfc",
          100: "#dbd3f8",
          200: "#c3b5f5",
          300: "#aa96f2",
          400: "#957ded",
          500: "#6944da",
          600: "#765fe1",
          700: "#6856d6",
          800: "#5c50ce",
          900: "#4844bf",
        },
        violet: {
          50: "#ebebf4",
          100: "#cdcbe3",
          200: "#adaad0",
          300: "#8e89bd",
          400: "#786eae",
          500: "#6454a3",
          600: "#5e4b99",
          700: "#55418d",
          800: "#4d3782",
          900: "#3f256d",
        },
        black: "#000",
        gold: "#FFB836",
        silver: "#D6CFC7",
        bronze: "#D69888",
      },
      keyframes: {
        tearDrop: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(50px)", opacity: "0" },
        },
        ghostMove: {
          "0%": { transform: "translate(-200%, 0%)", easing: "ease-in-out" },
          "12.5%": {
            transform: "translate(-150%, -30%)",
            easing: "ease-in-out",
          },
          "25%": { transform: "translate(-100%, 30%)", easing: "ease-in-out" },
          "37.5%": {
            transform: "translate(-50%, -30%)",
            easing: "ease-in-out",
          },
          "50%": { transform: "translate(0%, 30%)", easing: "ease-in-out" },
          "62.5%": { transform: "translate(50%, -30%)", easing: "ease-in-out" },
          "75%": { transform: "translate(100%, 30%)", easing: "ease-in-out" },
          "87.5%": {
            transform: "translate(150%, -30%)",
            easing: "ease-in-out",
          },
          "100%": { transform: "translate(200%, 30%)", easing: "ease-in-out" },
        },

        colorChange: {
          "0%": { fill: "#FF8969" },
          "25%": { fill: "#FFBF69" },
          "50%": { fill: "#FFE569" },
          "75%": { fill: "#69FFB3" },
          "100%": { fill: "#69C8FF" },
        },
      },
      animation: {
        tear: "tearDrop 1.5s ease-in-out infinite",
        loading:
          "ghostMove 6s ease-in-out infinite,colorChange 8s ease-in-out infinite",
      },
    },
    plugins: [],
  },
};
