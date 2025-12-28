import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
        nepali: ["Tiro Devanagari Hindi", "serif"],
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
        // Nepal Aluminium brand colors
        nepal: {
          red: "hsl(var(--nepal-red))",
          "dark-red": "hsl(var(--nepal-dark-red))",
          blue: "hsl(var(--nepal-blue))",
          "dark-blue": "hsl(var(--nepal-dark-blue))",
        },
        aluminium: {
          DEFAULT: "hsl(var(--aluminium))",
          dark: "hsl(var(--aluminium-dark))",
          light: "hsl(var(--aluminium-light))",
        },
        steel: "hsl(var(--steel))",
        graphite: "hsl(var(--graphite))",
        chrome: "hsl(var(--chrome))",
        glass: {
          DEFAULT: "hsl(var(--glass))",
          light: "hsl(var(--glass-light))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-z": {
          "0%, 100%": { transform: "translateZ(0) translateY(0)" },
          "50%": { transform: "translateZ(50px) translateY(-20px)" },
        },
        "slide-depth": {
          "0%": { transform: "translateZ(-100px) translateY(50px)", opacity: "0" },
          "100%": { transform: "translateZ(0) translateY(0)", opacity: "1" },
        },
        "panel-emerge": {
          "0%": { 
            transform: "perspective(1000px) rotateY(-30deg) translateZ(-200px)",
            opacity: "0" 
          },
          "100%": { 
            transform: "perspective(1000px) rotateY(0deg) translateZ(0)",
            opacity: "1" 
          },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(0 75% 50% / 0.4)",
          },
          "50%": { 
            boxShadow: "0 0 60px hsl(0 75% 50% / 0.8)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-z": "float-z 6s ease-in-out infinite",
        "slide-depth": "slide-depth 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "panel-emerge": "panel-emerge 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "metal": "0 20px 60px -15px hsl(0 75% 50% / 0.3), 0 10px 30px -10px hsl(0 0% 0% / 0.5)",
        "panel": "0 25px 80px -20px hsl(0 0% 0% / 0.8), 0 10px 20px -5px hsl(0 75% 50% / 0.1)",
        "lift": "0 30px 60px -10px hsl(0 0% 0% / 0.6)",
        "glow": "0 0 60px hsl(0 75% 50% / 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
