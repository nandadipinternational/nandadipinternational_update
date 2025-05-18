
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Globe, Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        <section className="bg-nandadip-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">
                  <span className="text-nandadip-gold">About</span> Nandadip International
                </h1>
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
              </div>
              
              <div className="relative">
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
        
        <section className="py-20 bg-nandadip-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center p-3 bg-nandadip-gold/20 rounded-full mb-4">
                  <Target className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in every aspect of our service delivery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center p-3 bg-nandadip-gold/20 rounded-full mb-4">
                  <Award className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">We conduct our business with the highest level of honesty and transparency.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center p-3 bg-nandadip-gold/20 rounded-full mb-4">
                  <Users className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
                <p className="text-gray-600">We collaborate effectively to deliver seamless logistics solutions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center p-3 bg-nandadip-gold/20 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We continuously improve our processes and services to stay ahead.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-nandadip-navy/5">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="text-2xl font-bold text-nandadip-amber">2013</div>
                    <div className="text-lg font-medium">Foundation</div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-600">
                      Nandadip International was founded with a vision to simplify international logistics 
                      and make global trade accessible to businesses of all sizes.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="text-2xl font-bold text-nandadip-rust">2016</div>
                    <div className="text-lg font-medium">Expansion</div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-600">
                      Expanded operations to cover 50+ countries and established strategic partnerships 
                      with key carriers and agents worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="text-2xl font-bold text-nandadip-navy">2019</div>
                    <div className="text-lg font-medium">Innovation</div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-600">
                      Implemented advanced tracking technology and digital solutions to enhance 
                      customer experience and operational efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="text-2xl font-bold text-nandadip-amber">2023</div>
                    <div className="text-lg font-medium">Present Day</div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-600">
                      Today, Nandadip International serves clients across 100+ countries and continues 
                      to expand its service portfolio and global network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
