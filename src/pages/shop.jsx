import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import image12 from '../resources/image12.jpeg'; 
import image2 from '../resources/image2.jpeg';
import image3 from '../resources/image3.jpeg';
import image4 from '../resources/image4.jpeg';

function ShopPaintings() {
  const [selectedCategory, setSelectedCategory] = useState('Abstract');
  const navigate = useNavigate(); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="w-full min-h-screen bg-[#78b087] px-4 py-8"> 
      <div className="flex justify-between items-center mb-6">
   
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Abstract' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Abstract')}
          >
            Abstract
          </button>
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Landscapes' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Landscapes')}
          >
            Landscapes
          </button>
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Portraits' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Portraits')}
          >
            Portraits
          </button>
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Still Life' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Still Life')}
          >
            Still Life
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-black">Sort By</label>
          <select id="sort" className="border border-black px-2 py-1 rounded-sm">
            <option value="popular">Popular</option>
            <option value="new">New Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center cursor-pointer" onClick={() => handleProductClick('Enlightened Serenity')}>
          <img src={image12} alt="Enlightened Serenity" className="w-full h-64 object-cover mb-4" /> 
          <h2 className="text-center text-lg font-bold">Enlightened Serenity</h2>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center cursor-pointer" onClick={() => handleProductClick('Rainy Day Romance')}>
          <img src={image2} alt="Rainy Day Romance" className="w-full h-64 object-cover mb-4" /> 
          <h2 className="text-center text-lg font-bold">Rainy Day Romance</h2>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center cursor-pointer" onClick={() => handleProductClick('Azure Blossoms')}>
          <img src={image3} alt="Azure Blossoms" className="w-full h-64 object-cover mb-4" /> 
          <h2 className="text-center text-lg font-bold">Azure Blossoms</h2>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center cursor-pointer" onClick={() => handleProductClick('Poppy Paradise')}>
          <img src={image4} alt="Poppy Paradise" className="w-full h-64 object-cover mb-4" />
          <h2 className="text-center text-lg font-bold">Poppy Paradise</h2>
        </div>


      </div>

      <div className="text-right mt-4 text-black">
        Showing 8 Products
      </div>
    </div>
  );
}

export default ShopPaintings;
