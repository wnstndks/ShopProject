// pages/index.tsx
import React from 'react';
const Home: React.FC = () => {
  const products = [
    { id: 1, name: '제품 1', price: '20,000', image: '/images/product1.jpg' },
    { id: 2, name: '제품 2', price: '30,000', image: '/images/product2.jpg' },
    { id: 3, name: '제품 3', price: '40,000', image: '/images/product3.jpg' },
    // 추가 제품들...
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-10">홈페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      </div>
    </div>
  );
};

export default Home;
