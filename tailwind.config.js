// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#DA561A",
          50: "#FFF0E8",
          100: "#FFDCCD",
          200: "#FFBEA1",
          300: "#FF966C",
          400: "#F46E3B",
          500: "#DA561A",
          600: "#B94615",
          700: "#933712",
          800: "#6E290E",
          900: "#4C1B0A",
        },
        cream: "#FBEBD6",
        beige: "#F4DFC6",
        coffee: "#3D1C0F",
        banana: "#FFD65A",
        mustard: "#E2B441",
        brick: "#B23E14",
        petrol: "#1B4965",
        bottle: "#386641",
        bluegray: "#6A8EAE",
        primary: { DEFAULT: "#DA561A", hover: "#B94615", fg: "#FBEBD6" },
        secondary: { DEFAULT: "#B23E14", hover: "#933712", fg: "#FBEBD6" },
        surface: { DEFAULT: "#FBEBD6", fg: "#DA561A" },
        text: { DEFAULT: "#3D1C0F", subtle: "#6B4A3A", onDark: "#FFF7F0" },
      },
      boxShadow: {
        pill: "0 4px 14px rgba(0,0,0,.12)",
        soft: "0 2px 8px rgba(0,0,0,.08)",
      },
      borderRadius: {
        pill: "9999px",
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
