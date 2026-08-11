/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          text: "#f4f4ed",
          accent: "#d2ff00",
          border: "#d2ff00",
          primary: "#282c20",
          surface: "#d2ff00",
          background: "#3b3c38",
          onPrimary: "#ffffff",
          muted: "#282c20",
        },
      },
      fontFamily: {
        display: ['var(--font-title)'],
        funnel: ['Funnel Display', 'sans-serif'],
      },
      borderRadius: {
        'brand-sm': "2px",
        'brand-md': "6px",
        'brand-lg': "14px",
        'brand-xl': "39px",
      },
      letterSpacing: {
        display: "-0.0227em",
      },
      lineHeight: {
        display: "0.83",
      },
    },
  },
  plugins: [require("daisyui")],
}
