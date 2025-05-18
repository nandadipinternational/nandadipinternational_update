
import { CheckCircle, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-transition bg-nandadip-navy text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-nandadip-gold">About</span> Nandadip International
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Founded with a vision to simplify global trade, Nandadip International has become a 
              trusted partner for businesses looking to expand their reach across borders. With decades of 
              combined experience, our team provides tailored logistics solutions that drive efficiency and growth.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-nandadip-gold mr-3 mt-1 flex-shrink-0" />
                <p>Over 10 years of experience in international logistics and supply chain management</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-nandadip-gold mr-3 mt-1 flex-shrink-0" />
                <p>Strategic partnerships with carriers and agents across 100+ countries worldwide</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-nandadip-gold mr-3 mt-1 flex-shrink-0" />
                <p>Dedicated customer service team providing 24/7 support and shipment tracking</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-nandadip-amber hover:bg-nandadip-rust text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="bg-nandadip-rust/20 rounded-full h-72 w-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative bg-nandadip-gold/10 p-1 rounded-lg">
              <div className="bg-nandadip-navy p-6 rounded-lg border border-nandadip-gold/30">
                <div className="flex justify-center mb-6">
                  <Globe className="h-24 w-24 text-nandadip-gold" strokeWidth={1} />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Global Network</h3>
                  <p className="text-gray-300">
                    Our extensive network spans across continents, enabling us to provide 
                    seamless logistics solutions wherever your business takes you.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-nandadip-gold">100+</p>
                    <p className="text-sm text-gray-400">Countries Served</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-nandadip-gold">5000+</p>
                    <p className="text-sm text-gray-400">Successful Shipments</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-nandadip-gold">98%</p>
                    <p className="text-sm text-gray-400">On-time Delivery</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-nandadip-gold">24/7</p>
                    <p className="text-sm text-gray-400">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
