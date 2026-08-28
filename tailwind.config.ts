import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070C",
        "blue-deep": "#14275C",
        "blue-bright": "#3B7DDD",
        glow: "#5FA8FF",
        leaf: "#2FA98C",
        paper: "#F6F7F5",
        slate: "#565F6E",
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
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.06)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        stamp: "stamp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 30s ease-in-out infinite reverse",
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
