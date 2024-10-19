'use client'
import { useState } from "react";

export default function Header() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = {
    Man: ["상의", "바지", "아우터", "신발"],
    Woman: ["상의", "바지", "아우터", "신발"],
    Kids: ["상의", "바지", "아우터", "신발"],
    Beauty: ["메이크업", "스킨케어", "헤어", "향수"],
  };

  const handleCategoryClick = (category: string) => {
    // 이미 선택된 카테고리를 다시 클릭하면 닫힘
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-8">
              {/* "Your Zara" 텍스트 */}
              <div className="text-6xl font-bold text-black">
                <a href="/">Your Zara</a>
              </div>
              <nav>
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
            </div>
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
      <div className="max-w-7xl mx-auto px-4 py-4">
        {activeCategory && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-bold text-black">
              {activeCategory} 카테고리
            </h3>
            <ul className="flex space-x-4 mt-2">
              {categories[activeCategory].map((subCategory) => (
                <li key={subCategory} className="text-black hover:text-blue-500">
                  <a href={`/${subCategory}`}>{subCategory}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
