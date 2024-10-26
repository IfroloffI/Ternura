import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        purpleMain: '#C17EDE',
        purpleFusia: '#FF00D0',
        white: '#EDE7ED',
        gray: '#373737',
        'grey-light-stroke': '#EBEBEB',
        purpleLight: '#FAE2FF',
        'gray-500': 'rgba(131, 131, 131, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
