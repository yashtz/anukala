import React from 'react';

const Confirmation = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      {/* Tick Image */}
      <img 
        src="./tick.png" 
        alt="Order Confirmed" 
        className="w-68 h-66 mb-6" 
      />
      
      <h1 className="text-5xl font-bold mb-4">Order Confirmation</h1>
      <p className="text-3xl">Thank You For Purchasing From Our Store</p>
    </div>
  );
};

export default Confirmation;