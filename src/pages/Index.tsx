import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // This ensures that the scroll position is at the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <CategorySection /> {/* New section with white background */}
        <ServicesSection /> {/* Keeps its current color */}
        <ProductsSection /> {/* Will now have white background */}
        <AboutSection /> {/* Keeps its current color */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
