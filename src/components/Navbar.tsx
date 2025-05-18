
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Preferred Carriers', href: '/preferred-carriers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <div className="logo">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </div>
          <span className="text-nandadip-rust transition-colors duration-300 pt-4">
            Nandadip
          </span>
          <span className="ml-1 pt-4 text-nandadip-navy">International</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium ${isScrolled ? 'text-nandadip-navy hover:text-nandadip-rust' : 'text-white hover:text-nandadip-cream'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-nandadip-rust hover:bg-nandadip-navy text-white px-5 py-2 rounded-md"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-nandadip-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-nandadip-navy py-4 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-nandadip-navy hover:text-nandadip-rust py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-nandadip-rust hover:bg-nandadip-rust text-white px-5 py-2 rounded-md inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
