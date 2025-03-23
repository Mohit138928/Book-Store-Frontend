/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFCE1A",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#0D0842",
          foreground: "hsl(var(--secondary-foreground))",
        },
        blackBG: "#F3F3F3",
        Favorite: "#FF5841",
        bgColor: "#EBEFFF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maskImage: {
        "top-bottom-fade":
          "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
		  'left-right-fade': 'linear-gradient(to right, transparent, white 30%, white 70%, transparent)',
		  'top-bottom-left-right': 'radial-gradient(circle, transparent, white 40%, white 60%, transparent)',
      },
      webkitMaskImage: {
        "top-bottom-fade":
          "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
		  'left-right-fade': 'linear-gradient(to right, transparent, white 30%, white 70%, transparent)',
		  'top-bottom-left-right': 'radial-gradient(circle, transparent, white 40%, white 60%, transparent)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".mask-top-bottom-fade": {
          "mask-image":
            "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
          "-webkit-mask-image":
            "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
          "mask-repeat": "no-repeat",
          "mask-size": "cover",
          "-webkit-mask-repeat": "no-repeat",
          "-webkit-mask-size": "cover",
        },
		'.mask-left-right-fade': {
          'mask-image': 'linear-gradient(to right, transparent, white 30%, white 70%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent, white 30%, white 70%, transparent)',
          'mask-repeat': 'no-repeat',
          'mask-size': 'cover',
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-size': 'cover',
        },
		'.mask-top-bottom-left-right': {
          'mask-image': 'radial-gradient(circle, transparent, white 40%, white 60%, transparent)',
          '-webkit-mask-image': 'radial-gradient(circle, transparent, white 40%, white 60%, transparent)',
          'mask-repeat': 'no-repeat',
          'mask-size': 'cover',
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-size': 'cover',
        },
      });
    },
  ],
};
