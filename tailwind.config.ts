import type { Config } from "tailwindcss";

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
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
} satisfies Config;
