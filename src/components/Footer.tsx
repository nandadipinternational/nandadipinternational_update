
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-nandadip-navy">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Nandadip Logo" className="h-10 w-auto mr-3" />
              <h3 className="text-2xl font-bold">
                <span className="text-nandadip-rust">Nandadip</span> International
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Providing comprehensive global logistics solutions with reliability and excellence.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-100 hover:bg-nandadip-rust/20 text-nandadip-rust p-2.5 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-nandadip-rust/20 text-nandadip-rust p-2.5 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-nandadip-rust/20 text-nandadip-rust p-2.5 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-nandadip-rust/20 text-nandadip-rust p-2.5 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <span className="bg-nandadip-rust/20 p-1 rounded mr-2 inline-flex">
                <Truck className="h-4 w-4 text-nandadip-rust" />
              </span>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Road Freight
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Air Freight
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <span className="bg-nandadip-rust/20 p-1 rounded mr-2 inline-flex">
                <MapPin className="h-4 w-4 text-nandadip-rust" />
              </span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-nandadip-rust transition-colors duration-200 flex items-center">
                  <span className="mr-2">•</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <span className="bg-nandadip-rust/20 p-1 rounded mr-2 inline-flex">
                <Phone className="h-4 w-4 text-nandadip-rust" />
              </span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 h-5 w-5 text-nandadip-rust shrink-0" />
                <span className="text-gray-600">info@nandadip.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 h-5 w-5 text-nandadip-rust shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 text-nandadip-rust shrink-0" />
                <span className="text-gray-600">
                  123 Logistics Avenue, Suite 101
                  <br />Mumbai, India
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 mt-1 h-5 w-5 text-nandadip-rust shrink-0" />
                <span className="text-gray-600">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />Sat: 10:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer - Modernized */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 text-sm mb-4 text-center">
              &copy; 2025 Nandadip International. All rights reserved.
            </p>
            <div className="flex justify-center flex-wrap gap-5">
              <a href="#" className="text-gray-500 hover:text-nandadip-rust transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-nandadip-rust transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-nandadip-rust transition-colors duration-200 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
