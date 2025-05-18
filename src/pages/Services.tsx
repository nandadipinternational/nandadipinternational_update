
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truck, Ship, Plane, Package, Database, Shield, Warehouse, FileSpreadsheet, Globe, Map, Clipboard, FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <div className={cn(
    "bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
    className
  )}>
    <div className="inline-flex items-center justify-center p-3 bg-nandadip-gold/20 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Contract Logistics",
      description: "Customized logistics solutions designed to meet your specific business requirements.",
      icon: <FileSpreadsheet className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-amber"
    },
    {
      title: "Project Logistics",
      description: "Specialized logistics services for complex and large-scale project requirements.",
      icon: <Clipboard className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-rust"
    },
    {
      title: "On-Site Logistics",
      description: "Professional logistics management directly at your facility or project location.",
      icon: <Map className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-navy"
    },
    {
      title: "Freight Forwarding",
      description: "Comprehensive freight forwarding services to optimize your shipping routes globally.",
      icon: <Globe className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-amber"
    },
    {
      title: "Land Transportation",
      description: "Efficient road transportation services across countries with tracking and timely delivery.",
      icon: <Truck className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-rust"
    },
    {
      title: "Sea Freight",
      description: "Reliable sea freight services for bulk shipments with competitive rates worldwide.",
      icon: <Ship className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-navy"
    },
    {
      title: "Open Yard Storage",
      description: "Secure open yard storage facilities for oversized cargo and equipment.",
      icon: <Warehouse className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-amber"
    },
    {
      title: "Supply Chain Consultancy",
      description: "Expert consultation to optimize your entire supply chain for efficiency and cost savings.",
      icon: <FileSearch className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-rust"
    },
    {
      title: "Customs Clearance",
      description: "Expert customs clearance services ensuring smooth import and export procedures.",
      icon: <Shield className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-navy"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 bg-gradient-to-b from-nandadip-cream to-nandadip-gold/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your international shipping requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={service.className}
              />
            ))}
          </div>
          
          <div className="py-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-nandadip-amber">Global Coverage</h3>
                  <p className="text-gray-600">
                    Our extensive network spans across continents, enabling us to provide 
                    seamless logistics solutions wherever your business takes you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-nandadip-rust">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    We offer transparent and competitive pricing with no hidden costs, 
                    ensuring you get the best value for your logistics investment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-nandadip-navy">End-to-End Solutions</h3>
                  <p className="text-gray-600">
                    From pickup to delivery, we handle every aspect of your shipment, 
                    providing a seamless experience from start to finish.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-nandadip-amber">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our dedicated customer service team is available around the clock 
                    to assist you with any inquiries or updates on your shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
