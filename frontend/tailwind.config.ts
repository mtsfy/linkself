import type { Config } from "tailwindcss";

const config = {
  safelist: [
    // Background Colors
    "bg-zinc-200",
    "bg-slate-900",
    "bg-white",
    "bg-green-400",
    "bg-green-900",
    "bg-blue-600",
    "bg-blue-950",
    "bg-gray-100",
    "bg-gray-700",
    "bg-gray-800",
    "bg-zinc-50",
    "bg-zinc-800",
    "bg-stone-600",
    "bg-black",
    "bg-blue-900",
    "bg-sky-200",
    "bg-green-200",
    "bg-amber-900",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-gradient-to-t",
    "from-gray-900",
    "to-gray-800",
    "from-fuchsia-900",
    "via-5%",
    "to-fuchsia-600",
    "to-95%",
    "from-rose-900",
    "bg-rose-700",
    "from-blue-900",
    "bg-sky-500",
    "from-green-900",
    "bg-green-500",
    "bg-fuchsia-900",
    "bg-rose-950",
    "bg-blue-800",

    // Text Colors
    "text-black",
    "text-white",
    "text-zinc-900",
    "text-amber-900",
    "text-gray-900",

    // Border Colors and Styles
    "border-[0.9px]",
    "border-gray-400",
    "border-gray-500",
    "border-white",
    "border-[0.5px]",

    // Additional classes might be added here if needed
  ],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
