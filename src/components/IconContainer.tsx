import React from 'react';
import { cn } from '../utils/cn';

interface IconContainerProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  className
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const variantClasses = {
    primary: 'bg-brand-primary',
    secondary: 'bg-bg-tertiary border-2 border-brand-primary',
    ghost: 'bg-transparent',
  };

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center flex-shrink-0',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
};