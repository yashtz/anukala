import React from 'react';

import image14 from '../resources/image14.jpeg';
import image6 from '../resources/image6.jpeg';
import image8 from '../resources/image8.jpeg';

const ArrivalsSection = () => {
  return (
    <div className="text-center py-20 bg-[#78b087]"> 
      <h2 className="text-4xl mb-8">Our latest arrivals</h2> 
      <button className="px-8 py-3 border border-black mb-12 hover:bg-black hover:text-white transition">
        Shop All
      </button>
      <div className="flex justify-center space-x-10"> 
        <div className="w-72 h-96">
          <img src={image6} alt="Arrival 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-80 h-[30rem]">
          <img src={image8} alt="Arrival 2" className="w-full h-full object-cover" />
        </div>

        <div className="w-72 h-96">
          <img src={image14} alt="Arrival 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ArrivalsSection;
