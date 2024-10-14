import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import image2 from '../resources/image2.jpeg';
import image3 from '../resources/image3.jpeg';
import image4 from '../resources/image4.jpeg';
import image12 from '../resources/image12.jpeg';

function ProductPage() {
  const { productId } = useParams(); 
  const navigate = useNavigate();  

  const products = {
    'Enlightened Serenity': {
      name: 'Enlightened Serenity',
      price: '₹35,000',
      description: 'A peaceful and contemplative depiction of the Buddhas face surrounded by falling leaves and lotus flowers, symbolizing spiritual awakening and tranquility.',
      dimensions: '24" x 36"',
      medium: 'Acrylic on Canvas',
      frame: 'Black Wooden Frame with a matte finish',
      imageUrl: image12,  
    },
    'Rainy Day Romance': {
      name: 'Rainy Day Romance',
      price: ' ₹42,000',
      description: 'A romantic scene of a couple walking hand-in-hand under an umbrella on a rainy day. The painting captures the cozy atmosphere and the beauty of a rainy day.',
      dimensions: '30" x 40"',
      medium: 'Acrylic on canvas',
      frame: 'Black wooden frame with a matte finish',
      imageUrl: image2, 
    },
    'Azure Blossoms': {
      name: 'Azure Blossoms',
      price: '₹38,000',
      description: 'A vibrant and uplifting depiction of a field of blooming blue poppies, symbolizing joy, beauty, and new beginnings.',
      dimensions: '30" x 40"',
      medium: 'Acrylic on canvas',
      frame: 'Black wooden frame with a matte finish',
      imageUrl: image3,
    },
    'Poppy Paradise': {
      name: 'Poppy Paradise',
      price: '₹40,000',
      description: 'A bold depiction of modern life, where cityscapes and reflections merge to create an abstract portrayal of urban energy.',
      dimensions: '30" x 40"',
      medium: 'Acrylic on Canvas',
      frame: 'Black Wooden Frame',
      imageUrl: image4,
    },
  };

  const product = products[productId];

  const handleBackToShop = () => {
    navigate('/shop');
  };

  return product ? (
    <div className="min-h-screen bg-[#78b087] p-8 flex">

      <div className="w-1/4 flex flex-col justify-start">

        <button
          onClick={handleBackToShop}
          className="mb-4 px-4 py-2 bg-black text-white rounded-sm"
        >
          ← Back to Shop
        </button>

        <div className="bg-gray-300 h-96 w-full mb-4">
          <img
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-3/4 pl-8">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl">{product.price}</p>
        <p className="mt-4">{product.description}</p>
        <p className="mt-2">Dimensions: {product.dimensions}</p>
        <p className="mt-2">Medium: {product.medium}</p>
        <p className="mt-2">Frame: {product.frame}</p>

        <div className="mt-8">
          <button className="px-4 py-2 bg-black text-white mr-4">Add to Cart</button>
          <button className="px-4 py-2 bg-blue-600 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-[#c3c796] flex items-center justify-center">
      <h2 className="text-2xl">Product Not Found</h2>
    </div>
  );
}

export default ProductPage;
