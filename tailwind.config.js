/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      overflow: {
        hidden: "hidden",
        // Add any other custom overflow values here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: {
          height: "0",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      "accordion-up": {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0",
        },
      },
    },
  },
  theme: {
    extend: {
      fontSize: {
        "xs-small": "0.4em",
      },
      screens: {
        small: "500px", // Custom small breakpoint
        medium: "800px", // Custom medium breakpoint
        large: "1500px", // Custom large breakpoint
        xlarge: "1600px", // Custom extra large breakpoint
      },
      colors: {
        gray: {
          lightest: "#F3F4F6",
        },
        blue: {
          100: "#1d4ed8",
        },
        brown: {
          700: "#5c421a",
        },
        green: {
          500: "#16a34a",
          600: "#65a30d",

          700: "#84cc16",
          200: "#98cb66",
        },
        orange: {
          300: "#F8F4DE",
        },
        cream: {
          100: "#e5deb9", // Cream color for hover
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
  plugins: [require("tailwindcss-animate")],
  addVariablesForColors,
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
