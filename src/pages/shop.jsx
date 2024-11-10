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
    <div className="w-full min-h-screen font-yeseva bg-gray-100 px-4 py-8"> 
      <div className="flex justify-between items-center mb-6">
   
        <div className="flex space-x-4">
          {['Abstract', 'Landscapes', 'Portraits', 'Still Life'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-sm border transition duration-300 ${
                selectedCategory === category 
                  ? 'bg-rose-950 text-white shadow-lg' 
                  : 'border-rose-950 text-black hover:bg-rose-950 hover:text-white'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-black">Sort By</label>
          <select id="sort" className="border border-black px-2 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-black">
            <option value="popular">Popular</option>
            <option value="new">New Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
        {[{img: image12, title: 'Enlightened Serenity'}, {img: image2, title: 'Rainy Day Romance'}, {img: image3, title: 'Azure Blossoms'}, {img: image4, title: 'Poppy Paradise'}].map((product, index) => (
          <div 
            key={index}
            className="bg-gray-100 outline outline-pink-950 h-80 flex flex-col justify-center items-center cursor-pointer p-4 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            onClick={() => handleProductClick(product.title)}
          >
            <img src={product.img} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" /> 
            <h2 className="text-center text-lg font-bold">{product.title}</h2>
          </div>
        ))}
      </div>

      <div className="text-right mt-4 text-black">
        Showing 4 Products
      </div>
    </div>
  );
}

export default ShopPaintings;
