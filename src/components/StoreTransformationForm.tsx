import React, { useState, useEffect, useCallback } from 'react';
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
    
    // More forgiving URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    const socialPattern = /^(https?:\/\/)?(www\.)?(facebook|instagram|twitter|linkedin|tiktok|youtube)\.com\/[\w\.-]+$/i;
    
    // Check if it's a valid URL pattern or social media profile
    if (urlPattern.test(url) || socialPattern.test(url)) {
      return true;
    }
    
    // Try with https:// prefix
    if (urlPattern.test(`https://${url}`)) {
      return true;
    }
    
    return false;
  };

  const validateField = useCallback((field: string, value: string) => {
    const newErrors = { ...errors };
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
        
      case 'storeUrl':
        if (!value.trim()) {
          newErrors.storeUrl = 'Store URL is required';
        } else if (!isValidUrl(value)) {
          newErrors.storeUrl = 'Please enter a valid website or social media URL';
        } else {
          delete newErrors.storeUrl;
        }
        break;
    }
    
    setErrors(newErrors);
  }, [errors]);

  // Debounced validation
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.keys(formData).forEach(field => {
        const value = formData[field as keyof FormData];
        if (value.trim()) { // Only validate non-empty fields
          validateField(field, value);
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [formData, validateField]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error immediately when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Immediate validation on submit
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.storeUrl.trim()) {
      newErrors.storeUrl = 'Store URL is required';
    } else if (!isValidUrl(formData.storeUrl)) {
      newErrors.storeUrl = 'Please enter a valid website or social media URL';
    }

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
          <label htmlFor="name" className="block text-theme-text font-medium mb-2 text-base">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-6 py-4 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 focus:ring-theme-primary/30 focus:border-theme-primary transition-all duration-200 text-base ${
              errors.name ? 'border-error-red' : 'border-theme-border'
            }`}
            disabled={isSubmitting}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-error-red text-sm mt-2" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-theme-text font-medium mb-2 text-base">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-6 py-4 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 focus:ring-theme-primary/30 focus:border-theme-primary transition-all duration-200 text-base ${
              errors.email ? 'border-error-red' : 'border-theme-border'
            }`}
            disabled={isSubmitting}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-error-red text-sm mt-2" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="storeUrl" className="block text-theme-text font-medium mb-2 text-base">
            Current Store or Website
          </label>
          <input
            id="storeUrl"
            type="url"
            placeholder="mystore.com or instagram.com/mystore"
            value={formData.storeUrl}
            onChange={(e) => handleInputChange('storeUrl', e.target.value)}
            className={`w-full px-6 py-4 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 focus:ring-theme-primary/30 focus:border-theme-primary transition-all duration-200 text-base ${
              errors.storeUrl ? 'border-error-red' : 'border-theme-border'
            }`}
            disabled={isSubmitting}
            aria-describedby={errors.storeUrl ? 'storeUrl-error' : 'storeUrl-help'}
          />
          {errors.storeUrl && (
            <p id="storeUrl-error" className="text-error-red text-sm mt-2" role="alert">
              {errors.storeUrl}
            </p>
          )}
          <p id="storeUrl-help" className="text-theme-text-secondary text-sm mt-2">
            Enter your Shopify store, website, or social media profile URL
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
              <span>Get My Store Preview</span>
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