import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  business: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our bakery's orders doubled in 24 hours—no phone calls, no hassle.",
    author: "Sofia B.",
    business: "Cupcake Corner"
  },
  {
    quote: "I saw my preview live link and was floored—looked like a $20K agency did it.",
    author: "James L.",
    business: "Urban Threads"
  },
  {
    quote: "We went from 3 orders a week to 15 orders a day. The ROI is insane.",
    author: "Michael R.",
    business: "Artisan Coffee Co."
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-theme-surface rounded-lg p-8 md:p-12 border border-theme-border">
        <div className="text-center">
          <blockquote className="text-base md:text-2xl text-theme-text mb-6 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <div className="text-theme-text-secondary text-sm">
            — {testimonials[currentIndex].author}, {testimonials[currentIndex].business}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-theme-surface border border-theme-border text-theme-primary hover:bg-theme-primary hover:text-theme-bg transition-colors duration-200"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-theme-surface border border-theme-border text-theme-primary hover:bg-theme-primary hover:text-theme-bg transition-colors duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-theme-primary' : 'bg-theme-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
};