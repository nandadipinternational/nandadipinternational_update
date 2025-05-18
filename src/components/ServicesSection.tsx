
import { useRef } from 'react';
import { Truck, Ship, Plane, Package, Database, Shield, Warehouse, FileSpreadsheet, Globe, Map, Clipboard, FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <div className={cn(
    "bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col",
    className
  )}>
    <div className="inline-flex items-center justify-center p-3 bg-nandadip-gold/20 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const ServicesSection = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

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
    <section id="services" className="section-transition bg-gradient-to-b from-nandadip-cream to-nandadip-gold/20 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive logistics solutions tailored to meet your international shipping requirements
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="p-1 h-full">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    className={service.className}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-block bg-nandadip-amber hover:bg-nandadip-rust text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
