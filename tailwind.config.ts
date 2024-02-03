import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "global-white": "#FCFCFC",
        "text-gray": "#707070",
        "light-gray": "#EEEEEE",
        "transparent-blue": "rgba(23, 37, 84, 0.7)",
        "transparent-orange": "rgba(255,115,0, 0.5)",
        "text-blue": "#2A86E5",
        "text-teal": "#0DD0BA",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(to right, #06b6d4, #3b82f6)",
        "gradient-white": "linear-gradient(to right, white, white)",
        "gradient-red": "linear-gradient(to bottom, orange, red);",
        "theme-background": "url(/icons/sun.svg)",
        banner: "url(/images/game-banner.png)",
      },
      boxShadow: {
        "banner-shadow": "0 8px 30px 0 rgba(27, 161, 194, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
