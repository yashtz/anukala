import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black">
      <div className="text-xl text-white font-bold">ANUKALA</div>
      <div className="space-x-8 text-lg">
        <Link to="/" className="hover:underline text-white">Home</Link>
        <Link to="/shop" className="hover:underline text-white">Shop</Link>
        <Link to="/about" className="text-lg hover:text-gray-700 text-white">About</Link>
        
      </div>
      <div className="space-x-4 flex items-center">
      
        <FaShoppingCart className="text-xl hover:underline mx-4 text-white" />
        <Link to="/login" className="text-lg hover:text-gray-700 text-white">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
