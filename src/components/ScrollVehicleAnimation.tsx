
import { useEffect, useState } from 'react';

const ScrollVehicleAnimation = () => {
  const [activeVehicle, setActiveVehicle] = useState<'truck' | 'ship' | 'airplane'>('truck');
  const [opacity, setOpacity] = useState(1);
  const [position, setPosition] = useState(50); // Initial position (percentage from top)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate the scroll percentage
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Calculate the position (20% at top, 80% at bottom)
      const newPosition = 20 + (scrollPercentage * 60);
      setPosition(newPosition);
      
      // Set the vehicle based on scroll position
      if (scrollPercentage < 0.33) {
        if (activeVehicle !== 'truck') {
          setOpacity(0);
          setTimeout(() => {
            setActiveVehicle('truck');
            setOpacity(1);
          }, 300);
        }
      } else if (scrollPercentage < 0.66) {
        if (activeVehicle !== 'ship') {
          setOpacity(0);
          setTimeout(() => {
            setActiveVehicle('ship');
            setOpacity(1);
          }, 300);
        }
      } else {
        if (activeVehicle !== 'airplane') {
          setOpacity(0);
          setTimeout(() => {
            setActiveVehicle('airplane');
            setOpacity(1);
          }, 300);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set correct position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeVehicle]);

  return (
    <div 
      className="scroll-vehicle" 
      style={{ 
        opacity: opacity, 
        transition: 'opacity 0.3s ease',
        top: `${position}%`,
        transform: 'translateY(-50%)'
      }}
    >
      {activeVehicle === 'truck' && (
        <img 
          src="/truck.png" 
          alt="Truck" 
          className="w-full h-full object-contain animate-float" 
        />
      )}
      {activeVehicle === 'ship' && (
        <img 
          src="/ship.png" 
          alt="Ship" 
          className="w-full h-full object-contain animate-float" 
        />
      )}
      {activeVehicle === 'airplane' && (
        <img 
          src="/airplane1.png" 
          alt="Airplane" 
          className="w-full h-full object-contain animate-float" 
        />
      )}
    </div>
  );
};

export default ScrollVehicleAnimation;
