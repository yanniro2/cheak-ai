import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#6608e1",
        secondry: "#33ceff",
        gray: "#e1e1e1",
        dark: "#030014",
        lighDark: "#0f172a",
      },
    },
  },
  plugins: [],
};
export default config;
