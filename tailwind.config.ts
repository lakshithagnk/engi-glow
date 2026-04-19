import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          dark: "hsl(var(--surface-dark))",
          "dark-foreground": "hsl(var(--surface-dark-foreground))",
          soft: "hsl(var(--surface-soft))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: "hsl(var(--primary))",
          "primary-foreground": "hsl(var(--primary-foreground))",
          accent: "hsl(var(--accent))",
          "accent-foreground": "hsl(var(--accent-foreground))",
          border: "hsl(var(--border))",
          ring: "hsl(var(--ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in":     { "0%": { opacity: "0", transform: "translateY(22px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "float":       { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-9px)" } },
        "blob":        { "0%, 100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(16px,-22px) scale(1.07)" }, "66%": { transform: "translate(-14px,16px) scale(0.96)" } },
        "gradient-x":  { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        "shimmer":     { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
        "ping-soft":   { "0%": { transform: "scale(1)", opacity: "0.45" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
        "spin-slow":   { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "glow-pulse":  { "0%, 100%": { boxShadow: "0 0 18px hsl(25 95% 53% / 0.12)" }, "50%": { boxShadow: "0 0 36px hsl(25 95% 53% / 0.26)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":     "fade-in 0.65s ease-out forwards",
        "float":       "float 7s ease-in-out infinite",
        "blob":        "blob 16s ease-in-out infinite",
        "gradient-x":  "gradient-x 5s ease infinite",
        "shimmer":     "shimmer 2.2s ease-in-out infinite",
        "ping-soft":   "ping-soft 2.6s cubic-bezier(0,0,0.2,1) infinite",
        "spin-slow":   "spin-slow 22s linear infinite",
        "glow-pulse":  "glow-pulse 3s ease-in-out infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
