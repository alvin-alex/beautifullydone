import React from 'react';

interface CaseStudyProps {
  storeName: string;
  beforeImage: string;
  afterImage: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  storeName,
  beforeImage,
  afterImage
}) => {
  return (
    <section className="bg-[#161616] p-6 md:p-8 my-8 rounded-lg border border-[#595B5B]">
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
    </section>
  );
};