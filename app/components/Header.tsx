// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-300">
      <div className="text-2xl font-bold text-gray-800">Zara Clone</div>
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
