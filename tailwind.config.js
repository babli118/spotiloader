/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#040409",
      background: "#f9f9fd",
      primary: "#4cfb19",
      secondary: "#74fd94",
      accent: "#41fc9c",
      white: "#ffffff",
    },
    // colors: {
    //   text: "#060b08",
    //   background: "#f4f9f6",
    //   primary: "#1ED760",
    //   secondary: "#94d1aa",
    //   accent: "#6dc58c",
    // },
    // colors: {
    //   text: "#f2ecec",
    //   background: "#000000",
    //   primary: "#1ED760",
    //   secondary: "#683f3f",
    //   accent: "#b27777",
    //   grey: "#121212",
    // },
  },
  plugins: [],
};
