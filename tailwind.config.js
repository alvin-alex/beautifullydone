/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          bg: '#161616',
          section: '#1D1C1C',
          text: '#EEEDEC',
          secondary: '#A1A1A0',
          accent: '#F36103',
          'accent-dark': '#994B1A',
          border: '#595B5B',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};