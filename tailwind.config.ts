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
        text: "#1C0202",
        primary: "#305454",
        secondary: "#E2E2E9",
        accent: "#11C069",
      },
    },
  },
  plugins: [],
};
export default config;
