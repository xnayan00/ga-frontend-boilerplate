import tailwindPreset from './node_modules/@yanmendes-GA/ga-ui/tailwind.config';
import type { Config } from "tailwindcss";

export default {
  presets: [tailwindPreset],
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@yanmendes-GA/ga-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
} satisfies Config;
