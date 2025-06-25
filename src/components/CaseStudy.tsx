import React from 'react';

interface CaseStudyProps {
  storeName: string;
  beforeImage: string;
  afterImage: string;
  conversionLift: string;
  avgOrderValueLift: string;
  trafficSalesLift: string;
  ownerQuote: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  storeName,
  beforeImage,
  afterImage,
  conversionLift,
  avgOrderValueLift,
  trafficSalesLift,
  ownerQuote
}) => {
  return (
    <section className="bg-[#1D1C1C] p-6 md:p-8 my-8 rounded-lg border border-[#595B5B]">
      <h3 className="text-[#EEEDEC] text-2xl font-medium mb-6">
        Case Study: {storeName}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6 overflow-hidden rounded-lg border-2 border-[#595B5B]">
        <div className="relative">
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-48 md:h-64 object-cover"
          />
          <span className="absolute bottom-0 left-0 bg-[#F36103] text-[#161616] px-3 py-2 font-medium">
            Before
          </span>
        </div>
        <div className="relative">
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-48 md:h-64 object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-[#F36103] text-[#161616] px-3 py-2 font-medium">
            After
          </span>
        </div>
      </div>

      <ul className="text-[#A1A1A0] space-y-2 mb-4">
        <li>
          <strong className="text-[#EEEDEC]">Conversion Lift:</strong> +{conversionLift}%
        </li>
        <li>
          <strong className="text-[#EEEDEC]">Avg. Order Value Lift:</strong> +{avgOrderValueLift}%
        </li>
        <li>
          <strong className="text-[#EEEDEC]">Traffic→Sales Lift:</strong> +{trafficSalesLift}%
        </li>
      </ul>

      <p className="text-[#EEEDEC] italic text-lg">
        "{ownerQuote}"
      </p>
    </section>
  );
};