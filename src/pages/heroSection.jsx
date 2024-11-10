import React, { useState, useEffect } from 'react';

import image1 from '../resources/image1.jpeg'; 
import image2 from '../resources/image2.jpeg';
import image3 from '../resources/image3.jpeg';
import image4 from '../resources/image4.jpeg';
import image5 from '../resources/image5.jpeg';

const HeroSection = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-yellow-100 text-center px-4 pt-20">
      <div
        className="w-[80%] h-[80vh] bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      
    </div>
  );
};

export default HeroSection;
