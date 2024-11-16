/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      //Adding a custom bg
      "radial-custom":
        "radial-gradient(circle, rgba(132,63,251,1) 0%, rgba(252,70,107,1) 100%)",
      "gradient-to-t": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to right, var(--tw-gradient-stops))",
    },
    fontFamily: {
      Edu_Australia: ["Edu AU VIC WA NT Pre", "sans-serif"],
      Bebas_Neue: ["Bebas Neue", "sans-serif"],
      Source_Code: ["Source Code Pro", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Yellowtail: ["Yellowtail", "sans-serif"],
      Merriweather: ["Merriweather Sans", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
