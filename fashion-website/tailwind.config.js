/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
