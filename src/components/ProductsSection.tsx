
import { useRef } from 'react';
import { Box, Briefcase, Building, Truck, Package, ShoppingBag } from 'lucide-react';
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

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  image?: string;
}

const ProductCard = ({ title, description, icon, className, image }: ProductCardProps) => (
  <div className={cn(
    "bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col",
    className
  )}>
    {image ? (
      <div className="mb-4 overflow-hidden rounded-md">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>
    ) : (
      <div className="inline-flex items-center justify-center p-3 bg-nandadip-navy/10 rounded-full mb-4">
        {icon}
      </div>
    )}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const ProductsSection = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const products = [
    {
      title: "Industrial Supplies",
      description: "High-quality industrial supplies for manufacturing and production.",
      icon: <Building className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-navy"
    },
    {
      title: "Commercial Equipment",
      description: "Durable commercial equipment tailored to your business needs.",
      icon: <Briefcase className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-rust"
    },
    {
      title: "Logistics Solutions",
      description: "Comprehensive logistics tools and equipment for efficient operations.",
      icon: <Truck className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-amber"
    },
    {
      title: "Packaging Materials",
      description: "Eco-friendly and durable packaging materials for all shipping needs.",
      icon: <Package className="h-8 w-8 text-nandadip-gold" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-gold"
    },
    {
      title: "Storage Solutions",
      description: "Innovative storage systems for warehouse and inventory management.",
      icon: <Box className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-navy"
    },
    {
      title: "Retail Products",
      description: "Quality products for retail businesses and consumer sales.",
      icon: <ShoppingBag className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      className: "border-t-4 border-nandadip-rust"
    }
  ];

  return (
    <section id="products" className="section-transition bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Quality products designed to meet various industry needs and requirements
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
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="p-1 h-full">
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    icon={product.icon}
                    className={product.className}
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
            to="/products" 
            className="inline-block bg-nandadip-navy hover:bg-nandadip-rust text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
