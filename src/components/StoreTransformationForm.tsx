import React, { useState } from 'react';
import { X, ArrowRight, Upload, ArrowLeft, CheckCircle } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface StoreTransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type Screen = 
  | 'welcome'
  | 'contact'
  | 'shopify-check'
  | 'existing-store-url'
  | 'existing-store-loading'
  | 'existing-store-result'
  | 'new-store-upload'
  | 'new-store-details'
  | 'new-store-loading'
  | 'new-store-result';

interface FormData {
  name: string;
  email: string;
  hasShopifyStore: boolean | null;
  storeUrl: string;
  businessName: string;
  productCategories: string;
  brandDescription: string;
  uploadedFiles: File[];
}

export const StoreTransformationForm: React.FC<StoreTransformationFormProps> = ({
  isOpen,
  onClose
}) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    hasShopifyStore: null,
    storeUrl: '',
    businessName: '',
    productCategories: '',
    brandDescription: '',
    uploadedFiles: []
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loadingProgress, setLoadingProgress] = useState(0);

  if (!isOpen) return null;

  const handleClose = () => {
    setCurrentScreen('welcome');
    setFormData({
      name: '',
      email: '',
      hasShopifyStore: null,
      storeUrl: '',
      businessName: '',
      productCategories: '',
      brandDescription: '',
      uploadedFiles: []
    });
    setErrors({});
    setLoadingProgress(0);
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

  const handleNext = () => {
    const newErrors: Record<string, string> = {};

    if (currentScreen === 'contact') {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    } else if (currentScreen === 'existing-store-url') {
      if (!formData.storeUrl.trim()) newErrors.storeUrl = 'Store URL is required';
      else if (!isValidUrl(formData.storeUrl)) newErrors.storeUrl = 'Please enter a valid URL';
    } else if (currentScreen === 'new-store-details') {
      if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
      if (!formData.productCategories.trim()) newErrors.productCategories = 'Product categories are required';
      if (!formData.brandDescription.trim()) newErrors.brandDescription = 'Brand description is required';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Navigate to next screen
    if (currentScreen === 'welcome') setCurrentScreen('contact');
    else if (currentScreen === 'contact') setCurrentScreen('shopify-check');
    else if (currentScreen === 'existing-store-url') {
      setCurrentScreen('existing-store-loading');
      simulateLoading('existing');
    } else if (currentScreen === 'new-store-details') {
      setCurrentScreen('new-store-loading');
      simulateLoading('new');
    }
  };

  const simulateLoading = (type: 'existing' | 'new') => {
    setLoadingProgress(0);
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCurrentScreen(type === 'existing' ? 'existing-store-result' : 'new-store-result');
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    const validFiles = Array.from(files).filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      return isValidType && isValidSize;
    });

    setFormData(prev => ({ ...prev, uploadedFiles: validFiles }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#EEEDEC] mb-4">
              Let's build your dream store.
            </h2>
            <p className="text-xl text-[#B5B5B4] mb-12">
              Answer a few quick questions and get a preview in seconds.
            </p>
            <button
              onClick={handleNext}
              className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-12 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center space-x-3"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-8">
              What's your name and email?
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`w-full px-6 py-4 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 text-lg ${
                    errors.name ? 'border-red-500' : 'border-[#595B5B]'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`w-full px-6 py-4 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 text-lg ${
                    errors.email ? 'border-red-500' : 'border-[#595B5B]'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <span>Next</span>
              <ArrowRight size={20} />
            </button>
          </div>
        );

      case 'shopify-check':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-12 text-center">
              Do you already have a Shopify store?
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, hasShopifyStore: true }));
                  setCurrentScreen('existing-store-url');
                }}
                className="bg-[#161616] border border-[#595B5B] hover:border-[#F36103] hover:bg-[#1D1C1C] text-[#EEEDEC] px-8 py-12 rounded-lg transition-all duration-200 text-center"
              >
                <div className="text-xl font-medium mb-2">Yes, I have a store</div>
                <div className="text-[#B5B5B4] text-sm">We'll transform your existing store</div>
              </button>
              
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, hasShopifyStore: false }));
                  setCurrentScreen('new-store-upload');
                }}
                className="bg-[#161616] border border-[#595B5B] hover:border-[#F36103] hover:bg-[#1D1C1C] text-[#EEEDEC] px-8 py-12 rounded-lg transition-all duration-200 text-center"
              >
                <div className="text-xl font-medium mb-2">No, I don't have a store yet</div>
                <div className="text-[#B5B5B4] text-sm">We'll build you a custom store</div>
              </button>
            </div>
          </div>
        );

      case 'existing-store-url':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-8">
              What's your store URL?
            </h2>
            <div className="mb-8">
              <input
                type="text"
                placeholder="https://yourstore.myshopify.com"
                value={formData.storeUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, storeUrl: e.target.value }))}
                className={`w-full px-6 py-4 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 text-lg ${
                  errors.storeUrl ? 'border-red-500' : 'border-[#595B5B]'
                }`}
              />
              {errors.storeUrl && <p className="text-red-500 text-sm mt-2">{errors.storeUrl}</p>}
            </div>
            
            <button
              onClick={handleNext}
              className="w-full bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <span>Analyze My Store</span>
              <ArrowRight size={20} />
            </button>
          </div>
        );

      case 'existing-store-loading':
        return (
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-[#595B5B] border-t-[#F36103] rounded-full animate-spin mx-auto mb-8"></div>
            
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-4">
              Analyzing your store...
            </h2>
            <p className="text-xl text-[#B5B5B4] mb-8">
              Transforming design & copy
            </p>
            
            <div className="w-full bg-[#595B5B] rounded-full h-3 mb-4">
              <div 
                className="bg-[#F36103] h-3 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-[#B5B5B4]">{loadingProgress}% complete</p>
          </div>
        );

      case 'existing-store-result':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-8 text-center">
              Here's your new store preview!
            </h2>
            
            <div className="mb-8">
              <BeforeAfterSlider
                beforeImage="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800"
                afterImage="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="w-full h-96 rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                Import to Shopify
              </button>
              <button className="bg-[#161616] border border-[#595B5B] hover:border-[#F36103] text-[#EEEDEC] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                Make Edits
              </button>
            </div>
          </div>
        );

      case 'new-store-upload':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-8">
              Upload your raw product photos
            </h2>
            
            <div 
              className="border-2 border-dashed border-[#595B5B] rounded-lg p-12 text-center mb-8 hover:border-[#F36103] transition-colors duration-200"
              onDrop={(e) => {
                e.preventDefault();
                handleFileUpload(e.dataTransfer.files);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <Upload size={48} className="text-[#F36103] mx-auto mb-4" />
              <p className="text-xl text-[#EEEDEC] mb-2">
                Drop your images here, or{' '}
                <label className="text-[#F36103] cursor-pointer hover:underline">
                  browse files
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e.target.files)}
                  />
                </label>
              </p>
              <p className="text-[#B5B5B4]">JPEG/PNG ≤10MB each</p>
            </div>

            {formData.uploadedFiles.length > 0 && (
              <div className="mb-8">
                <p className="text-[#EEEDEC] font-medium mb-4">
                  {formData.uploadedFiles.length} file(s) uploaded
                </p>
                <div className="space-y-2">
                  {formData.uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#1D1C1C] px-4 py-2 rounded">
                      <span className="text-[#B5B5B4]">{file.name}</span>
                      <CheckCircle size={16} className="text-[#F36103]" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={() => setCurrentScreen('new-store-details')}
              disabled={formData.uploadedFiles.length === 0}
              className="w-full bg-[#F36103] hover:bg-[#994B1A] disabled:bg-[#595B5B] disabled:cursor-not-allowed text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <span>Continue</span>
              <ArrowRight size={20} />
            </button>
          </div>
        );

      case 'new-store-details':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-8">
              Tell us your store details
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-[#EEEDEC] font-medium mb-2">Business Name</label>
                <input
                  type="text"
                  placeholder="e.g., Artisan Coffee Co."
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  className={`w-full px-6 py-4 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 text-lg ${
                    errors.businessName ? 'border-red-500' : 'border-[#595B5B]'
                  }`}
                />
                {errors.businessName && <p className="text-red-500 text-sm mt-2">{errors.businessName}</p>}
              </div>
              
              <div>
                <label className="block text-[#EEEDEC] font-medium mb-2">Product Categories</label>
                <input
                  type="text"
                  placeholder="e.g., Coffee, Tea, Accessories"
                  value={formData.productCategories}
                  onChange={(e) => setFormData(prev => ({ ...prev, productCategories: e.target.value }))}
                  className={`w-full px-6 py-4 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 text-lg ${
                    errors.productCategories ? 'border-red-500' : 'border-[#595B5B]'
                  }`}
                />
                {errors.productCategories && <p className="text-red-500 text-sm mt-2">{errors.productCategories}</p>}
              </div>
              
              <div>
                <label className="block text-[#EEEDEC] font-medium mb-2">Short Brand Description</label>
                <textarea
                  placeholder="e.g., Premium organic coffee roasted fresh daily"
                  value={formData.brandDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandDescription: e.target.value }))}
                  rows={4}
                  className={`w-full px-6 py-4 bg-[#161616] border rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200 text-lg resize-none ${
                    errors.brandDescription ? 'border-red-500' : 'border-[#595B5B]'
                  }`}
                />
                {errors.brandDescription && <p className="text-red-500 text-sm mt-2">{errors.brandDescription}</p>}
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <span>Build My Store</span>
              <ArrowRight size={20} />
            </button>
          </div>
        );

      case 'new-store-loading':
        return (
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-[#595B5B] border-t-[#F36103] rounded-full animate-spin mx-auto mb-8"></div>
            
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-4">
              Building your store...
            </h2>
            <p className="text-xl text-[#B5B5B4] mb-8">
              Crafting design, copy & images
            </p>
            
            <div className="w-full bg-[#595B5B] rounded-full h-3 mb-4">
              <div 
                className="bg-[#F36103] h-3 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-[#B5B5B4]">{loadingProgress}% complete</p>
          </div>
        );

      case 'new-store-result':
        return (
          <div>
            <h2 className="text-3xl font-bold text-[#EEEDEC] mb-8 text-center">
              Your custom store is ready!
            </h2>
            
            <div className="mb-8">
              <div className="bg-[#1D1C1C] rounded-lg p-8 border border-[#595B5B]">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Desktop Preview */}
                  <div>
                    <h3 className="text-[#F36103] font-medium mb-4">Desktop Preview</h3>
                    <div className="bg-[#161616] rounded border border-[#595B5B] aspect-video flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Desktop Preview"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Mobile Preview */}
                  <div>
                    <h3 className="text-[#F36103] font-medium mb-4">Mobile Preview</h3>
                    <div className="bg-[#161616] rounded border border-[#595B5B] aspect-[9/16] max-w-48 mx-auto flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Mobile Preview"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                Claim This Store
              </button>
              <button className="bg-[#161616] border border-[#595B5B] hover:border-[#F36103] text-[#EEEDEC] px-6 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                Request Tweaks
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const showBackButton = !['welcome', 'shopify-check', 'existing-store-loading', 'existing-store-result', 'new-store-loading', 'new-store-result'].includes(currentScreen);

  const handleBack = () => {
    if (currentScreen === 'contact') setCurrentScreen('welcome');
    else if (currentScreen === 'existing-store-url') setCurrentScreen('shopify-check');
    else if (currentScreen === 'new-store-upload') setCurrentScreen('shopify-check');
    else if (currentScreen === 'new-store-details') setCurrentScreen('new-store-upload');
  };

  const getProgressInfo = () => {
    // Define the step mapping for each flow
    const existingStoreFlow = ['welcome', 'contact', 'shopify-check', 'existing-store-url', 'existing-store-loading', 'existing-store-result'];
    const newStoreFlow = ['welcome', 'contact', 'shopify-check', 'new-store-upload', 'new-store-details', 'new-store-loading', 'new-store-result'];
    
    // Determine which flow we're in
    const isExistingStoreFlow = formData.hasShopifyStore === true || 
      ['existing-store-url', 'existing-store-loading', 'existing-store-result'].includes(currentScreen);
    
    const isNewStoreFlow = formData.hasShopifyStore === false || 
      ['new-store-upload', 'new-store-details', 'new-store-loading', 'new-store-result'].includes(currentScreen);
    
    let currentStep = 0;
    let totalSteps = 6; // Default
    
    if (isExistingStoreFlow) {
      currentStep = existingStoreFlow.indexOf(currentScreen);
      totalSteps = existingStoreFlow.length;
    } else if (isNewStoreFlow) {
      currentStep = newStoreFlow.indexOf(currentScreen);
      totalSteps = newStoreFlow.length;
    } else {
      // For early screens before branching
      const earlyScreens = ['welcome', 'contact', 'shopify-check'];
      currentStep = earlyScreens.indexOf(currentScreen);
      totalSteps = 6; // Assume average flow length
    }
    
    return { currentStep, totalSteps };
  };

  const ProgressIndicator = () => {
    const { currentStep, totalSteps } = getProgressInfo();
    
    return (
      <div className="flex justify-center space-x-2 py-4 flex-shrink-0">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === currentStep
                ? 'w-2 h-6 bg-[#F36103]' // Active: stretched vertically and orange
                : index < currentStep
                ? 'w-2 h-2 bg-[#F36103] opacity-60' // Completed: orange but smaller
                : 'w-2 h-2 bg-[#595B5B]' // Inactive: grey
            }`}
          />
        ))}
      </div>
    );
  };
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-[#161616] rounded-lg p-8 md:p-12 max-w-5xl w-full h-[85vh] border border-[#595B5B] relative overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close and Back buttons */}
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="text-[#B5B5B4] hover:text-[#F36103] transition-colors duration-200 flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
          )}
          {!showBackButton && <div></div>}
          
          <button
            onClick={handleClose}
            className="text-[#B5B5B4] hover:text-[#F36103] transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto transition-all duration-300">
          {renderScreen()}
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator />
      </div>
    </div>
  );
};