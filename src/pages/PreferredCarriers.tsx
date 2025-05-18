
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

const PreferredCarriers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Images for the background sections
  const images = [
    '/airplane1.png',
    '/truck.png',
    '/ship.png'
  ];

  // Content sections
  const sections = [
    {
      title: "Airline Partners",
      content: "Our airline partners provide global air freight solutions with extensive networks and reliable schedules, ensuring your cargo reaches its destination quickly and safely."
    },
    {
      title: "Road Transport Partners",
      content: "Our road transport partners provide efficient inland transportation solutions, offering door-to-door delivery services with tracking capabilities for complete visibility."
    },
    {
      title: "Shipping Line Partners",
      content: "Our shipping line partners operate extensive global networks, providing reliable ocean freight services for containerized, break bulk, and project cargo."
    }
  ];

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate which section we're in based on scroll position
      const scrollPercentage = scrollPosition / (docHeight - windowHeight);
      
      if (scrollPercentage < 0.33) {
        setCurrentSection(0);
      } else if (scrollPercentage < 0.66) {
        setCurrentSection(1);
      } else {
        setCurrentSection(2);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Motion values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 0.33], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], [100, 0]);
  const y3 = useTransform(scrollYProgress, [0.66, 1], [100, 0]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.33], [1, 0.3, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.33, 0.63, 0.66], [0, 1, 0.3, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.63, 0.66, 1], [0, 1, 1]);

  // Sample carrier logos (these would be replaced with actual partner logos)
  const carriers = {
    airline: [
      { name: 'Air France', logo: '/airlines-logos/air-france.svg' },
      { name: 'Air India', logo: '/airlines-logos/air-india.svg' },
      { name: 'British Airways', logo: '/airlines-logos/british-airways.svg' },
      { name: 'Cathay Pacific', logo: '/airlines-logos/cathay-pacific.svg' },
      { name: 'Etihad Airways', logo: '/airlines-logos/etihad-airways.svg' },
      { name: 'IndiGo', logo: '/airlines-logos/indigo.svg' },
      { name: 'Oman Air', logo: '/airlines-logos/oman-air.svg' },
      { name: 'Qatar Airways', logo: '/airlines-logos/qatar-airways.svg' },
      { name: 'Saudia', logo: '/airlines-logos/saudia.svg' },
      { name: 'Thai Airways', logo: '/airlines-logos/thai-airways.svg' },
      { name: 'Turkish Airlines', logo: '/airlines-logos/turkish-airlines.svg' },
      { name: 'emirates', logo: '/airlines-logos/emirates-airlines.svg' },
    ],
    shipping: [
      { name: 'Maersk', logo: '/shipping-logos/maersk-group.svg' },
      { name: 'CMA CGM', logo: '/shipping-logos/cma-cgm.svg' },
      { name: 'Hapag-Lloyd', logo: '/shipping-logos/hapag-lloyd.svg' },
      { name: 'Evergreen', logo: '/shipping-logos/evergreen.svg' },
      { name: 'COSCO', logo: '/shipping-logos/cosco.png' },
    ],
    road: [
      { name: 'Road Transport Partner 1', logo: '/placeholder.svg' },
      { name: 'Road Transport Partner 2', logo: '/placeholder.svg' },
      { name: 'Road Transport Partner 3', logo: '/placeholder.svg' },
      { name: 'Road Transport Partner 4', logo: '/placeholder.svg' },
      { name: 'Road Transport Partner 5', logo: '/placeholder.svg' },
    ],
  };

  return (
    <div className="bg-nandadip-cream min-h-screen" ref={containerRef}>
      {/* Fixed Navbar with overlay */}
      <div className="absolute w-full z-50">
        <Navbar />
      </div>
      
      {/* Hero section */}
      <div className="relative h-[30vh] md:h-[40vh] bg-nandadip-navy overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Our Preferred Carriers</h1>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img src="/airplane.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Fixed background images */}
      <div className="fixed left-0 top-0 w-1/3 h-full flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center"
          style={{ opacity: opacity1, y: y1 }}
        >
          <img 
            src={images[0]} 
            alt="Air Freight" 
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center"
          style={{ opacity: opacity2, y: y2 }}
        >
          <img 
            src={images[1]} 
            alt="Land Transportation" 
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center"
          style={{ opacity: opacity3, y: y3 }}
        >
          <img 
            src={images[2]} 
            alt="Sea Freight" 
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      </div>
      
      {/* Content sections */}
      <div className="container mx-auto px-4 py-16">
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-16 text-nandadip-navy md:ml-[33%]">
          We partner with the world's leading transportation providers to ensure reliable, efficient, 
          and high-quality service for all your logistics needs.
        </p>
        
        <div className="md:ml-[33%] relative z-10">
          {/* Airlines Section */}
          <motion.div 
            className="min-h-screen py-24 flex flex-col justify-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pr-12 pl-6">
              <div className="bg-white rounded-lg shadow-xl p-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-nandadip-rust mb-6">
                  {sections[0].title}
                </h2>
                <div className="w-24 h-1 bg-nandadip-navy mb-6"></div>
                <p className="mb-6 text-lg leading-relaxed">
                  {sections[0].content}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {carriers.airline.map((carrier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 flex flex-col items-center rounded-lg hover:shadow-lg transition-shadow w-full"
                    >
                      <div className="flex items-center justify-center w-full h-24 mb-2">
                        <img 
                          src={carrier.logo} 
                          alt={carrier.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="w-full text-center truncate text-nandadip-navy font-medium">{carrier.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Road Transport Section */}
          <motion.div 
            className="min-h-screen py-24 flex flex-col justify-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pr-12 pl-6">
              <div className="bg-white rounded-lg shadow-xl p-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-nandadip-rust mb-6">
                  {sections[1].title}
                </h2>
                <div className="w-24 h-1 bg-nandadip-navy mb-6"></div>
                <p className="mb-6 text-lg leading-relaxed">
                  {sections[1].content}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {carriers.road.map((carrier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
                    >
                      <div className="flex items-center justify-center w-full h-24 mb-2">
                        <img 
                          src={carrier.logo} 
                          alt={carrier.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="w-full text-center truncate text-nandadip-navy font-medium">{carrier.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shipping Lines Section */}
          <motion.div 
            className="min-h-screen py-24 flex flex-col justify-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pr-12 pl-6">
              <div className="bg-white rounded-lg shadow-xl p-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-nandadip-rust mb-6">
                  {sections[2].title}
                </h2>
                <div className="w-24 h-1 bg-nandadip-navy mb-6"></div>
                <p className="mb-6 text-lg leading-relaxed">
                  {sections[2].content}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {carriers.shipping.map((carrier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
                    >
                      <div className="flex items-center justify-center w-full h-24 mb-2">
                        <img 
                          src={carrier.logo} 
                          alt={carrier.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="w-full text-center truncate text-nandadip-navy font-medium">{carrier.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add extra space at the bottom to prevent footer overlap */}
      <div className="h-24"></div>
      
      <Footer />
    </div>
  );
};

export default PreferredCarriers;
