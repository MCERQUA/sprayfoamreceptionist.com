import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        amber: "#C77C2E",
        amberDark: "#A0631F",
        moss: "#5C6B4A",
        mossDark: "#465237",
        terracotta: "#A24E32",
        charcoal: "#26201A",
        paper: "#F7F0E3",
        paperRaised: "#ECE1CC",
        ink: "#2A231A",
        inkSoft: "#5E5443",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
