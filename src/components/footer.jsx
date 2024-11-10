import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rose-950 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-yeseva font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Explore our Stories</a></li>
          </ul>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-yeseva font-bold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline font-yeseva">Canvas Paintings</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Nameplates</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Mural Work</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Keyholders</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Coasters</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Indian Folk Art</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-yeseva">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline font-yeseva">Help Center</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Order Status</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Returns</a></li>
            <li><a href="#" className="hover:underline font-yeseva">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 font-yeseva text-center text-gray-400">
        <p>&copy; 2024 Anukala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
