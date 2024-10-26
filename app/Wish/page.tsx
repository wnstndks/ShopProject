'use client';

import Link from 'next/link';

export default function Wish() {
    return (
        <div className="container mx-auto p-4 mt-24"> {/* 상단 여백 추가 */}
            <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">위시리스트</h1> {/* 중성적인 폰트와 색상 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* gap 확장 */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <Link
                        key={index}
                        href={`Clothes/${index + 1}`}
                        className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-gray-50" // 그림자 줄이고, 호버 시 배경색 추가
                    >
                        <div>
                            <img
                                src={`/images/shirt${index + 1}.jpg`}
                                alt={`위시 ${index + 1}`}
                                className="w-full h-60 object-cover rounded-md mb-4 transition-transform transform hover:scale-105" // 이미지 크기 증가 효과
                            />
                            <p className="text-center text-sm mt-2 text-gray-600 font-light">상품 {index + 1}</p> {/* 폰트 가벼운 느낌 */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
