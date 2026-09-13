import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070C",
        navy1: "#061021",
        navy2: "#0D1B30",
        navy2b: "#0C1A2E",
        navy3: "#101A2B",
        navy3b: "#080D16",
        brand: "#075FFF",
        brandHover: "#0756E8",
        cyan: "#35C8FF",
        muted: "#A9B9CE",
        positive: "#8FFFC3",
        negative: "#FF5B61",
        light: "#F4F7FB",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
