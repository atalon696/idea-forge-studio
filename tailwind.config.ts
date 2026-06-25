import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acento incandescente
        molten: {
          DEFAULT: "#F56102",
          spark: "#FF7A1A",
          deep: "#B8470A",
          ember: "#7A2E05",
          50: "#FFE2CC",
          100: "#FFBE8A",
          300: "#FF9A4D",
          500: "#F56102",
          700: "#B8470A",
          900: "#7A2E05",
        },
        // Acero (texto / contraste)
        steel: {
          100: "#F2F4F5",
          300: "#C7CDD4",
          500: "#8A95A3",
          700: "#3A4453",
        },
        // Carbón (fondos / superficies)
        forge: {
          900: "#020814",
          800: "#050D19",
          700: "#0A1422",
          600: "#111D2D",
          500: "#19273A",
        },
      },
      fontFamily: {
        display: ["var(--font-saira-cond)", "var(--font-saira)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        ultra: "0.32em",
      },
      maxWidth: {
        site: "1120px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        molten: "0 0 24px rgba(245,97,2,0.45)",
        "molten-lg": "0 0 40px rgba(245,97,2,0.55)",
        card: "0 24px 60px -20px rgba(2,8,20,0.8)",
      },
      backgroundImage: {
        "grad-molten":
          "linear-gradient(120deg,#FF7A1A 0%,#F56102 55%,#B8470A 100%)",
        "grad-steel":
          "linear-gradient(145deg,#F2F4F5 0%,#9AA3AE 40%,#E4E8EC 62%,#6E7884 100%)",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(-160px)", opacity: "0" },
        },
        forgeLine: {
          "0%, 100%": { width: "0%", opacity: "0.4" },
          "50%": { width: "100%", opacity: "1" },
        },
      },
      animation: {
        rise: "rise 5s linear infinite",
        forgeLine: "forgeLine 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
