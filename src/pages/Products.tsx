
import { useState } from 'react';
import { Box, Briefcase, Building, Truck, Package, ShoppingBag, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productCategories = [
  { id: "all", name: "All Products" },
  { id: "industrial", name: "Industrial", icon: <Building className="h-5 w-5" /> },
  { id: "commercial", name: "Commercial", icon: <Briefcase className="h-5 w-5" /> },
  { id: "logistics", name: "Logistics", icon: <Truck className="h-5 w-5" /> },
  { id: "packaging", name: "Packaging", icon: <Package className="h-5 w-5" /> },
  { id: "storage", name: "Storage", icon: <Box className="h-5 w-5" /> },
  { id: "retail", name: "Retail", icon: <ShoppingBag className="h-5 w-5" /> },
];

const products = [
  {
    id: 1,
    name: "Heavy Duty Forklift",
    category: "industrial",
    description: "Industrial grade forklift with high load capacity and advanced safety features.",
    price: "$45,000",
    image: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Commercial Refrigeration System",
    category: "commercial",
    description: "Energy-efficient refrigeration system for commercial use.",
    price: "$12,500",
    image: "https://images.unsplash.com/photo-1621340886010-f8da79642bef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Logistics Management Software",
    category: "logistics",
    description: "Comprehensive software solution for efficient logistics management.",
    price: "$2,999/year",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Eco-friendly Packaging Materials",
    category: "packaging",
    description: "Sustainable packaging solutions that reduce environmental impact.",
    price: "$0.50/unit",
    image: "https://images.unsplash.com/photo-1530373239000-f6c9b3aa9591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Automated Storage System",
    category: "storage",
    description: "Space-saving storage solution with automated retrieval capabilities.",
    price: "$35,000",
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Retail Display Units",
    category: "retail",
    description: "Customizable display units designed for retail environments.",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Industrial Safety Equipment",
    category: "industrial",
    description: "Comprehensive safety gear for industrial workers.",
    price: "$350/set",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Commercial Kitchen Equipment",
    category: "commercial",
    description: "Professional-grade kitchen equipment for commercial kitchens.",
    price: "$7,500",
    image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Logistics Tracking Devices",
    category: "logistics",
    description: "GPS-enabled tracking devices for shipment monitoring.",
    price: "$120/unit",
    image: "https://images.unsplash.com/photo-1545537619-3b5475acd977?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Premium Packaging Boxes",
    category: "packaging",
    description: "Customizable high-quality packaging boxes for premium products.",
    price: "$1.20/unit",
    image: "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Warehouse Shelving System",
    category: "storage",
    description: "Heavy-duty warehouse shelving for optimal storage capacity.",
    price: "$5,500",
    image: "https://images.unsplash.com/photo-1586528116297-02f42a7e4181?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Retail POS System",
    category: "retail",
    description: "Comprehensive point of sale system for retail businesses.",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-nandadip-navy bg-nandadip-gold/20 mb-2">
          {productCategories.find(cat => cat.id === product.category)?.name}
        </span>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-nandadip-rust">{product.price}</span>
          <button className="bg-nandadip-navy text-white px-4 py-2 rounded hover:bg-nandadip-rust transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of high-quality products designed to meet your business needs
            </p>
          </div>

          {/* Desktop Category Tabs */}
          <div className="hidden md:block mb-12">
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-nandadip-cream/50 p-1 flex justify-center flex-wrap gap-1">
                {productCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-nandadip-navy data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      {category.icon && <span>{category.icon}</span>}
                      <span>{category.name}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Mobile Category Filter */}
          <div className="md:hidden mb-6">
            <button 
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full flex items-center justify-between bg-nandadip-cream/50 p-3 rounded"
            >
              <span className="font-medium">Filter by Category</span>
              <Filter className="h-5 w-5" />
            </button>
            
            {mobileFilterOpen && (
              <div className="bg-white mt-2 rounded shadow-lg p-2 animate-fade-in">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded flex items-center gap-2 ${
                      activeCategory === category.id ? "bg-nandadip-navy text-white" : ""
                    }`}
                  >
                    {category.icon && <span>{category.icon}</span>}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
