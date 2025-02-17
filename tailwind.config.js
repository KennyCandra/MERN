/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#6100C2",
        LightPurple: "#7900C2",
        gray: "#969696",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to right, #37312A 49% , #191817 95% , #191817 100%)",
        "gradient-glass":
          "linear-gradient(rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.62) 100%)",
        "gradient-darkAngular": "linear-gradient(#6100C2 49% , #191817 95%)",
        "gradient-white":
          "linear-gradient(to right , rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
