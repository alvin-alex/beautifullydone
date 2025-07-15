import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface StoreTransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  storeUrl: string;
}

export const StoreTransformationForm: React.FC<StoreTransformationFormProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    storeUrl: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      storeUrl: ''
    });
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidUrl = (url: string) => {
    if (!url.trim()) return false;
    try {
      new URL(url);
      return true;
    } catch {
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
    
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.storeUrl.trim()) newErrors.storeUrl = 'Store URL is required';
    else if (!isValidUrl(formData.storeUrl)) newErrors.storeUrl = 'Please enter a valid URL';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      // Format the store URL to include https if missing
      let formattedUrl = formData.storeUrl.trim();
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = `https://${formattedUrl}`;
      }

      const response = await fetch('https://hook.us2.make.com/ie3ok43p0umodcec3lpojgrxugtcjmzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          storeUrl: formattedUrl,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
        setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
        setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    if (isSubmitted) {
      return (
        <div className="text-center">
          <div className="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowRight size={24} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-theme-text mb-4">
            Thank you!
          </h2>
          <p className="text-base text-theme-text-secondary mb-8">
            We've received your information and will be in touch within 24 hours with your store preview.
          </p>
          <button
            onClick={handleClose}
            className="bg-theme-primary hover:bg-theme-primary-hover focus:bg-theme-primary-hover focus:outline-none focus:ring-4 focus:ring-theme-primary/30 text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-200"
          >
            Close
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-theme-text font-medium mb-2 text-base">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className={`w-full px-6 py-4 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 focus:ring-theme-primary/30 focus:border-theme-primary transition-all duration-200 text-base ${
              errors.name ? 'border-error-red' : 'border-theme-border'
            }`}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-error-red text-sm mt-2">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-theme-text font-medium mb-2 text-base">
            Your Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className={`w-full px-6 py-4 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 focus:ring-theme-primary/30 focus:border-theme-primary transition-all duration-200 text-base ${
              errors.email ? 'border-error-red' : 'border-theme-border'
            }`}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-error-red text-sm mt-2">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-theme-text font-medium mb-2 text-base">
            Your Current Store URL
          </label>
          <input
            type="url"
            placeholder="yourstore.myshopify.com or yourwebsite.com"
            value={formData.storeUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, storeUrl: e.target.value }))}
            className={`w-full px-6 py-4 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 focus:ring-theme-primary/30 focus:border-theme-primary transition-all duration-200 text-base ${
              errors.storeUrl ? 'border-error-red' : 'border-theme-border'
            }`}
            disabled={isSubmitting}
          />
          {errors.storeUrl && <p className="text-error-red text-sm mt-2">{errors.storeUrl}</p>}
          <p className="text-theme-text-secondary text-sm mt-2">
            Don't have a store yet? Just enter your business website or social media profile.
          </p>
        </div>
        
        {errors.submit && (
          <div className="bg-error-red/10 border border-error-red/30 rounded-lg p-4">
            <p className="text-error-red text-sm">{errors.submit}</p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-theme-primary hover:bg-theme-primary-hover focus:bg-theme-primary-hover focus:outline-none focus:ring-4 focus:ring-theme-primary/30 text-white px-6 py-4 text-base font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Get Started</span>
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-theme-bg rounded-lg p-6 md:p-12 max-w-2xl w-full max-h-[90vh] border border-theme-border relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-theme-text-secondary hover:text-theme-primary transition-colors duration-200"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>

        <div className="pr-12">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};