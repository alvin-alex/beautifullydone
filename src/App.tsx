import React from 'react';
import { Zap, Trophy, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CaseStudy } from './components/CaseStudy';

function App() {
  const handleCTAClick = () => {
    // Scroll to hero section or handle form submission
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#161616] text-[#EEEDEC]">
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

      {/* Value Props Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Speed */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F36103] rounded-full flex items-center justify-center">
                <Zap size={32} className="text-[#161616]" />
              </div>
              <h3 className="text-2xl font-bold text-[#EEEDEC] mb-4">Speed</h3>
              <p className="text-[#A1A1A0] text-lg leading-relaxed">
                We crawl 1,000+ stores/day and rebuild yours in &lt;24 hours.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F36103] rounded-full flex items-center justify-center">
                <Trophy size={32} className="text-[#161616]" />
              </div>
              <h3 className="text-2xl font-bold text-[#EEEDEC] mb-4">Quality</h3>
              <p className="text-[#A1A1A0] text-lg leading-relaxed">
                Agency-grade design & copy—A/B tested on real buyers.
              </p>
            </div>

            {/* ROI */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F36103] rounded-full flex items-center justify-center">
                <TrendingUp size={32} className="text-[#161616]" />
              </div>
              <h3 className="text-2xl font-bold text-[#EEEDEC] mb-4">ROI</h3>
              <p className="text-[#A1A1A0] text-lg leading-relaxed">
                39.5% opens → 2.4% clicks → 5–15% MRR growth/mo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Preview Call-Out */}
      <section className="py-16 md:py-24 px-4 bg-[#1D1C1C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEDEC] mb-6">
            Your New Store Is Ready—Click to Launch
          </h2>
          <p className="text-[#A1A1A0] text-lg mb-8">
            preview.beautifullydone.com/your-store-id
          </p>
          <button className="border-2 border-[#F36103] text-[#F36103] hover:bg-[#F36103] hover:text-[#161616] px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2">
            <span>View My Live Preview</span>
            <ExternalLink size={20} />
          </button>
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