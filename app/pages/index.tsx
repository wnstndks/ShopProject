// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Main Banner */}
      <section className="relative h-screen bg-gray-200">
        <img
          src="/banner-image.jpg"
          alt="New Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl">New Collection</h1>
          <button className="mt-4 bg-white text-black px-6 py-2">Shop Now</button>
        </div>
      </section>

      {/* Product Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="bg-white">
          <img src="/product1.jpg" alt="Product 1" className="w-full" />
          <div className="p-4">
            <h2 className="text-lg">Product Name</h2>
            <p>$39.99</p>
          </div>
        </div>
        {/* More products... */}
      </section>
    </Layout>
  );
};

export default Home;
