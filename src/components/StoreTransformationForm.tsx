import React, { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface StoreTransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  storeUrl: string;
}

interface ValidationState {
  [key: string]: {
    error: string;
    touched: boolean;
    valid: boolean;
  };
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
  
  const [validation, setValidation] = useState<ValidationState>({
    name: { error: '', touched: false, valid: false },
    email: { error: '', touched: false, valid: false },
    storeUrl: { error: '', touched: false, valid: false }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      storeUrl: ''
    });
    setValidation({
      name: { error: '', touched: false, valid: false },
      email: { error: '', touched: false, valid: false },
      storeUrl: { error: '', touched: false, valid: false }
    });
    setIsSubmitting(false);
    setIsSubmitted(false);
    setSubmitError('');
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidUrl = (url: string) => {
    if (!url.trim()) return false;
    
    // Enhanced URL validation with better patterns
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    const socialPattern = /^(https?:\/\/)?(www\.)?(facebook|instagram|twitter|linkedin|tiktok|youtube|shopify)\.com\/[\w\.-]+$/i;
    const shopifyPattern = /^(https?:\/\/)?([\da-z\.-]+)\.myshopify\.com([\/\w \.-]*)*\/?$/i;
    
    return urlPattern.test(url) || socialPattern.test(url) || shopifyPattern.test(url) || urlPattern.test(`https://${url}`);
  };

  const validateField = useCallback((field: string, value: string) => {
    const trimmedValue = value.trim();
    let error = '';
    let valid = false;
    
    switch (field) {
      case 'name':
        if (!trimmedValue) {
          error = 'Please enter your full name';
        } else if (trimmedValue.length < 2) {
          error = 'Name must be at least 2 characters long';
        } else if (trimmedValue.length > 50) {
          error = 'Name cannot exceed 50 characters';
        } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedValue)) {
          error = 'Name can only contain letters, spaces, hyphens, and apostrophes';
        } else {
          valid = true;
        }
        break;
        
      case 'email':
        if (!trimmedValue) {
          error = 'Please enter your email address';
        } else if (!validateEmail(trimmedValue)) {
          error = 'Please enter a valid email address (e.g., name@example.com)';
        } else if (trimmedValue.length > 100) {
          error = 'Email address is too long';
        } else {
          valid = true;
        }
        break;
        
      case 'storeUrl':
        if (!trimmedValue) {
          error = 'Please enter your store or website URL';
        } else if (!isValidUrl(trimmedValue)) {
          error = 'Please enter a valid URL (e.g., mystore.com, instagram.com/mystore)';
        } else {
          valid = true;
        }
        break;
    }
    
    setValidation(prev => ({
      ...prev,
      [field]: { error, valid, touched: true }
    }));
    
    return valid;
  }, []);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Mark field as touched and validate immediately
    setValidation(prev => ({
      ...prev,
      [field]: { ...prev[field], touched: true }
    }));
    
    // Clear submit error when user starts typing
    if (submitError) {
      setSubmitError('');
    }
    
    // Validate immediately for better UX
    validateField(field, value);
  };

  const handleBlur = (field: keyof FormData) => {
    setValidation(prev => ({
      ...prev,
      [field]: { ...prev[field], touched: true }
    }));
    validateField(field, formData[field]);
  };

  const isFormValid = () => {
    return Object.values(validation).every(field => field.valid) && 
           Object.values(formData).every(value => value.trim().length > 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    // Validate all fields before submission
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const urlValid = validateField('storeUrl', formData.storeUrl);
    
    if (!nameValid || !emailValid || !urlValid) {
      return;
    }

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
        setSubmitError('Unable to submit your request. Please try again in a moment.');
      }
    } catch (error) {
      setSubmitError('Connection error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (field: keyof FormData) => {
    const fieldValidation = validation[field];
    if (!fieldValidation.touched) return 'default';
    if (fieldValidation.valid) return 'success';
    if (fieldValidation.error) return 'error';
    return 'default';
  };

  const getFieldIcon = (field: keyof FormData) => {
    const status = getFieldStatus(field);
    switch (status) {
      case 'success':
        return <CheckCircle size={20} className="text-success-teal" />;
      case 'error':
        return <AlertCircle size={20} className="text-error-red" />;
      default:
        return null;
    }
  };

  const getFieldBorderClass = (field: keyof FormData) => {
    const status = getFieldStatus(field);
    switch (status) {
      case 'success':
        return 'border-success-teal focus:border-success-teal focus:ring-success-teal/30';
      case 'error':
        return 'border-error-red focus:border-error-red focus:ring-error-red/30';
      default:
        return 'border-theme-border focus:border-theme-primary focus:ring-theme-primary/30';
    }
  };

  const renderContent = () => {
    if (isSubmitted) {
      return (
        <div className="text-center">
          <div className="w-16 h-16 bg-success-teal rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-theme-text mb-4">
            Thank You!
          </h2>
          <p className="text-base text-theme-text-secondary mb-4">
            We've received your information and will create your store preview within 24 hours.
          </p>
          <div className="bg-theme-surface border border-theme-border rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <Info size={20} className="text-theme-primary mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-theme-text-secondary">
                  <strong>What happens next:</strong>
                </p>
                <ul className="text-sm text-theme-text-secondary mt-2 space-y-1">
                  <li>• Our team will analyze your current store</li>
                  <li>• We'll create a custom preview design</li>
                  <li>• You'll receive a live preview link via email</li>
                  <li>• No commitments until you love what you see</li>
                </ul>
              </div>
            </div>
          </div>
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
      <div>
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold text-theme-text mb-4">
            Get Your Store Preview
          </h2>
          <p className="text-base text-theme-text-secondary">
            Tell us about your current store and we'll create a beautiful preview for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-theme-text font-medium mb-2 text-base">
              Full Name *
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={`w-full px-6 py-4 pr-12 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 transition-all duration-200 text-base ${getFieldBorderClass('name')}`}
                disabled={isSubmitting}
                aria-describedby={validation.name.error ? 'name-error' : 'name-help'}
                aria-invalid={validation.name.error ? 'true' : 'false'}
              />
              {validation.name.touched && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {getFieldIcon('name')}
                </div>
              )}
            </div>
            {validation.name.touched && validation.name.error && (
              <p id="name-error" className="text-error-red text-sm mt-2 flex items-center space-x-2" role="alert">
                <AlertCircle size={16} />
                <span>{validation.name.error}</span>
              </p>
            )}
            {!validation.name.touched && (
              <p id="name-help" className="text-theme-text-secondary text-sm mt-2">
                We'll use this to personalize your store preview
              </p>
            )}
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-theme-text font-medium mb-2 text-base">
              Email Address *
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`w-full px-6 py-4 pr-12 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 transition-all duration-200 text-base ${getFieldBorderClass('email')}`}
                disabled={isSubmitting}
                aria-describedby={validation.email.error ? 'email-error' : 'email-help'}
                aria-invalid={validation.email.error ? 'true' : 'false'}
              />
              {validation.email.touched && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {getFieldIcon('email')}
                </div>
              )}
            </div>
            {validation.email.touched && validation.email.error && (
              <p id="email-error" className="text-error-red text-sm mt-2 flex items-center space-x-2" role="alert">
                <AlertCircle size={16} />
                <span>{validation.email.error}</span>
              </p>
            )}
            {!validation.email.touched && (
              <p id="email-help" className="text-theme-text-secondary text-sm mt-2">
                We'll send your store preview link to this email
              </p>
            )}
          </div>
          
          {/* Store URL Field */}
          <div>
            <label htmlFor="storeUrl" className="block text-theme-text font-medium mb-2 text-base">
              Current Store or Website *
            </label>
            <div className="relative">
              <input
                id="storeUrl"
                type="url"
                placeholder="mystore.com or instagram.com/mystore"
                value={formData.storeUrl}
                onChange={(e) => handleInputChange('storeUrl', e.target.value)}
                onBlur={() => handleBlur('storeUrl')}
                className={`w-full px-6 py-4 pr-12 bg-theme-surface border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-4 transition-all duration-200 text-base ${getFieldBorderClass('storeUrl')}`}
                disabled={isSubmitting}
                aria-describedby={validation.storeUrl.error ? 'storeUrl-error' : 'storeUrl-help'}
                aria-invalid={validation.storeUrl.error ? 'true' : 'false'}
              />
              {validation.storeUrl.touched && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {getFieldIcon('storeUrl')}
                </div>
              )}
            </div>
            {validation.storeUrl.touched && validation.storeUrl.error && (
              <p id="storeUrl-error" className="text-error-red text-sm mt-2 flex items-center space-x-2" role="alert">
                <AlertCircle size={16} />
                <span>{validation.storeUrl.error}</span>
              </p>
            )}
            {!validation.storeUrl.touched && (
              <p id="storeUrl-help" className="text-theme-text-secondary text-sm mt-2">
                Enter your Shopify store, website, or social media profile
              </p>
            )}
          </div>
          
          {/* Submit Error */}
          {submitError && (
            <div className="bg-error-red/10 border border-error-red/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <AlertCircle size={20} className="text-error-red flex-shrink-0" />
                <p className="text-error-red text-sm">{submitError}</p>
              </div>
            </div>
          )}
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className="w-full bg-theme-primary hover:bg-theme-primary-hover focus:bg-theme-primary-hover focus:outline-none focus:ring-4 focus:ring-theme-primary/30 text-white px-6 py-4 text-base font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating Your Preview...</span>
              </>
            ) : (
              <>
                <span>Get My Store Preview</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
          
          {/* Form Footer */}
          <div className="text-center">
            <p className="text-sm text-theme-text-secondary">
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        </form>
      </div>
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
          aria-label="Close form"
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