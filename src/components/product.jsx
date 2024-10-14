import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 ml-4 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold mr-2">{product.price}</span>
            <div className="flex space-x-2">
              <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-700">-</button>
              <span className="text-lg">{product.quantity}</span>
              <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-700">+</button>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white">Add to Cart</button>
            <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;