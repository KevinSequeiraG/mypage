/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      mdx600: "600px",
      mdx700: "700px",
      mdx800: "800px",
      mdx900: "900px",
      mdx1000: "1000px",
      mdx1100: "1100px",
      mdx1200: "1200px",
      mdx1300: "1300px",
      mdx1400: "1400px",
      mdx1500: "1500px",
      mdx1600: "1600px",
      mdx1700: "1700px",
      mdx1800: "1800px",
      mdx1900: "1900px",
      mdx2000: "2000px",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
