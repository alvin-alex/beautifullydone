import React, { useState } from 'react';
import { Zap, Trophy, TrendingUp, ArrowRight, Code, Users, Palette, Clock, Target, Shield, CheckCircle, X } from 'lucide-react';
import { StoreTransformationForm } from './components/StoreTransformationForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCTAClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#161616] text-[#EEEDEC] tracking-wider">
      {/* Hero Section */}
      <section className="min-h-[80vh] md:h-screen relative flex items-center justify-center">
        {/* Subtle orange gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#F36103]/5 via-transparent to-transparent"></div>
        
        <div className="relative text-center max-w-4xl mx-auto px-4 z-10">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Get a Store You're <span className="text-[#FF6B0A]">Proud Of.</span><span className="font-light"> Live in</span> 24 Hours
          </h1>
          <h2 className="text-base md:text-2xl text-[#C4C4C2] mb-8 max-w-3xl mx-auto">
            {/* Mobile version */}
            <span className="md:hidden">
              No tech headaches. 
              <br /> 
              No agency fees.
              <br />
              Just your new store—live and ready to sell.
            </span>
            {/* Desktop version */}
            <span className="hidden md:block">
              No tech headaches. No agency fees. Just your new store
              <br />
              —live and ready to sell.
            </span>
          </h2>
          <button 
            onClick={handleCTAClick}
            className="bg-[#FF6B0A] hover:bg-[#E55A00] focus:bg-[#E55A00] focus:outline-none focus:ring-4 focus:ring-[#FF6B0A]/30 text-[#FFFFFF] px-6 md:px-12 py-4 text-base font-medium rounded-lg transition-all duration-200 inline-flex items-center md:space-x-3"
          >
            <span>See My New Store</span>
            <ArrowRight size={20} className="hidden md:block ml-3" />
          </button>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-24 px-4 bg-[#161616] tracking-[0.08em]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FF6B0A] mb-6">
              Your store needs an upgrade...
            </h2>
            <p className="text-base md:text-2xl text-[#C4C4C2] mb-8 md:mb-16">
              ...However, you're already running a business.
              <br />And that takes all your time!
            </p>

            {/* Vertical fade line */}
            <div className="flex justify-center mb-[200px]">
              <div className="w-px h-32 bg-gradient-to-b from-[#FF6B0A] via-[#FF6B0A]/50 to-transparent"></div>
            </div>

            {/* Agitation Section */}
            <div className="mt-16 mb-[200px]">
              <h2 className="font-heading text-xl md:text-3xl font-bold text-[#EEEDEC] mb-8 text-center">
                You're Already Overwhelmed.
              </h2>
              
              <p className="text-base text-[#C4C4C2] mb-8 text-center max-w-3xl mx-auto">
                You're running promotions, managing orders, and answering customer questions—while your website struggles to keep up. Every minute lost on a clunky store is revenue left on the table.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Outdated Design */}
                <div className="relative bg-[#1D1C1C] p-4 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] hover:shadow-lg transition-all duration-200">
                  <X size={20} className="absolute top-4 left-4 text-[#FF4444]" />
                  <h3 className="font-heading text-xl font-bold text-[#EEEDEC] mt-8 mb-2">
                    Outdated Design
                  </h3>
                  <p className="text-sm text-[#C4C4C2]">
                    Tired layouts and old templates repel first-time visitors before they click "Add to Cart."
                  </p>
                </div>
                
                {/* Card 2: Confusing Navigation */}
                <div className="relative bg-[#1D1C1C] p-4 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] hover:shadow-lg transition-all duration-200">
                  <X size={20} className="absolute top-4 left-4 text-[#FF4444]" />
                  <h3 className="font-heading text-xl font-bold text-[#EEEDEC] mt-8 mb-2">
                    Confusing Navigation
                  </h3>
                  <p className="text-sm text-[#C4C4C2]">
                    Buried menus and jargon-filled pages lead to abandoned carts and frustrated customers.
                  </p>
                </div>
                
                {/* Card 3: Missed Sales Opportunities */}
                <div className="relative bg-[#1D1C1C] p-4 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] hover:shadow-lg transition-all duration-200">
                  <X size={20} className="absolute top-4 left-4 text-[#FF4444]" />
                  <h3 className="font-heading text-xl font-bold text-[#EEEDEC] mt-8 mb-2">
                    Missed Sales Opportunities
                  </h3>
                  <p className="text-sm text-[#C4C4C2]">
                    Delayed updates and slow page loads mean you can't capitalize on peak buying moments.
                  </p>
                </div>
                
                {/* Card 4: Hidden Costs & Delays */}
                <div className="relative bg-[#1D1C1C] p-4 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] hover:shadow-lg transition-all duration-200">
                  <X size={20} className="absolute top-4 left-4 text-[#FF4444]" />
                  <h3 className="font-heading text-xl font-bold text-[#EEEDEC] mt-8 mb-2">
                    Hidden Costs & Delays
                  </h3>
                  <p className="text-sm text-[#C4C4C2]">
                    Freelancers and DIY templates drain your budget and schedule, with no conversion guarantees.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-[#EEEDEC] mb-12">
              So How Do You Get a Store That Actually Converts?
            </h3>
          </div>

          <div className="space-y-8 mb-24 md:mb-48">
            {/* Option 1 */}
            <div className="border-l-4 border-[#6B6B6B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Code size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  BUILD IT YOURSELF?
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  If you have months to spare, it's not a problem. However, if you're actually running a business... this isn't realistic.
                </p>
              </div>
            </div>

            {/* Option 2 */}
            <div className="border-l-4 border-[#6B6B6B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  HIRE A DEVELOPER?
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  Finding good developers is expensive, vetting them is time-consuming. Even if you find the perfect person... You're still waiting 3-6 months and hoping they understand e-commerce.
                </p>
              </div>
            </div>

            {/* Option 3 */}
            <div className="border-l-4 border-[#6B6B6B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Palette size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  USE A TEMPLATE?
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  Don't have $20K+ for custom design? Well then you get the same template as 10,000 other stores. Not exactly built to convert your specific audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-[#EEEDEC] mb-8">
              "OK... But What Makes You Different?"
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Differentiator 1 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] transition-all duration-200 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  SPEED
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  We don't build from scratch. Our AI has analyzed 1,000+ converting stores and rebuilds yours in under 24 hours. Less waiting, more selling.
                </p>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] transition-all duration-200 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0">
                <Target size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  PROVEN
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  Our first priority is results. Every design element is based on real conversion data from stores that actually sell. Less guessing, more converting.
                </p>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] transition-all duration-200 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  EFFORTLESS
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  You're not managing a project or dealing with revisions. Send us your current store URL, and get a new one back. That's it.
                </p>
              </div>
            </div>

            {/* Differentiator 4 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#6B6B6B] hover:border-[#FF6B0A] transition-all duration-200 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#FF6B0A] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-[#FF6B0A] mb-3">
                  GUARANTEED
                </h4>
                <p className="text-[#C4C4C2] text-base">
                  We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it with our results guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EEEDEC] mb-8">
            Ready for your dream store?
          </h2>
          <button 
            onClick={handleCTAClick}
            className="bg-[#FF6B0A] hover:bg-[#E55A00] focus:bg-[#E55A00] focus:outline-none focus:ring-4 focus:ring-[#FF6B0A]/30 text-[#FFFFFF] px-6 md:px-12 py-4 text-base font-medium rounded-lg transition-all duration-200 inline-flex items-center md:space-x-3 mb-8"
          >
            <span>See My New Store</span>
            <ArrowRight size={20} className="hidden md:block ml-3" />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="pt-24 pb-12 px-4 bg-[#161616] border-t border-[#6B6B6B]">
        <div className="max-w-6xl mx-auto">
          {/* Bottom section with logo and badge */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-[#C4C4C2] text-sm">
                © 2025 Beautifully Done. All rights reserved.
              </p>
            </div>
            
            {/* Company Logo */}
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/mBkue2A.png" 
                alt="Beautifully Done Logo" 
                className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Store Transformation Form Modal */}
      <StoreTransformationForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );
}

export default App;