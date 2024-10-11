// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-6 mt-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-sm mb-2">© 2024 Zara Clone. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
