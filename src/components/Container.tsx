import React from 'react';
import { cn } from '../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  narrow = false,
  className
}) => {
  return (
    <div className={cn(
      narrow ? 'max-w-4xl mx-auto' : 'max-w-6xl mx-auto',
      className
    )}>
      {children}
    </div>
  );
};