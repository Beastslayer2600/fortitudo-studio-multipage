/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fort: {
          green: "#0d2a1f",
          greenDark: "#0a231a",
          cream: "#f8f4ea",
          gold: "#bca472",
          ink: "#1b1b1b",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
