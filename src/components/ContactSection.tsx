
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Import/Export'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Import/Export'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-transition bg-gradient-to-b from-nandadip-gold/20 to-nandadip-cream py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to us for any inquiries or to request a quote for your import/export needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-nandadip-navy p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-nandadip-gold/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-nandadip-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="font-medium">nandadipinternational@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-nandadip-gold/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-nandadip-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="font-medium">+91 97667 87045</p>
                    <p className="font-medium">+91 95794 19509</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-nandadip-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-nandadip-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p className="font-medium">1st floor, Office No 105, Ganraj Complex, 2nd Ln, Market Yard, Gultekadi, Pune, Maharashtra 411037, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-nandadip-amber focus:border-nandadip-amber"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-nandadip-amber focus:border-nandadip-amber"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-nandadip-amber focus:border-nandadip-amber"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-nandadip-amber focus:border-nandadip-amber"
                  >
                    <option>Import/Export</option>
                    <option>Road Freight</option>
                    <option>Sea Freight</option>
                    <option>Air Freight</option>
                    <option>Warehousing</option>
                    <option>Customs Clearance</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-nandadip-amber focus:border-nandadip-amber"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-nandadip-amber hover:bg-nandadip-rust text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                )}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <div className="w-full h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.861206729644!2d73.86903800000002!3d18.489945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14465f8808d%3A0x44c396122953f7b4!2sNandadip%20International!5e0!3m2!1sen!2sin!4v1747487600093!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nandadip International Office Location"
                className="min-h-[450px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
