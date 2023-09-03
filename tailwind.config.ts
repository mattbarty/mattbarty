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
        text: "#141a17",
        primary: "#6b8e80",
        secondary: "#c8d5d0",
        accent: "#5a776b",
      },
    },
  },
  plugins: [],
};
export default config;
