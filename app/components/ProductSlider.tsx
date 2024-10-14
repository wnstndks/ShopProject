// components/ProductSlider.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="px-2">
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={400}
        className="w-full h-48 object-cover"
        style={{ objectFit: 'cover' }} // 추가된 부분
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}원</p>
      </div>
    </div>
  </div>
);


interface ProductSliderProps {
  title: string;
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;