import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-800">Zara Clone</div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">상의</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">아우터</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">하의</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">신발</a></li>
              </ul>
            </nav>
          </div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;