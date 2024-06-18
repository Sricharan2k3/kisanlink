/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: "#F3F4F6",
        },
        blue: {
          100: "#1d4ed8",
        },
        brown: {
          700: "#422006",
        },
        green: {
          500: "#16a34a",
          600: "#65a30d",

          700: "#84cc16",
        },
      },
      width: {
        100: "34rem", // 400px for example
        110: "27.5rem", // 440px
      },
      height: {
        100: "30rem", // 400px
        110: "27.5rem", // 440px
      },
      padding: {
        16: "8rem",
        12: "3rem",
        4: "1rem",
        10: "2rem",
      },
    },
  },
  plugins: [],
};
