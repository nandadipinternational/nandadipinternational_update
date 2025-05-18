
import { useEffect, useState } from 'react';

const TransportBackground = () => {
  const [activeVehicle, setActiveVehicle] = useState<'truck' | 'ship' | 'airplane'>('truck');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate the scroll percentage
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Set the vehicle based on scroll position
      if (scrollPercentage < 0.33) {
        setActiveVehicle('truck');
      } else if (scrollPercentage < 0.66) {
        setActiveVehicle('ship');
      } else {
        setActiveVehicle('airplane');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set correct vehicle
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="transport-background">
      <img 
        src="/truck.jpg" 
        alt="Logistics Truck" 
        className={`transport-image ${activeVehicle === 'truck' ? 'opacity-20' : 'opacity-0'}`}
      />
      <img 
        src="/ship.jpg" 
        alt="Cargo Ship" 
        className={`transport-image ${activeVehicle === 'ship' ? 'opacity-20' : 'opacity-0'}`}
      />
      <img 
        src="/airplane.jpg" 
        alt="Cargo Airplane" 
        className={`transport-image ${activeVehicle === 'airplane' ? 'opacity-20' : 'opacity-0'}`}
      />
    </div>
  );
};

export default TransportBackground;
