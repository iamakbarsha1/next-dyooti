import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3AB372",
        secondary: "#F5F5F7",
        darkPrimary: "#102C40",
        custOrange: "#FC6533",
        custYellow: "#FCBD2E",
        custBlue: "#5C91FA",
        bgGray: "#EBEBEC",
      },
      visibility: ["group-hover"],
      fontFamily: {
        // gilroy: ["var(--font-gilroy-light)", "sans-serif"],
        gilroy: ["var(--font-gilroy-normal)", ...fontFamily.sans],
        gilroyLight: ["var(--font-gilroy-light)", ...fontFamily.sans],
        gilroyBold: ["var(--font-gilroy-bold)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
