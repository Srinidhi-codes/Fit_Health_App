/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--bg-color)",
          second: "var(--second-bg-color)",
          main: "var(--main-color)",
          text: "var(--text-color)",
        },
      },
      textColor: {
        skin: {
          text: "var(--text-color)",
          main: "var(--main-color)",
          base: "var(--bg-color)",
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        bounce: "bounce 2s infinite ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
    },
  },
  plugins: [],
};
