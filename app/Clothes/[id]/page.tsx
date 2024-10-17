'use client'
import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

export default function ClothesInfo() {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('M');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
            <br/>
            <br/>
            <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <img src="/img/arsenal.jpg" alt="상품 이미지" className="w-full object-cover" />
                    <div className="grid grid-cols-4 gap-2">
                        {[...Array(4)].map((_, i) => (
                            <img key={i} src={`/img/arsenal.jpg`} alt={`상품 이미지 ${i+1}`} className="w-full object-cover" />
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <h1 className="text-2xl font-normal">오버사이즈 니트 스웨터</h1>
                    <p className="text-xl">39,000 원</p>
                    <p className="text-sm text-gray-600">고품질 소재로 제작된 편안한 오버사이즈 니트 스웨터입니다. 다양한 스타일링이 가능한 versatile한 아이템입니다.</p>
                    <div>
                        <p className="mb-2 text-sm">사이즈</p>
                        <div className="flex space-x-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                                <button
                                    key={s}
                                    className={`w-10 h-10 border ${size === s ? 'border-black' : 'border-gray-300'} flex items-center justify-center`}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-sm">수량</p>
                        <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 border border-gray-300 flex items-center justify-center" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span className="w-8 text-center">{quantity}</span>
                            <button className="w-8 h-8 border border-gray-300 flex items-center justify-center" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors flex items-center justify-center">
                            <ShoppingBag className="mr-2" size={20} />
                            장바구니에 추가
                        </button>
                        <button className="w-full border border-black py-3 hover:bg-gray-100 transition-colors flex items-center justify-center">
                            <Heart className="mr-2" size={20} />
                            위시리스트에 추가
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-lg font-normal mb-4">상품 리뷰</h2>
                <div className="flex items-center mb-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        ))}
                    </div>
                    <p className="ml-2 text-sm font-medium text-gray-900">4.95 / 5</p>
                </div>
                <p className="text-sm text-gray-500">2,394 reviews</p>
            </div>
        </div>
    );
}