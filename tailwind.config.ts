import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Secondary: "#CA2446",
        Background: "#0E0D0C",
        GreyDark: "#1E1E1E",
        GreyLight: "#636363",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"], // Use 'sans' as a fallback
      },
    },
  },
  plugins: [],
};
export default config;

//570
