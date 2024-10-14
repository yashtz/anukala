import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Explore our Stories</a></li>
          </ul>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Canvas Paintings</a></li>
            <li><a href="#" className="hover:underline">Nameplates</a></li>
            <li><a href="#" className="hover:underline">Mural Work</a></li>
            <li><a href="#" className="hover:underline">Keyholders</a></li>
            <li><a href="#" className="hover:underline">Coasters</a></li>
            <li><a href="#" className="hover:underline">Indian Folk Art</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Order Status</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Anukala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
