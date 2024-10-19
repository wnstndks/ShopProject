'use client';

import Link from 'next/link';

export default function Wish() {
    return (
        <div className="container mx-auto p-4 mt-24"> {/* 상단 여백 추가 */}
            <h1 className="text-3xl font-bold mb-8 text-center">위시리스트</h1> {/* 중앙 정렬 및 여백 조정 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* gap 증가 */}
                {Array.from({ length: 9 }).map((_, index) => (
                    <Link key={index} href={`Clothes/${index + 1}`} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"> {/* 그림자 및 호버 효과 추가 */}
                        <div>
                            <img
                                src={`/images/shirt${index + 1}.jpg`}
                                alt={`위시 ${index + 1}`}
                                className="w-full h-48 object-cover rounded-md mb-2"
                            />
                            <p className="text-center mt-2 text-gray-700">상품 {index + 1}</p> {/* 상품 이름 추가 */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}