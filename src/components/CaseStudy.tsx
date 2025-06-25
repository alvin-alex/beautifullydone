import React from 'react';
import { cn } from '../utils/cn';

interface CaseStudyProps {
  storeName: string;
  beforeImage: string;
  afterImage: string;
  conversionLift: string;
  avgOrderValueLift: string;
  trafficSalesLift: string;
  ownerQuote: string;
  className?: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  storeName,
  beforeImage,
  afterImage,
  conversionLift,
  avgOrderValueLift,
  trafficSalesLift,
  ownerQuote,
  className
}) => {
  return (
    <section className={cn("card my-8 space-y-6", className)}>
      <h3 className="text-heading-xl font-semibold text-text-primary">
        Case Study: {storeName}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-1 overflow-hidden rounded-lg border-2 border-border-primary">
        <div className="relative">
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-48 md:h-64 object-cover"
          />
          <span className="absolute bottom-0 left-0 bg-brand-primary text-text-inverse px-3 py-2 text-body-md font-medium">
            Before
          </span>
        </div>
        <div className="relative">
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-48 md:h-64 object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-brand-primary text-text-inverse px-3 py-2 text-body-md font-medium">
            After
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-body-lg text-text-secondary">
          <strong className="text-text-primary">Conversion Lift:</strong> +{conversionLift}%
        </div>
        <div className="text-body-lg text-text-secondary">
          <strong className="text-text-primary">Avg. Order Value Lift:</strong> +{avgOrderValueLift}%
        </div>
        <div className="text-body-lg text-text-secondary">
          <strong className="text-text-primary">Traffic→Sales Lift:</strong> +{trafficSalesLift}%
        </div>
      </div>

      <blockquote className="text-body-xl text-text-primary italic border-l-4 border-brand-primary pl-4">
        "{ownerQuote}"
      </blockquote>
    </section>
  );
};