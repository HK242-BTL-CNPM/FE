/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, // Canh giữa
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536x", // Tuỳ chỉnh max width 2xl
      },
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dark_blue: "#2563EB",
        light_blue: "#EEF4FE",
        dark_pink: "#ED4F9D",
        light_pink: "#FDEDF5",
        dark_green: "#24D164",
        light_green: "#E9FAEF",
        light_red: "rgba(237, 79, 82, 0.851)",
<<<<<<< HEAD
        black_admin:"#23272C",
  
=======
        black_admin: "#23272C",
>>>>>>> e5b3600fb14ea734be9ebcfa3597d5058d9ac23c
      },
    },
  },
  plugins: [],
};
