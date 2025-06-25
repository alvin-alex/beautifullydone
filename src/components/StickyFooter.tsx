import React, { useState, useEffect } from 'react';

export const StickyFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show sticky footer when user has scrolled past the first screen
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1D1C1C] border-t border-[#595B5B] p-4 z-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#EEEDEC] text-lg mb-3">
          Ready for your dream store?
        </p>
        <button 
          onClick={scrollToTop}
          className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2"
        >
          <span>See AI Transform My Store Now</span>
        </button>
      </div>
    </div>
  );
};