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
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ".bg-tertiary": {
            backgroundColor: "#9333ea",
          },

          primary: "#111827",

          secondary: "#fb923c",

          accent: "#4b5563",

          neutral: "#fef3c7",

          "base-100": "#f3f4f6",

          info: "#3b82f6",

          success: "#84cc16",

          warning: "#facc15",

          error: "#b91c1c",
        },
        dark: {
          primary: "#f3f4f6",

          secondary: "#075985",

          ".bg-tertiary": {
            backgroundColor: "#7e22ce",
          },

          accent: "#3730a3",

          neutral: "#a5f3fc",

          "base-100": "#111827",

          info: "#1d4ed8",

          success: "#166534",

          warning: "#facc15",

          error: "#b91c1c",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,

    darkTheme: "dark",
  },
};
