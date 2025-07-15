/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core Palette
        'primary-blue': '#fe696e',
        'primary-blue-light': '#FF8C90',
        'primary-blue-dark': '#E05C60',
        'secondary-orange': '#EE6C4D',
        'secondary-orange-light': '#F4917A',
        'secondary-orange-dark': '#C75A3F',
        
        // Accent Palette
        'accent-yellow': '#F1C40F',
        'accent-teal': '#00BFA5',
        'accent-red': '#E63946',
        
        // Trae-inspired Colors
        'trae-cta-gradient-start': '#FF4E4E',
        'trae-cta-gradient-mid': '#FF7A7A',
        'trae-cta-gradient-end': '#C259FF',
        'trae-neutral-button-bg': '#FFFFFF',
        'trae-neutral-button-text': '#333333',
        
        // Neutral Palette
        'neutral-white': '#FFFAFA',
        'neutral-light': '#F5F5F5',
        'neutral-mid': '#D1D1D1',
        'neutral-dark': '#7A7A7A',
        'neutral-black': '#333333',
        
        // Semantic Palette
        'success-teal': '#00BFA5',
        'warning-yellow': '#F1C40F',
        'error-red': '#E63946',
        'info-blue': '#F0E0E0',
        
        // Theme-aware colors using CSS variables
        'theme-bg': 'var(--color-bg)',
        'theme-surface': 'var(--color-surface)',
        'theme-text': 'var(--color-text)',
        'theme-text-secondary': 'var(--color-text-secondary)',
        'theme-primary': 'var(--color-primary)',
        'theme-primary-hover': 'var(--color-primary-hover)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-secondary-hover': 'var(--color-secondary-hover)',
        'theme-accent': 'var(--color-accent)',
        'theme-border': 'var(--color-border)',
      },
      fontFamily: {
        'heading': ['Cabinet Grotesk', 'sans-serif'],
        'sans': ['Manrope', 'sans-serif'],
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2' }],
        'h2': ['36px', { lineHeight: '1.2' }],
        'h3': ['28px', { lineHeight: '1.3' }],
        'h4': ['22px', { lineHeight: '1.3' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'small': ['14px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'DEFAULT': '4px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '32': '32px',
      },
      maxWidth: {
        'prose': '65ch',
        'prose-narrow': '45ch',
        'prose-wide': '75ch',
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'subtle-dark': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'card-dark': '0 4px 6px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cta': 'linear-gradient(135deg, #FF4E4E 0%, #FF7A7A 50%, #C259FF 100%)',
      },
    },
  },
  plugins: [],
};