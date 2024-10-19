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

  const image = ["/img/fs1.jpg", "/img/fs2.jpg", "/img/fs3.jpg", "/img/fs4.jpg"];

  const imageSets = [
    { left: "/img/arsenal.jpg", right: "/img/totenham.jpg" },
    { left: "/img/totenham.jpg", right: "/img/arsenal.jpg" },
  ];

  const calculateStyle = (index: number) => {
    const viewportHeight = window.innerHeight;
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
      {/* 이미지들을 고정된 크기로 표시 */}
      {image.map((imgSrc, index) => (
        <div key={index} className="relative h-[80vh] w-full overflow-hidden"> {/* 높이 명시 */}
          <Image
            src={imgSrc}
            alt={`Image ${index + 1}`}
            layout="responsive" /* 레이아웃을 고정된 비율로 */
            width={1920} /* 이미지를 적당한 해상도로 표시 */
            height={1080}
            objectFit="contain" /* 이미지를 잘리지 않게 */
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
                  layout="responsive"
                  width={960}
                  height={1080}
                  objectFit="contain"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src={set.right}
                  alt={`Right ${index + 1}`}
                  layout="responsive"
                  width={960}
                  height={1080}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
