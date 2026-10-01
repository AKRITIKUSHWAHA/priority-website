import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF3FA",
          100: "#DCE6F5",
          200: "#B8CDED",
          300: "#8FB1E2",
          400: "#6794D6",
          500: "#FF4800",
          600: "#E03F00",
          700: "#B83300",
          800: "#8C2600",
          900: "#0D192E",
          950: "#0B132B",
          DEFAULT: "#FF4800",
        },
        accent: {
          50: "#FFF2EE",
          100: "#FFE2D9",
          200: "#FFC3B3",
          300: "#FF9A80",
          400: "#FF6C47",
          500: "#FF4800",
          600: "#E03F00",
          700: "#B83300",
          800: "#8C2600",
          900: "#661C00",
          950: "#3D0E00",
          DEFAULT: "#FF4800",
        },
        navy: {
          700: "#1C335C",
          800: "#13223E",
          900: "#0D192E",
          950: "#0B132B",
          DEFAULT: "#0D192E",
        },
        surface: {
          light: "#F8FAFC",
          muted: "#F1F5F9",
          card: "#FFFFFF",
        },
        border: {
          light: "#E2E8F0",
          dark: "#1E335C",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Sora", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(13, 25, 46, 0.06), 0 2px 6px -1px rgba(13, 25, 46, 0.04)",
        "soft-lg": "0 20px 30px -10px rgba(13, 25, 46, 0.1), 0 10px 15px -3px rgba(13, 25, 46, 0.05)",
        "glow-primary": "0 0 25px -2px rgba(255, 72, 0, 0.45)",
        "glow-accent": "0 0 25px -2px rgba(255, 72, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
