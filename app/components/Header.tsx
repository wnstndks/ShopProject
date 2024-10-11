// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">Zara Clone</div>
      <div className="space-x-4">
        <button className="focus:outline-none">Search</button>
        <button className="focus:outline-none">Cart</button>
      </div>
    </header>
  );
};

export default Header;
