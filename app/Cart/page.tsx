'use client'
import { useState } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        // 예시 데이터
        { id: 1, name: "아이템 1", price: 20000, image: "/img/arsenal.png" },
        { id: 2, name: "아이템 2", price: 30000, image: "/img/arsenal.png" },
    ]);

    const handleCheckout = () => {
        // 체크아웃 처리 로직
        console.log('체크아웃 진행:', cartItems);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">장바구니 페이지</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg">장바구니에 아이템이 없습니다.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-gray-500">{item.price.toLocaleString()} 원</p>
                            <button className="mt-4 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors">
                                제거
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <button 
                onClick={handleCheckout} 
                className="mt-6 p-3 w-full bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
                체크아웃
            </button>
        </div>
    );
}
