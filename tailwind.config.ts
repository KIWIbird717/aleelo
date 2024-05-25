import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient-yellow": "linear-gradient(180deg, #FEF5C9 0%, #FCC400 100%)",
        "button-gradient-orange": "linear-gradient(180deg, #ffd866 0%, #cb6b39 100%)",
        "button-gradient-turquoise": "linear-gradient(180deg, #5db2ac 0%, #336069 100%)",
        "button-gradient-blue": "linear-gradient(180deg, #76D9EF 0%, #3A638A 100%)",
        "button-gradient-deep-blue": "linear-gradient(180deg, #65AFFF 0%, #335C81 100%)",
        "button-gradient-red": "linear-gradient(180deg, #FF896F 0%, #E84855 100%)",
        "gradient-borders": "linear-gradient(180deg, #b0cbcf 0%, #e3f1f0 100%)",
        "gradient-border-active": "linear-gradient(180deg, #a1c6cc 0%, #387682 100%)",
        "gradient-border-error": "linear-gradient(180deg, #FF896F 0%, #E84855 100%)",
        "gradient-border-disabled": "linear-gradient(180deg, #B0CBCF 0.01%, #E3F1F0 100%)",
      },
      borderColor: {
        gold: "#F6E6B2",
      },
      boxShadow: {
        turquoise: "2px 2px 8px 0px #276595 inset",
        orange: "-8px -8px 13px 0px #cb6b39 inset",
        input: "0px 3px 8px 0px rgba(63, 130, 146, 0.5) inset",
        inputActive:
          "0px 0px 15px 0px rgba(255, 255, 255, 1) 0px 3px 8px 0px rgba(63, 130, 146, 0.5) inset",
        inputError: "0px 3px 8px rgba(159, 35, 27, 0.5) inset",
      },
      dropShadow: {
        input: "0px 3px 8px 0px #3F829280 inset",
        dropdown: "0px 8px 30px 0px #00485F4D",
      },
      colors: {
        placeholder: "#78889A",
        gold: "#F6E6B2",
      },
    },
    colors: {
      // Primary palette
      mint: {
        DEFAULT: "var(--mint-default)",
        950: "var(--mint-950)",
        900: "var(--mint-900)",
        800: "var(--mint-800)",
        700: "var(--mint-700)",
        600: "var(--mint-600)",
      },
      brown: {
        DEFAULT: "var(--brown-default)",
        900: "var(--brown-900)",
        800: "var(--brown-800)",
        700: "var(--brown-700)",
        600: "var(--brown-600)",
      },
      grey: {
        DEFAULT: "var(--grey-default)",
        900: "var(--grey-900)",
        800: "var(--grey-800)",
        700: "var(--grey-700)",
        600: "var(--grey-600)",
      },
      white: {
        DEFAULT: "var(--white-default)",
      },
      // Secondary colors
      turquoise: {
        DEFAULT: "var(--turquoise-default)",
        900: "var(--turquoise-900)",
        800: "var(--turquoise-800)",
        700: "var(--turquoise-700)",
        600: "var(--turquoise-600)",
        500: "var( --turquoise-500)",
      },
      green: {
        DEFAULT: "var(--green-default)",
        900: "var(--green-900)",
        800: "var(--green-800)",
        700: "var(--green-700)",
        600: "var(--green-600)",
      },
      yellow: {
        DEFAULT: "var(--yellow-default)",
        900: "var(--yellow-900)",
        800: "var(--yellow-800)",
        700: "var(--yellow-700)",
        600: "var(--yellow-600)",
      },
      orange: {
        DEFAULT: "var(--orange-default)",
        900: "var(--orange-900)",
        800: "var(--orange-800)",
        700: "var(--orange-700)",
        600: "var(--orange-600)",
      },
      red: {
        DEFAULT: "var(--red-default)",
        950: "var(--red-950)",
        900: "var(--red-900)",
        800: "var(--red-800)",
        700: "var(--red-700)",
        600: "var(--red-600)",
      },
      blue: {
        DEFAULT: "var(--blue-default)",
        900: "var(--blue-900)",
        800: "var(--blue-800)",
        700: "var(--blue-700)",
        600: "var(--blue-600)",
        500: "var(--blue-500)",
      },
    },
    textColor: ({ theme }) => ({
      ...theme("colors"),
    }),
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow-yellow": {
          textShadow: "0px 1px 2px rgba(255, 255, 255, 1)",
        },
        ".text-shadow-orange": {
          textShadow: "0px 1px 2px rgba(165, 54, 30, 1)",
        },
        ".text-shadow-green": {
          textShadow: "0px 1px 2px rgba(17, 61, 95, 1)",
        },
        ".text-shadow-snow": {
          textShadow: "0px 1px 1px rgba(28, 55, 61, 0.5) inner",
        },
        ".text-shadow-blue": {
          textShadow: "0px 1px 2px rgba(43, 58, 103, 1)",
        },
        ".text-shadow-red": {
          textShadow: "0px 1px 2px rgba(170, 25, 34, 1)",
        },
      };

      addUtilities(newUtilities);
    }),
    // ({ addAtributes }) => {
    //   const newUtilities = {
    //     ".text-shadow-yellow": {
    //       textShadow: "0px 1px 2px rgba(255, 255, 255, 1)",
    //     },
    //     ".text-shadow-orange": {
    //       textShadow: "0px 1px 2px rgba(165, 54, 30, 1)",
    //     },
    //     ".text-shadow-green": {
    //       textShadow: "0px 1px 2px rgba(17, 61, 95, 1)",
    //     },
    //     ".text-shadow-snow": {
    //       textShadow: "0px 1px 1px rgba(28, 55, 61, 0.5) inner",
    //     },
    //     ".text-shadow-blue": {
    //       textShadow: "0px 1px 2px rgba(43, 58, 103, 1)",
    //     },
    //     ".text-shadow-red": {
    //       textShadow: "0px 1px 2px rgba(170, 25, 34, 1)",
    //     },
    //   };

    //   addAtributes(newUtilities, ["responsive", "hover"]);
    // },
  ],
};
export default config;
