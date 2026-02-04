/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(93deg, #a59fc3 -82.63%, #542b81 -36.76%, #dc379f 27.24%, #f3a199 73.1%, #faf6e8 113.63%)",
      },
    },
  },
  plugins: [],
};
