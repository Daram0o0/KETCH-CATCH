/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
    },
    plugins: [],
  },
};
