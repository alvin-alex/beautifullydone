/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Variable', 'Inter', 'system-ui', 'sans-serif'],
        display: ['ClashDisplay-Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary Brand Colors
        brand: {
          primary: '#F36103',
          'primary-dark': '#994B1A',
          'primary-light': '#FF7A33',
        },
        // Background Colors
        bg: {
          primary: '#161616',
          secondary: '#1D1C1C',
          tertiary: '#252525',
        },
        // Text Colors
        text: {
          primary: '#EEEDEC',
          secondary: '#A1A1A0',
          muted: '#757575',
          inverse: '#161616',
        },
        // Border & Accent Colors
        border: {
          primary: '#595B5B',
          secondary: '#3A3A3A',
          accent: '#F36103',
        },
        // State Colors
        state: {
          success: '#22C55E',
          warning: '#F59E0B', 
          error: '#EF4444',
          info: '#3B82F6',
        }
      },
      fontSize: {
        // Typography Scale
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'heading-xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'heading-lg': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'heading-md': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-xl': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-lg': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-md': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'body-sm': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        // 8px spacing system
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px  
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px
        '3': '0.75rem',     // 12px
        '4': '1rem',        // 16px
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '8': '2rem',        // 32px
        '10': '2.5rem',     // 40px
        '12': '3rem',       // 48px
        '16': '4rem',       // 64px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
        '32': '8rem',       // 128px
        '40': '10rem',      // 160px
        '48': '12rem',      // 192px
        '56': '14rem',      // 224px
        '64': '16rem',      // 256px
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem', 
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(243, 97, 3, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale': 'scale 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
};