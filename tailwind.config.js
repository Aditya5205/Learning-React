/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mori: ["Mori", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        cross: "url('./src/assets/cross_img.png')",
        circle: "url('./src/assets/circle_img.jpg')",
        // portfolio: "url('./src/assets/portfolio_img.png')",
        github_icon: "url('./src/assets/github.png')",
      },
    },
  },
  plugins: [],
};
