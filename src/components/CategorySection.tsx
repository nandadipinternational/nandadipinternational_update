
import { Briefcase, Truck, Plane, Ship, Box, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image: string;
}

const CategoryCard = ({ title, description, icon, link, image }: CategoryCardProps) => (
  <Link to={link} className="group block">
    <div className="bg-nandadip-cream/30 p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col items-center text-center h-full">
      <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 p-3 bg-white/80 rounded-full group-hover:bg-nandadip-rust/20 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-nandadip-navy group-hover:text-nandadip-rust transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const CategorySection = () => {
  const categories = [
    {
      title: "Logistics Services",
      description: "Comprehensive logistics solutions for all your transportation needs",
      icon: <Truck className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      link: "/services",
      image: "/images/logistics-services.jpg"
    },
    {
      title: "Air Freight",
      description: "Fast and reliable air freight services worldwide",
      icon: <Plane className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />,
      link: "/services",
      image: "/images/air-freight.jpg"
    },
    {
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for bulk cargo",
      icon: <Ship className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      link: "/services",
      image: "/images/ocean-freight.jpg"
    },
    {
      title: "Industrial Products",
      description: "Quality products designed for industrial applications",
      icon: <Box className="h-8 w-8 text-nandadip-rust" strokeWidth={1.5} />,
      link: "/products",
      image: "/images/industrial-products.jpg"
    },
    {
      title: "Supply Chain",
      description: "End-to-end supply chain management solutions",
      icon: <Briefcase className="h-8 w-8 text-nandadip-amber" strokeWidth={1.5} />,
      link: "/services",
      image: "/images/supply-chain.jpg"
    },
    {
      title: "Packaging",
      description: "Innovative packaging solutions for safe transportation",
      icon: <Package className="h-8 w-8 text-nandadip-navy" strokeWidth={1.5} />,
      link: "/products",
      image: "/images/packaging.jpg"
    }
  ];

  return (
    <section id="categories" className="section-transition bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our comprehensive range of logistics services and industrial products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              link={category.link}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
