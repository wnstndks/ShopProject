"use client";
import { useState } from "react";

export default function Header() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: { [key: string]: string[] } = {
    Man: ["상의", "바지", "아우터", "신발"],
    Woman: ["상의", "바지", "아우터", "신발"],
    Kids: ["상의", "바지", "아우터", "신발"],
  };

  // 한글 하위 카테고리 -> 영어 URL 변환 객체
  const categoryMapping: { [key: string]: string } = {
    상의: "Clothes",
    바지: "Pants",
    아우터: "Outer",
    신발: "Shoes",
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* 로고 부분 */}
            <div className="text-6xl font-bold text-black">
              <a href="/">Your Zara</a>
            </div>

            {/* 카테고리 네비게이션 */}
            <nav className="ml-10">
              <ul className="flex space-x-6">
                {Object.keys(categories).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="text-black hover:text-blue-500 transition duration-300"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 검색 및 기타 버튼 */}
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
                style={{ marginLeft: "-20px" }}
              />
              <button className="text-black px-4 py-2 rounded-md hover:text-blue-600 transition duration-300">
                <a href="/Login">Login</a>
              </button>
              <button className="text-black px-4 py-2 rounded-md hover:text-blue-600 transition duration-300">
                <a href="/Wish">Wish</a>
              </button>
              <button className="text-black px-4 py-2 rounded-md hover:text-blue-600 transition duration-300">
                <a href="/Cart">Cart</a>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 하위 카테고리 표시 영역 */}
      {activeCategory && categories[activeCategory] && (
        <div className="fixed top-20 left-0 right-0 z-50 max-w-7xl mx-auto px-4 bg-white p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-bold text-black">
            {activeCategory} 카테고리
          </h3>
          <ul className="flex space-x-4 mt-2">
            {categories[activeCategory]?.map((subCategory: string) => (
              <li key={subCategory} className="text-black hover:text-blue-500">
                <a href={`/${categoryMapping[subCategory]}`}>{subCategory}</a>
              </li>
            ))} 
          </ul>
        </div>
      )}
    </>
  );
}
