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
        background: "#F1F4F3",
        text: "#070908",
        primary: "#00A881",
        secondary: "#dcdee4",
        accent: "#6a728a",
      },
    },
  },
  plugins: [],
};
export default config;
