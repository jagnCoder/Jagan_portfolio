import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#060816",
        panel: "rgba(12, 16, 32, 0.72)",
        accent: {
          50: "#edf8ff",
          100: "#d6efff",
          200: "#addfff",
          300: "#79c7ff",
          400: "#4ba7ff",
          500: "#2b7fff",
          600: "#245de6",
          700: "#2047b8",
          800: "#1f3f90",
          900: "#1f386c"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(121, 199, 255, 0.15), 0 24px 80px rgba(10, 16, 40, 0.45)"
      },
      backgroundImage: {
        "grid-fine": "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at center, rgba(75,167,255,0.22), transparent 58%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        shimmer: "shimmer 12s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
