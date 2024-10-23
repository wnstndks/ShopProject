"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrollY(window.scrollY);
      const handleResize = () => setViewportHeight(window.innerHeight);

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      handleResize(); // 초기 화면 로드 시에 화면 크기 설정

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const image = ["/img/fs1.jpg", "/img/fs2.jpg", "/img/fs4.jpg"];

  const calculateStyle = (index: number) => {
    const offset = scrollY - index * viewportHeight;
    const progress = Math.max(0, Math.min(offset / viewportHeight, 1));

    const translateY = progress * 20;

    return {
      transform: `translateY(-${translateY}%)`,
      transition: "transform 0.3s ease-out",
    };
  };

  return (
    <div className="relative">
      {/* Single images */}
      {image.map((imgSrc, index) => (
        <div key={index} className="relative h-screen w-full sticky top-0 overflow-hidden">
          <div className="relative h-full w-full flex justify-center items-center">
            <Image
              src={imgSrc}
              alt={`${index + 1}`}
              layout="fill"
              objectFit="contain" // 이미지가 잘리지 않고 비율에 맞게 축소
              style={{ objectPosition: "center" }} // 이미지를 가운데로 맞춤
            />
          </div>
        </div>
      ))}
    </div>
  );
}
