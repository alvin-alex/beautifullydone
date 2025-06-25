import React from 'react';
import { Zap, Trophy, TrendingUp, ArrowRight, Code, Users, Palette, Clock, Target, Shield, CheckCircle } from 'lucide-react';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CaseStudy } from './components/CaseStudy';
import { Button } from './components/Button';
import { IconContainer } from './components/IconContainer';
import { Section } from './components/Section';
import { Container } from './components/Container';

function App() {
  const handleCTAClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <BeforeAfterSlider
          beforeImage="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          afterImage="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="absolute inset-0"
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Container className="text-center">
            <h1 className="text-display-xl md:text-display-2xl font-bold mb-6 leading-tight">
              Get a Store You're <span className="text-gradient">Proud Of</span>
              <span className="font-light">—Live in</span> 24 Hours
            </h1>
            <h2 className="text-body-xl md:text-heading-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              No pitch. No proposals. Just your new store
              <br />
              —live and ready to sell.
            </h2>
            <Button 
              variant="primary"
              size="large"
              onClick={handleCTAClick}
              className="shadow-lg hover:shadow-xl"
            >
              <span>See AI Transform My Store Now</span>
              <ArrowRight size={20} />
            </Button>
          </Container>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <Section variant="alt" className="space-y-16">
        <Container narrow className="text-center">
          <h2 className="text-display-lg md:text-display-xl font-bold mb-6">
            Your store needs an upgrade...
          </h2>
          <p className="text-heading-xl text-text-secondary mb-40">
            ...However, you're already running a business.
            <br />And that takes all your time!
          </p>
          <h3 className="text-display-md md:text-display-lg font-semibold mb-12">
            So How Do You Get a Store That Actually Converts?
          </h3>
        </Container>

        <Container narrow>
          <div className="space-y-8 mb-48">
            {/* Option 1 */}
            <div className="card border-l-4 border-l-border-accent pl-6 flex items-start gap-4">
              <IconContainer>
                <Code size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  BUILD IT YOURSELF?
                </h4>
                <p className="text-body-xl text-text-secondary">
                  If you have months to spare, it's not a problem. However, if you're actually running a business... this isn't realistic.
                </p>
              </div>
            </div>

            {/* Option 2 */}
            <div className="card border-l-4 border-l-border-accent pl-6 flex items-start gap-4">
              <IconContainer>
                <Users size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  HIRE A DEVELOPER?
                </h4>
                <p className="text-body-xl text-text-secondary">
                  Finding good developers is expensive, vetting them is time-consuming. Even if you find the perfect person... You're still waiting 3-6 months and hoping they understand e-commerce.
                </p>
              </div>
            </div>

            {/* Option 3 */}
            <div className="card border-l-4 border-l-border-accent pl-6 flex items-start gap-4">
              <IconContainer>
                <Palette size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  USE A TEMPLATE?
                </h4>
                <p className="text-body-xl text-text-secondary">
                  Don't have $20K+ for custom design? Well then you get the same template as 10,000 other stores. Not exactly built to convert your specific audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-display-md md:text-display-lg font-semibold mb-8">
              "OK... But What Makes You Different?"
            </h3>
          </div>

          <div className="grid-2">
            {/* Differentiator 1 */}
            <div className="card card-hover flex items-start gap-4">
              <IconContainer>
                <Clock size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  SPEED
                </h4>
                <p className="text-body-lg text-text-secondary">
                  We don't build from scratch. Our AI has analyzed 1,000+ converting stores and rebuilds yours in under 24 hours. Less waiting, more selling.
                </p>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="card card-hover flex items-start gap-4">
              <IconContainer>
                <Target size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  PROVEN
                </h4>
                <p className="text-body-lg text-text-secondary">
                  Our first priority is results. Every design element is based on real conversion data from stores that actually sell. Less guessing, more converting.
                </p>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="card card-hover flex items-start gap-4">
              <IconContainer>
                <CheckCircle size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  EFFORTLESS
                </h4>
                <p className="text-body-lg text-text-secondary">
                  You're not managing a project or dealing with revisions. Send us your current store URL, and you get a new one back. That's it.
                </p>
              </div>
            </div>

            {/* Differentiator 4 */}
            <div className="card card-hover flex items-start gap-4">
              <IconContainer>
                <Shield size={24} className="text-text-inverse" />
              </IconContainer>
              <div>
                <h4 className="text-heading-xl font-bold text-brand-primary mb-3">
                  GUARANTEED
                </h4>
                <p className="text-body-lg text-text-secondary">
                  We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it with our results guarantee.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section>
        <Container>
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
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <Container narrow className="text-center">
          <h2 className="text-display-md md:text-display-lg font-bold mb-8">
            Ready for your dream store?
          </h2>
          <Button 
            variant="primary"
            size="large"
            onClick={handleCTAClick}
            className="mb-8 shadow-lg hover:shadow-xl"
          >
            <span>See AI Transform My Store Now</span>
            <ArrowRight size={20} />
          </Button>
          
          {/* Bolt.new Badge */}
          <div className="relative pt-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[170%] h-px bg-border-primary top-0"></div>
            <a 
              href="https://bolt.new/?rid=236em2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-200 pt-8 pb-2 focus-ring rounded-lg"
            >
              <img 
                src="https://i.imgur.com/IW2FOnu.png" 
                alt="Built with Bolt" 
                className="h-12"
              />
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default App;