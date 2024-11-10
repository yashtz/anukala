import React from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-rose-950">
      <div className="text-xl font-yeseva text-white font-bold">ANUKALA</div>
      <div className="space-x-8  font-yeseva text-lg">
        <Link to="/" className="hover:underline text-white">Home</Link>
        <Link to="/shop" className="hover:underline text-white">Shop</Link>
        <Link to="/about" className="text-lg hover:underline text-white">About</Link>
        
      </div>
      <div className="space-x-4 flex items-center">
        <Link to="/login" className="text-lg font-yeseva hover:underline text-white">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
