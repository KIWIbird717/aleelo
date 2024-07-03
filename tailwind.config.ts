import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-green":
          "linear-gradient(180deg, rgba(38, 79, 88, 0.50) 0%, rgba(103, 182, 179, 0.50) 100%)",
        "gradient-white":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
        "button-gradient-yellow": "linear-gradient(180deg, #FEF5C9 0%, #FCC400 100%)",
        "button-gradient-orange": "linear-gradient(180deg, #ffd866 0%, #cb6b39 100%)",
        "button-gradient-orange-reverse": "linear-gradient(180deg, #cb6b39 0, #ffd866 100%)",
        "button-gradient-turquoise": "linear-gradient(180deg, #5db2ac 0%, #336069 100%)",
        "button-gradient-blue": "linear-gradient(180deg, #76D9EF 0%, #3A638A 100%)",
        "button-gradient-deep-blue": "linear-gradient(180deg, #65AFFF 0%, #335C81 100%)",
        "button-gradient-red": "linear-gradient(180deg, #FF896F 0%, #E84855 100%)",
        "button-selected": "linear-gradient(90deg, #A1C6CC 0%, #387682 100%)",
        avatar: "linear-gradient(180deg, #A1C6CC 0%, #387682 100%)",
        "gradient-borders": "linear-gradient(180deg, #b0cbcf 0%, #e3f1f0 100%)",
        "gradient-border-active": "linear-gradient(180deg, #a1c6cc 0%, #387682 100%)",
        "gradient-border-error": "linear-gradient(180deg, #FF896F 0%, #E84855 100%)",
        "gradient-border-disabled": "linear-gradient(180deg, #B0CBCF 0.01%, #E3F1F0 100%)",
        "gradient-checkbox-active": "linear-gradient(180deg, #FEF5C9 0%, #FCC400 100%)",
        "gradient-switch-unchecked": "linear-gradient(180deg, #78889A 0%, #BFCBD3 100%)",
        "gradient-slider":
          "linear-gradient(180deg, rgba(161, 198, 204, 0.5) 0%, rgba(56, 118, 130, 0.5) 100%)",
        "gradient-throw": "linear-gradient(180deg, #E3E7EA 0%, #BFCBD3 100%)",
        "gradient-modal-sheet": "linear-gradient(180deg, #C9E2E7 0.01%, #A1C6CC 92.81%)",
        "gradient-border-edit":
          "linear-gradient(180deg, rgba(123, 199, 196, 0.5) 0%, rgba(62, 137, 141, 0.5) 100%)",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientMove: "gradientMove 3s ease infinite",
      },
      borderColor: {
        gold: "#F6E6B2",
      },
      boxShadow: {
        turquoise: "2px 2px 8px 0px #276595 inset",
        orange: "-8px -8px 13px 0px #cb6b39 inset",
        input: "0px 3px 8px 0px rgba(63, 130, 146, 0.5) inset",
        inputFocus: "0px 3px 8px 0px rgba(63, 130, 146, 0.7) inset", // это тень при фокусе
        inputActive:
          "0px 0px 15px 0px rgba(255, 255, 255, 1), 0px 3px 8px 0px rgba(63, 130, 146, 0.5) inset",
        inputError: "0px 3px 8px rgba(159, 35, 27, 0.5) inset",
        options: "0px 8px 30px 0px #00485F4D",
        checkboxActive:
          "0px 8px 14px -3px #214E564D, 1px 1px 6px 0px #F1AA13 inset, -4px -4px 10px 0px #CF2F2F66 inset",
        switch:
          "0px 3px 5px 0px rgba(134, 76, 69, 0.3), 1px 1px 7px 0px rgba(246, 230, 178, 1) inset, -3px -3px 5px 0px rgba(203, 107, 57, 0.3) inset",
        switchChecked: "0px 1px 4px 0px rgba(134, 76, 69, 1) inset",
        switchUnchecked: "0px 1px 4px 0px rgba(0, 0, 0, 0.25) inset",
        switchUncheckedCircle:
          "0px 3px 5px -1px rgba(120, 136, 154, 0.4), 1px 1px 7px 0px rgba(191, 203, 211, 0.5) inset, -3px -3px 5px 0px #D0DAE1 inset",
        slider:
          "0px 2px 4px 0px rgba(59, 109, 147, 0.4), 0px 0px 6px 0px rgba(200, 223, 238, 1) inset, -2px -2px 4px 0px rgba(197, 215, 226, 1) inset",
        sliderText: "0px 1px 2px 0px rgba(28, 55, 61, 0.8) inset",
        dialogOnBoarding: "0px 8px 14px 0px rgba(4, 53, 69, 0.45)",
        white: "0px 1px 1px 0px rgba(255, 255, 255, 0.85)",
        throw:
          "0px 8px 14px -3px rgba(115, 158, 165, 0.8), 2px 2px 8px 0px rgba(120, 136, 154, 1) inset, -8px -8px 13px 0px rgba(126, 143, 163, 1) inset",
        buttonEdit:
          "0px 7px 13px -2px rgba(17, 76, 95, 0.3), 1px 1px 7px 0px rgba(86, 145, 163, 0.5) inset, -7px -7px 9px 0px rgba(53, 121, 131, 0.3) inset",
        element:
          "0px 8px 14px -3px rgba(56, 117, 130, 0.47), 2px 2px 8px 0px rgba(39, 95, 146, 1) inset, -8px -8px 13px 0px rgba(33, 49, 80, 0.5) inset",
        elementHappy:
          "0px 8px 14px -3px rgba(33, 78, 86, 0.3), 0px 1px 4px 0px rgba(241, 170, 19, 1) inset, 0px -5px 10px 0px rgba(207, 47, 47, 0.4) inset",
        audioBtn:
          "0px 8px 14px -3px rgba(17, 76, 95, 0.45), 2px 2px 8px 0px rgba(86, 145, 163, 0.5) inset, -8px -8px 10px 0px rgba(53, 121, 131, 0.3) inset",
        audioImage: "0px 4px 24px 0px rgba(0, 0, 0, 0.6) inset",
        shadowGreen:
          "0px 8px 14px -3px rgba(17, 61, 95, 0.4), 2px 2px 8px 0px rgba(59, 109, 147, 1) inset, -8px -8px 13px 0px rgba(37, 95, 139, 1) inset",
        modalWindow:
          "8px 8px 20px 0px rgba(40, 84, 94, 0.5), -6px -6px 17px 0px rgba(168, 205, 207, 1) inset, 3px 2px 8px 0px rgba(214, 235, 236, 1) inset, -3px -2px 4px 0px rgba(255, 255, 255, 0.25) inset",
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
        940: "var(--mint-940)",
        900: "var(--mint-900)",
        800: "var(--mint-800)",
        750: "var(--mint-750)",
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
        500: "var(--turquoise-500)",
        400: "var(--turquoise-400)",
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
        950: "var(--yellow-950)",
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
        850: "var(--blue-850)",
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
        ".text-shadow-gold": {
          textShadow: "0px 1px 2px rgba(28, 55, 61, 0.8)",
        },
        ".text-shadow-light": {
          textShadow: "0px 1px 1px rgba(255, 255, 255, 0.85)",
        },
        ".text-shadow-red-two": {
          textShadow: "0px 1px 2px rgba(165, 54, 30, 1)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
