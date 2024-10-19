"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const image = ["/img/fs4.jpg", "/img/fs2.jpg", "/img/fs3.jpg"];

  const imageSets = [
    { left: "/img/arsenal.jpg", right: "/img/totenham.jpg" },
    { left: "/img/totenham.jpg", right: "/img/arsenal.jpg" },
  ];

  const calculateStyle = (index: number) => {
    const viewportHeight = window.innerHeight;
    const offset = scrollY - index * viewportHeight;
    const progress = Math.max(0, Math.min(offset / viewportHeight, 1));

    // Move the image up by 20% of its height
    const translateY = progress * 20;

    return {
      transform: `translateY(-${translateY}%)`,
      transition: "transform 0.3s ease-out",
    };
  };

  return (
    <div className="relative">
      {/* image 배열을 반복해서 각각 렌더링 */}
      {image.map((imgSrc, index) => (
        <div key={index} className="relative h-screen w-full sticky top-0 overflow-hidden">
          <Image
            src={imgSrc} // 템플릿 리터럴을 사용하여 이미지 경로 설정
            alt={`${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      {/* imageSets 배열을 반복해서 각각 렌더링 */}
      {imageSets.map((set, index) => (
        <div
          key={index}
          className="relative h-screen w-full sticky top-0 overflow-hidden"
        >
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
