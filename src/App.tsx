import React from 'react';
import { Zap, Trophy, TrendingUp, ArrowRight, Code, Users, Palette, Clock, Target, Shield, CheckCircle } from 'lucide-react';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CaseStudy } from './components/CaseStudy';

function App() {
  const handleCTAClick = () => {
    // Scroll to hero section or handle form submission
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#161616] text-[#EEEDEC] tracking-wider">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <BeforeAfterSlider
          beforeImage="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          afterImage="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="absolute inset-0"
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              Get a Store You're <span className="text-[#F36103]">Proud Of</span>—Live in 24 Hours
            </h1>
            <h2 className="text-xl md:text-2xl text-[#A1A1A0] mb-8 max-w-3xl mx-auto">
              No pitch. No proposals. Just your new store—live and ready to sell.
            </h2>
            <button 
              onClick={handleCTAClick}
              className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-12 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center space-x-3"
            >
              <span>See AI Transform My Store Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16 md:py-24 px-4 bg-[#1D1C1C]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EEEDEC] mb-6">
              Your store needs an upgrade...
            </h2>
            <p className="text-xl text-[#A1A1A0] mb-16">
              ...However, you're already running a business.
              <br />And that takes all your time!
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#EEEDEC] mb-12">
              So How Do You Get a Store That Actually Converts?
            </h3>
          </div>

          <div className="space-y-8 mb-16">
            {/* Option 1 */}
            <div className="border-l-4 border-[#595B5B] pl-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Code size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  BUILD IT YOURSELF?
                </h4>
                <p className="text-[#A1A1A0] text-lg">
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
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  HIRE A DEVELOPER?
                </h4>
                <p className="text-[#A1A1A0] text-lg">
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
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  USE A TEMPLATE?
                </h4>
                <p className="text-[#A1A1A0] text-lg">
                  Don't have $20K+ for custom design? Well then you get the same template as 10,000 other stores. Not exactly built to convert your specific audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#EEEDEC] mb-8">
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
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  SPEED
                </h4>
                <p className="text-[#A1A1A0]">
                  We don't build from scratch. Our AI has analyzed 1,000+ converting stores and rebuilds yours in <24 hours. Less waiting, more selling.
                </p>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#595B5B] flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0">
                <Target size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  PROVEN
                </h4>
                <p className="text-[#A1A1A0]">
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
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  EFFORTLESS
                </h4>
                <p className="text-[#A1A1A0]">
                  You're not managing a project or dealing with revisions. Send us your current store URL, and you get a new one back. That's it.
                </p>
              </div>
            </div>

            {/* Differentiator 4 */}
            <div className="bg-[#161616] p-6 rounded-lg border border-[#595B5B] flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F36103] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-[#161616]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#F36103] mb-3">
                  GUARANTEED
                </h4>
                <p className="text-[#A1A1A0]">
                  We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it with our results guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <CaseStudy
            storeName="Artisan Jewelry Co."
            beforeImage="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
            afterImage="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800"
            conversionLift="340"
            avgOrderValueLift="85"
            trafficSalesLift="220"
            ownerQuote="We went from 2 sales a month to 15 sales a day. The design completely changed our business."
          />

          <CaseStudy
            storeName="Urban Coffee Roasters"
            beforeImage="https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=800"
            afterImage="https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=800"
            conversionLift="280"
            avgOrderValueLift="120"
            trafficSalesLift="195"
            ownerQuote="Our subscription orders tripled within the first month. The new site converted visitors we were losing before."
          />

          <CaseStudy
            storeName="Handmade Ceramics Studio"
            beforeImage="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800"
            afterImage="https://images.pexels.com/photos/4207893/pexels-photo-4207893.jpeg?auto=compress&cs=tinysrgb&w=800"
            conversionLift="425"
            avgOrderValueLift="65"
            trafficSalesLift="310"
            ownerQuote="I couldn't believe how professional it looked. Customers started placing bigger orders immediately."
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEDEC] mb-8">
            Ready for your dream store?
          </h2>
          <button 
            onClick={handleCTAClick}
            className="bg-[#F36103] hover:bg-[#994B1A] text-[#161616] px-12 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-flex items-center space-x-3 mb-8"
          >
            <span>See AI Transform My Store Now</span>
            <ArrowRight size={20} />
          </button>
          
          {/* Bolt.new Badge */}
          <div className="border-t border-[#595B5B] pt-8">
            <a 
              href="https://bolt.new/?rid=236em2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="https://i.imgur.com/IW2FOnu.png" 
                alt="Built with Bolt" 
                className="h-12"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;