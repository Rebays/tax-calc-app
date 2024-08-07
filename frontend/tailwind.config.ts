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
        'purple-50': '#f1e6fc',
        'purple-100': '#d2b0f5',
        'purple-200': '#bd8af0',
        'purple-300': '#9f54e9',
        'purple-400': '#8c33e5',
        'purple-500': '#6f00de',
        'purple-600': '#6500ca',
        'purple-700': '#4f009e',
        'purple-800': '#3d007a',
        'purple-900': '#2f005d',

        'green-50': '#e6f9f6',
        'green-100': '#b0ece4',
        'green-200': '#8ae3d7',
        'green-300': '#54d6c5',
        'green-400': '#33ceb9',
        'green-500': '#00c2a8',
        'green-600': '#00b199',
        'green-700': '#008a77',
        'green-800': '#006b5c',
        'green-900': '#005147',


        'neutral-10': '#fbfbfb',
        'neutral-20': '#f7f7f7',
        'neutral-30': '#efeeef',
        'neutral-40': '#e4e3e6',
        'neutral-50': '#cccace',
        'neutral-60': '#bfbdc2',
        'neutral-70': '#b5b3b8',
        'neutral-80': '#a9a6ad',
        'neutral-90': '#9d99a1',
        'neutral-100': '#908d95',
        'neutral-200': '#848089',
        'neutral-300': '#78737e',
        'neutral-400': '#6d6874',
        'neutral-500': '#615c68',
        'neutral-600': '#57515e',
        'neutral-700': '#494251',
        'neutral-800': '#3c3645',
        'neutral-900': '#322b3b',
        
      },
    },
  },
  plugins: [],
};
export default config;
