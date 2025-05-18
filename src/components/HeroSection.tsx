import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative bg-nandadip-navy text-nandadip-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 bg-nandadip-rust rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 bg-nandadip-rust rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Background image for headline */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-center bg-cover"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nandadip 
            <span className="text-nandadip-rust block mt-2">International</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-nandadip-cream/80">
          UNLOCKING OPPORTUNITIES WITH EXPERTISE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-nandadip-rust hover:bg-nandadip-rust text-white px-8 py-3 rounded-md transition-colors duration-300 text-lg font-medium"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="border-2 border-nandadip-rust hover:bg-nandadip-rust/20 text-nandadip-rust px-8 py-3 rounded-md transition-colors duration-300 text-lg font-medium"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-sm opacity-70 hover:opacity-100">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
