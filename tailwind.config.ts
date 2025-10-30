import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B00",
          dark: "#CC5500",
          light: "#FF8533",
        },
        dark: {
          DEFAULT: "#000000",
          gray: "#1A1A1A",
          lighter: "#2D2D2D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

