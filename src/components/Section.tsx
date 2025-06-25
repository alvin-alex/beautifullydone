import React from 'react';
import { cn } from '../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'alt';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  className
}) => {
  const variantClasses = {
    default: 'py-16 md:py-24 px-4',
    alt: 'py-16 md:py-24 px-4 bg-bg-secondary',
  };

  return (
    <section className={cn(variantClasses[variant], className)}>
      {children}
    </section>
  );
};