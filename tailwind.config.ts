import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#101418",
          900: "#151b22",
          800: "#202832",
          700: "#33404d",
          600: "#51606e",
          500: "#76828f",
          200: "#d7dde3",
          100: "#edf1f4",
          50: "#f7f9fb",
        },
        pulse: {
          700: "#0f766e",
          600: "#0d9488",
          500: "#14b8a6",
          100: "#ccfbf1",
        },
        signal: {
          blue: "#2563eb",
          green: "#16a34a",
          amber: "#d97706",
          red: "#dc2626",
        },
      },
      boxShadow: {
        panel: "0 18px 40px rgba(16, 20, 24, 0.08)",
        soft: "0 1px 2px rgba(16, 20, 24, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
