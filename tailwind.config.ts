/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      }
    },
    extend: {
      fontFamily: {
        bold: "Clash Display Bold",
        semibold: "Clash Display Semibold",
        medium: "Clash Display Medium",
        regular: "Clash Display Regular",
        light: "Clash Display Light",
        extralight: "Clash Display Extralight",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
            display: "block",
          },
          "100%": {
            opacity: "1",
            display: "block",
          },
        },
        colorChange: {
          "0%": {
            color: "#FFFFFF",
          },
          "25%": {
            color: "#EC2B8C"
          },
          "50%": {
            color: "#19C8EB"
          },
          "75%": {
            color: "#CB0FB0"
          },
          "100%": {
            color: "#9477E2"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeOut: "fadeOut 0.5s linear forwards",
        colorChange: "colorChange 10s linear infinite"
      },
      screens: {
        phone: { max: "810px" },
        desktop: { min: "810px " },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}