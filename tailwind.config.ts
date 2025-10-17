import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4640DE",
          dark: "#3730A3",
          light: "#6366F1",
        },
        secondary: {
          DEFAULT: "#26A4FF",
        },
        accent: {
          cyan: "#56CDAD",
          yellow: "#FFB836",
        },
      },
    },
  },
  plugins: [],
};
export default config;
