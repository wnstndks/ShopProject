'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageSets = [
    { left: '/img/arsenal.jpg', right: '/img/totenham.jpg' },
    { left: '/img/totenham.jpg', right: '/img/arsenal.jpg' }
  ];

  const calculateStyle = (index: number) => {
    const viewportHeight = window.innerHeight;
    const offset = scrollY - index * viewportHeight;
    const progress = Math.max(0, Math.min(offset / viewportHeight, 1));
    
    // Move the image up by 20% of its height
    const translateY = progress * 20;
    
    return {
      transform: `translateY(-${translateY}%)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return (
    <div className="relative">
      {imageSets.map((set, index) => (
        <div key={index} className="relative h-screen w-full sticky top-0 overflow-hidden">
          <div className="absolute inset-0" style={calculateStyle(index)}>
            <div className="relative h-full w-full flex">
              <div className="flex-1 relative">
                <Image 
                  src={set.left} 
                  alt={`Left ${index + 1}`} 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-1 relative">
                <Image 
                  src={set.right} 
                  alt={`Right ${index + 1}`} 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}