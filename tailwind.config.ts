import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        "blue-deep": "#12306B",
        "blue-bright": "#2F6FCB",
        leaf: "#2FA98C",
        paper: "#F5F7FA",
        slate: "#58606E",
        line: "#DEE3EA",
        gold: "#B98D2E",
      },
      fontFamily: {
        display: ["var(--font-pretendard)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      backgroundImage: {
        "shield-gradient": "linear-gradient(135deg, #12306B 0%, #2F6FCB 100%)",
      },
      keyframes: {
        stamp: {
          "0%": { opacity: "0", transform: "rotate(-14deg) scale(0.85)" },
          "60%": { opacity: "1", transform: "rotate(3deg) scale(1.03)" },
          "100%": { opacity: "1", transform: "rotate(0deg) scale(1)" },
        },
      },
      animation: {
        stamp: "stamp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
