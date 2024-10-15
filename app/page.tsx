import dynamic from 'next/dynamic';
import Image from 'next/image';

// const ProductSlider = dynamic(() => import('../app/components/ProductSlider'), { ssr: false });

const Home: React.FC = () => {
  const bestSellers = [
    { id: 1, name: '베스트 상품 1', price: '29,000', image: '/img/arsenal.png' },
    { id: 2, name: '베스트 상품 2', price: '39,000', image: '/img/arsenal.png' },
  ];

  const trendingItems = [
    { id: 3, name: '트렌드 상품 1', price: '34,000', image: '/img/arsenal.png' },
    { id: 4, name: '트렌드 상품 2', price: '44,000', image: '/img/arsenal.png' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Left side image */}
      <div className="absolute left-0 top-0 h-screen w-1/2 z-0">
        <Image 
          src="/img/arsenal.jpg" 
          alt="Left" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
      </div>

      {/* Right side image */}
      <div className="absolute right-0 top-0 h-screen w-1/2 z-0">
        <Image 
          src="/img/totenham.jpg" 
          alt="Right" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
      </div>

      {/* Scrollable content */}
      {/* <div className="relative z-10 container mx-auto px-4 pt-12 bg-white bg-opacity-90">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to Our Shop</h1>
        
        <ProductSlider title="베스트 셀러" products={bestSellers} />
        <ProductSlider title="트렌드 아이템" products={trendingItems} />
      </div> */}
    </div>
  );
};

export default Home;
