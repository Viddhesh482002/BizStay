import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4B82",
          foreground: "#FDFEFF"
        },
        accent: {
          DEFAULT: "#F4A261"
        },
        muted: {
          DEFAULT: "#F3F4F6"
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
