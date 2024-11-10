import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import image2 from '../resources/image2.jpeg';
import image3 from '../resources/image3.jpeg';
import image4 from '../resources/image4.jpeg';
import image12 from '../resources/image12.jpeg';
import { ShoppingCartIcon, LightningBoltIcon } from '@heroicons/react/solid';

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

  const handleBuyNow = () => {
    navigate('/checkout', { state: product });
  };
  

  return product ? (
    <div className="min-h-screen bg-yellow-100 p-8 flex flex-col lg:flex-row lg:p-12">
      <div className="lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
        <button
          onClick={handleBackToShop}
          className="mb-6 px-4 py-2 bg-rose-950 text-white rounded-md shadow hover:bg-yellow-100 hover:text-rose-950 hover:outline hover:outline-rose-950 transition duration-300"
        >
          ← Back to Shop
        </button>

        <div className="bg-gray-300 h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="lg:w-1/2 font-yeseva lg:pl-12 text-left">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-2xl font-lato font-semibold text-gray-700 mt-2">{product.price}</p>

        <div className="text-gray-700 mt-6">
          <p className="text-lg">{product.description}</p>
          <p className="mt-4"><strong>Dimensions:</strong> {product.dimensions}</p>
          <p className="mt-2"><strong>Medium:</strong> {product.medium}</p>
          <p className="mt-2"><strong>Frame:</strong> {product.frame}</p>
        </div>

        <div className="mt-10 flex space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-md shadow hover:bg-blue-600 transition duration-300 flex items-center space-x-2">
            {/* Cart Icon from Heroicons */}
            <ShoppingCartIcon className="h-5 w-5 text-white" />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={handleBuyNow}
            className="px-6 py-3 bg-rose-800 text-white rounded-md shadow hover:bg-green-700 transition duration-300 flex items-center space-x-2"
          >
            {/* Lightning Icon from Heroicons */}
            <LightningBoltIcon className="h-5 w-5 text-white" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-[#c3c796] flex items-center justify-center">
      <h2 className="text-2xl text-gray-800">Product Not Found</h2>
    </div>
  );
}

export default ProductPage;
