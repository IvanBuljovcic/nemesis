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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "cyan",

        room: {
          unexplored: "var(--room-unexplored)",
          explored: "var(--room-explored)",
          onFire: "var(--room-fire)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
