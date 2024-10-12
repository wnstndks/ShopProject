// app/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const ProductSlider = dynamic(() => import('../app/components/ProductSlider'), { ssr: false });

const Home: React.FC = () => {
  const bestSellers = [
    { id: 1, name: '베스트 상품 1', price: '29,000', image: '/images/arsenal.png' },
    { id: 2, name: '베스트 상품 2', price: '39,000', image: '/images/arsenal.png' },
    { id: 3, name: '베스트 상품 3', price: '49,000', image: '/images/arsenal.png' },
    { id: 4, name: '베스트 상품 4', price: '59,000', image: '/images/arsenal.png' },
    { id: 5, name: '베스트 상품 5', price: '69,000', image: '/images/arsenal.png' },
  ];

  const trendingItems = [
    { id: 6, name: '트렌드 상품 1', price: '34,000', image: '/images/arsenal.png' },
    { id: 7, name: '트렌드 상품 2', price: '44,000', image: '/images/arsenal.png' },
    { id: 8, name: '트렌드 상품 3', price: '54,000', image: '/images/arsenal.png' },
    { id: 9, name: '트렌드 상품 4', price: '64,000', image: '/images/arsenal.png' },
    { id: 10, name: '트렌드 상품 5', price: '74,000', image: '/images/arsenal.png' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Our Shop</h1>
      
      <ProductSlider title="베스트 셀러" products={bestSellers} />
      <ProductSlider title="트렌드 아이템" products={trendingItems} />
    </div>
  );
};

export default Home;