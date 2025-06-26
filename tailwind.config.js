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
          secondary: '#C4C4C2',
          tertiary: '#8A8A8A',
          accent: '#FF6B0A',
          'accent-dark': '#E55A00',
          'accent-hover': '#CC5500',
          border: '#6B6B6B',
          'border-subtle': '#404040',
          error: '#FF4444',
          success: '#00CC66',
          warning: '#FFAA00',
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