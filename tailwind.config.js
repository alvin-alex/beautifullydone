/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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