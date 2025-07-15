import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme: Theme = systemPrefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      applyTheme(systemTheme);
    }
    
    setMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only apply system theme if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        const systemTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(systemTheme);
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme);
    applyTheme(newTheme);
    
    // Save user preference
    localStorage.setItem('theme', newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-lg bg-theme-surface border border-theme-border ${className}`}>
        <div className="w-full h-full animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-lg bg-theme-surface border border-theme-border
        hover:bg-theme-primary hover:border-theme-primary hover:text-white
        focus:outline-none focus:ring-4 focus:ring-theme-primary/30
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        text-theme-text hover:text-white
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      type="button"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun icon for light mode */}
        <Sun
          size={20}
          className={`
            absolute top-0 left-0 transition-all duration-300 ease-in-out
            ${theme === 'light' 
              ? 'opacity-100 transform rotate-0 scale-100' 
              : 'opacity-0 transform rotate-90 scale-75'
            }
          `}
        />
        
        {/* Moon icon for dark mode */}
        <Moon
          size={20}
          className={`
            absolute top-0 left-0 transition-all duration-300 ease-in-out
            ${theme === 'dark' 
              ? 'opacity-100 transform rotate-0 scale-100' 
              : 'opacity-0 transform -rotate-90 scale-75'
            }
          `}
        />
      </div>
      
      {/* Screen reader only text */}
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </button>
  );
};

export default DarkModeToggle;