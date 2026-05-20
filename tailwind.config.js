module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        dm: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        accent: "#f97316",
        "bg-primary": "#0d0d0d",
        "bg-card": "#151515",
      },
    },
  },
  plugins: [],
};
