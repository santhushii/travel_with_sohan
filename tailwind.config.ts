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
        // Primary accent (teal)
        primary: {
          DEFAULT: "#22E6C5",
          dark: "#14c9aa",
        },
        // Secondary accent (blue)
        secondary: {
          DEFAULT: "#3BB2E3",
        },
        // Text colors
        text: {
          primary: "#FFFFFF",
          secondary: "#D0D8E0",
          muted: "#7C8A96",
        },
        // Background colors
        bg: {
          "gradient-top": "#02070C",
          "gradient-bottom": "#050E16",
          "card": "rgba(5, 15, 25, 0.85)",
          "navbar": "rgba(3, 12, 20, 0.75)",
          "navbar-scroll": "rgba(3, 12, 20, 0.95)",
        },
        // Keep existing teal for backward compatibility
        teal: {
          400: "#22E6C5",
          500: "#14c9aa",
          600: "#0d9488",
        },
        cyan: {
          400: "#3BB2E3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      spacing: {
        18: "4.5rem", // 72px (navbar height)
        22: "5.5rem", // 88px
        88: "22rem", // 352px
        96: "24rem", // 384px
      },
      backdropBlur: {
        18: "18px",
      },
      borderRadius: {
        "2xl": "18px",
      },
      letterSpacing: {
        "wider": "0.05em",
        "widest": "0.1em",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 8px #22E6C5) drop-shadow(0 0 16px #22E6C5)",
          },
          "50%": {
            filter: "drop-shadow(0 0 12px #22E6C5) drop-shadow(0 0 24px #22E6C5)",
          },
        },
      },
      boxShadow: {
        "glow-teal": "0 0 20px rgba(34, 230, 197, 0.3)",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
