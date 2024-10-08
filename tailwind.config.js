/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: "rgb(33,32,37)",
        card: "#212025",
      },
      backgroundImage: {
        "custom-image":
          "url('../src/assets/448447277_986646312780744_6621724922829695205_n.png')",
      },
    },
  },
  plugins: [],
};
