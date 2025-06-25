import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

interface StoreTransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreTransformationForm: React.FC<StoreTransformationFormProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.storeUrl.trim()) {
      newErrors.storeUrl = 'Store URL is required';
    } else if (!isValidUrl(formData.storeUrl)) {
      newErrors.storeUrl = 'Please enter a valid URL (e.g., https://yourstore.com)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      // Try adding https:// if it's missing
      try {
        new URL(`https://${url}`);
        return true;
      } catch {
        return false;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', storeUrl: '' });
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop, not on child elements
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
      >
        <div 
          className="bg-[#1D1C1C] rounded-lg p-8 max-w-md w-full border border-[#595B5B] text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-16 h-16 bg-[#F36103] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-[#161616]" />
          </div>
          <h3 className="text-2xl font-bold text-[#EEEDEC] mb-4">
            We're On It!
          </h3>
          <p className="text-[#B5B5B4] mb-6 leading-relaxed">
            Thanks {formData.name}! We've received your store details and will have your transformation ready within 24 hours.
          </p>
          <p className="text-[#B5B5B4] mb-8 text-sm">
            Check your email for next steps and timeline updates.
          </p>
          <button
            onClick={handleClose}
            className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full"
          >
            Perfect!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-[#1D1C1C] rounded-lg p-8 max-w-lg w-full border border-[#595B5B] relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#B5B5B4] hover:text-[#F36103] transition-colors duration-200"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#EEEDEC] mb-3">
            Transform Your Store in <span className="text-[#F36103]">24 Hours</span>
          </h2>
          <p className="text-[#B5B5B4] text-lg">
            Just need a few details to get started on your store transformation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-[#EEEDEC] font-medium mb-2">
              What's your name?
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 ${
                errors.name ? 'border-red-500' : 'border-[#595B5B]'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-[#EEEDEC] font-medium mb-2">
              What's your email?
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 ${
                errors.email ? 'border-red-500' : 'border-[#595B5B]'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Store URL Field */}
          <div>
            <label htmlFor="storeUrl" className="block text-[#EEEDEC] font-medium mb-2">
              What's your current store URL?
            </label>
            <input
              type="text"
              id="storeUrl"
              value={formData.storeUrl}
              onChange={(e) => handleInputChange('storeUrl', e.target.value)}
              className={`w-full px-4 py-3 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 ${
                errors.storeUrl ? 'border-red-500' : 'border-[#595B5B]'
              }`}
              placeholder="https://yourstore.com"
            />
            {errors.storeUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.storeUrl}</p>
            )}
            <p className="text-[#B5B5B4] text-sm mt-1">
              We'll analyze your current store to create the perfect transformation.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F36103] hover:bg-[#994B1A] disabled:bg-[#994B1A] disabled:opacity-50 text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#161616]"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>See My New Store</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};