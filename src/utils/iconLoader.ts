/**
 * Optimized icon loading utility
 * Reduces bundle size by creating a centralized icon registry
 */

import { 
  ArrowRight,
  ArrowLeft,
  X,
  Upload,
  CheckCircle,
  Code,
  Users,
  Palette,
  Clock,
  Target,
  Shield,
  ChevronLeft,
  ChevronRight,
  Zap,
  Trophy,
  TrendingUp
} from 'lucide-react';

// Icon registry for better tree-shaking and bundle optimization
export const icons = {
  ArrowRight,
  ArrowLeft,
  X,
  Upload,
  CheckCircle,
  Code,
  Users,
  Palette,
  Clock,
  Target,
  Shield,
  ChevronLeft,
  ChevronRight,
  Zap,
  Trophy,
  TrendingUp
} as const;

// Type-safe icon names
export type IconName = keyof typeof icons;

// Icon component for consistent usage
export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const IconComponent = icons[name];
  return <IconComponent size={size} className={className} />;
};

// Lazy loading for less common icons (if needed)
export const loadIcon = async (iconName: string) => {
  try {
    const icon = await import('lucide-react').then(module => module[iconName]);
    return icon;
  } catch (error) {
    console.warn(`Failed to load icon: ${iconName}`);
    return null;
  }
};