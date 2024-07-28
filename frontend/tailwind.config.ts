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
      fontSize:{
        'text-heading': '40px',
        'text-title': '28px',
        'text-sub-title': '23px',
        'text-normal': '16px'
      },
      colors: {
        'purple-100':'#CCB0E9',
        'purple-200':'#9747FF',
        'purple-500':'#5B00B7',
        'purple-800':'#37006E',
        'white':'#fff',
        'green-100':'#00C2A8',
        'green-500':'#00C2A8',
        'neutral-100':'#F6F6F6',
        'gray-100':'#6B758E',
        'gray-700':'#30303',

      },
    },
  },
  plugins: [],
};
export default config;
