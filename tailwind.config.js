/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        dh: "calc(100dvh - 130px)",
      },
      colors: {
        sky: "#1570EF",
      },
      backgroundColor: {
        sky: "#D1E9FF",
      },
    },
  },
  plugins: [],
};
