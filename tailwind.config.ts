import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#112025",
          muted: "#4A6169",
          light: "#7B9199",
        },
        pine: {
          DEFAULT: "#184542",
          dark: "#0F2F2D",
          light: "#266B67",
          surface: "#0D2523",
        },
        paper: {
          DEFAULT: "#F9F8F5",
          pure: "#FFFFFF",
          card: "#FFFFFF",
          warm: "#F3EFE6",
        },
        sand: {
          DEFAULT: "#E5DEC9",
          light: "#F0ECE1",
          dark: "#CEC5AD",
        },
        signal: {
          DEFAULT: "#EAA814",
          hover: "#D89608",
          light: "#FFF6E0",
          glow: "rgba(234, 168, 20, 0.35)",
        },
        accent: {
          blue: "#2563EB",
          emerald: "#059669",
        }
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(234, 168, 20, 0.28), 0 4px 12px rgba(234, 168, 20, 0.18)',
        'glow-lg': '0 0 40px rgba(234, 168, 20, 0.4), 0 10px 25px rgba(234, 168, 20, 0.22)',
        'premium': '0 10px 30px -10px rgba(17, 32, 37, 0.06), 0 0 1px 1px rgba(17, 32, 37, 0.04)',
        'float': '0 20px 45px -10px rgba(15, 47, 45, 0.18), 0 8px 16px -6px rgba(15, 47, 45, 0.08)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.04)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;


