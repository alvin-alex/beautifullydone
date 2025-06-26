import React, { useState } from 'react';
import { Zap, Trophy, TrendingUp, ArrowRight, Code, Users, Palette, Clock, Target, Shield, CheckCircle } from 'lucide-react';
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
      <section className="h-screen relative flex items-center justify-center">
        {/* Subtle orange gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#F36103]/5 via-transparent to-transparent"></div>
        
        <div className="relative text-center max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Get a Store You're <span className="text-[#F36103]">Proud Of</span><span className="font-light">—Live in</span> 24 Hours
          </h1>
          <h2 className="text-xl md:text-2xl text-[#B5B5B4] mb-8 max-w-3xl mx-auto">
            {/* Mobile version */}
            <span className="md:hidden">
              No pitch. No proposals.
              <br />
              Just your new store—live and ready to sell.
            </span>
            {/* Desktop version */}
            <span className="hidden md:block">
              No pitch. No proposals. Just your new store
              <br />
              —live and ready to sell.
            </span>
          </h2>
          <button 
            onClick={handleCTAClick}
            className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 md:px-12 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center md:space-x-3"
          >
            <span>See My New Store</span>
            <ArrowRight size={20} className="hidden md:block ml-3" />
          </button>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16 md:py-24 px-4 bg-[#161616] tracking-[0.08em]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EEEDEC] mb-6">
              Your store needs an upgrade...
            </h2>
            <p className="text-2xl text-[#B5B5B4] mb-40">
              ...However, you're already running a business.
              <br />And that takes all your time!
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#EEEDEC] mb-12">
              So How Do You Get a Store That Actually Converts?
            </h3>
          </div>

          <div className="space-y-8 mb-48">
            {/* Option 1 */}
            <div className="border-l-4 border-[#595B5B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Code size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  BUILD IT YOURSELF?
                </h4>
                <p className="text-[#B5B5B4] text-xl">
                  If you have months to spare, it's not a problem. However, if you're actually running a business... this isn't realistic.
                </p>
              </div>
            </div>

            {/* Option 2 */}
            <div className="border-l-4 border-[#595B5B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  HIRE A DEVELOPER?
                </h4>
                <p className="text-[#B5B5B4] text-xl">
                  Finding good developers is expensive, vetting them is time-consuming. Even if you find the perfect person... You're still waiting 3-6 months and hoping they understand e-commerce.
                </p>
              </div>
            </div>

            {/* Option 3 */}
            <div className="border-l-4 border-[#595B5B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Palette size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  USE A TEMPLATE?
                </h4>
                <p className="text-[#B5B5B4] text-xl">
                  Don't have $20K+ for custom design? Well then you get the same template as 10,000 other stores. Not exactly built to convert your specific audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#EEEDEC] mb-8">
              "OK... But What Makes You Different?"
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Differentiator 1 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#595B5B] flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  SPEED
                </h4>
                <p className="text-[#B5B5B4] text-lg">
                  We don't build from scratch. Our AI has analyzed 1,000+ converting stores and rebuilds yours in under 24 hours. Less waiting, more selling.
                </p>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#595B5B] flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0">
                <Target size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  PROVEN
                </h4>
                <p className="text-[#B5B5B4] text-lg">
                  Our first priority is results. Every design element is based on real conversion data from stores that actually sell. Less guessing, more converting.
                </p>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#595B5B] flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  EFFORTLESS
                </h4>
                <p className="text-[#B5B5B4] text-lg">
                  You're not managing a project or dealing with revisions. Send us your current store URL, and get a new one back. That's it.
                </p>
              </div>
            </div>

            {/* Differentiator 4 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#595B5B] flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#F36103] mb-3">
                  GUARANTEED
                </h4>
                <p className="text-[#B5B5B4] text-lg">
                  We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it with our results guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-16 md:pt-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEDEC] mb-8">
            Ready for your dream store?
          </h2>
          <button 
            onClick={handleCTAClick}
            className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 md:px-12 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center md:space-x-3 mb-8"
          >
            <span>See My New Store</span>
            <ArrowRight size={20} className="hidden md:block ml-3" />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 bg-[#161616] border-t border-[#595B5B]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Newsletter Signup */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-[#EEEDEC] mb-4">
                Join our newsletter
              </h3>
              <p className="text-[#B5B5B4] mb-2">
                Get updates on store transformations, conversion tips, and exclusive offers.
              </p>
              <p className="text-[#B5B5B4] text-sm mb-6">
                Don't worry, we hate spam too.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#595B5B] rounded-lg text-[#EEEDEC] placeholder-[#B5B5B4] focus:outline-none focus:ring-2 focus:ring-[#F36103] transition-colors duration-200"
                />
                <button className="w-full bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-6 py-3 font-medium rounded-lg transition-colors duration-200">
                  Get Notified
                </button>
              </div>
              
              <p className="text-[#595B5B] text-xs mt-4 leading-relaxed">
                We need your contact information to send you updates about our services. You may unsubscribe from these communications at any time.
              </p>
            </div>

            {/* Pages */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-[#EEEDEC] mb-6">
                Pages
              </h3>
              <nav className="space-y-3">
                <a href="#" className="block text-[#B5B5B4] hover:text-[#F36103] transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="block text-[#B5B5B4] hover:text-[#F36103] transition-colors duration-200">
                  Newsletter
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-[#EEEDEC] mb-6">
                Contact
              </h3>
              <a 
                href="mailto:hello@beautifullydone.com" 
                className="text-[#B5B5B4] hover:text-[#F36103] transition-colors duration-200"
              >
                hello@beautifullydone.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bolt.new Badge */}
      <div className="bg-[#161616] py-4">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Line above copyright - matches footer line width */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-px bg-[#595B5B]"></div>
          
          {/* Copyright */}
          <div className="text-center text-[#595B5B] text-sm pt-4 pb-2">
            © 2025 Beautifully Done. All rights reserved.
          </div>
          
          <a 
            href="https://bolt.new/?rid=236em2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-200 pt-2 pb-4"
          >
            <img 
              src="https://i.imgur.com/IW2FOnu.png" 
              alt="Built with Bolt" 
              className="h-12"
            />
          </a>
        </div>
      </div>

      {/* Store Transformation Form Modal */}
      <StoreTransformationForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
      />
    </div>
  );
}

export default App;