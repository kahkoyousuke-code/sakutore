import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Bump the two small sizes used for most body text so the site is easier to read on phones.
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.25rem" }], // 13px (default 12px)
        sm: ["0.9375rem", { lineHeight: "1.5rem" }], // 15px (default 14px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
