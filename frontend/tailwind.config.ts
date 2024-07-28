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
       'hero-gradient': 'linear-gradient(to bottom, #6E08D4, #9237ED, #6E28B4)',
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
        'green-100':'#D9F6F2',
        'green-500':'#00C2A8',
        'neutral-100':'#F6F6F6',
        'gray-100':'#6B758E',
        'gray-700':'#303030',

      },
    },
  },
  plugins: [],
};
export default config;
