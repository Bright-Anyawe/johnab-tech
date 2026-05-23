import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        panel: "#111111",
        gold: "#f6bd08",
        amberline: "#d69a00",
        muted: "#a5a5a5",
      },
      boxShadow: {
        glow: "0 18px 60px rgba(246, 189, 8, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
