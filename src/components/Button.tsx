import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'font-medium transition-all duration-200 inline-flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-brand-primary hover:bg-brand-primary-dark text-text-inverse',
    secondary: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-inverse',
    ghost: 'text-text-primary hover:text-brand-primary hover:bg-bg-secondary',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-body-md rounded-md',
    medium: 'px-6 py-3 text-body-lg rounded-lg',
    large: 'px-8 py-4 text-body-xl rounded-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};