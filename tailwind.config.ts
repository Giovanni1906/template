import type { Config } from "tailwindcss";
import animations from '@midudev/tailwind-animations';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // business colors palette
      colors: {
        myPrimaryColor: "#ecb939",
        mySecundaryColor: "#372e29",
        mySelectedColor: "#f0c75e",
        myBlurColor: "#726255",
        myBackgroundColor: "#000000",
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'}, // use only for tactiles
      },
    },
  },
  plugins: [
    animations,
  ],
};
export default config;
