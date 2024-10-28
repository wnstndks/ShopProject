'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function BasketBag() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: "아이템 1", price: 20000, image: "/img/arsenal.jpg" },
        { id: 2, name: "아이템 2", price: 30000, image: "/img/arsenal.jpg" },
        { id: 3, name: "아이템 3", price: 25000, image: "/img/arsenal.jpg" },
        { id: 4, name: "아이템 4", price: 35000, image: "/img/arsenal.jpg" },
        { id: 5, name: "아이템 5", price: 15000, image: "/img/arsenal.jpg" },
    ]);

    const router = useRouter();

    const handleCheckout = () => {
        console.log('구매 진행:', cartItems);
        router.push('/Buy');
    };

    return (
        <div className="container mx-auto p-4 mt-24">
            <h1 className="text-2xl font-bold mb-8 text-center">바스켓백</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg text-center">바스켓백이 비어 있습니다.</p>
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="p-4 rounded-lg border border-gray-200">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
                            <h2 className="text-lg">{item.name}</h2>
                            <p className="text-gray-500">{item.price.toLocaleString()} 원</p>
                            <button 
                                onClick={() => {
                                    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
                                }}
                                className="mt-2 w-full text-red-500 text-sm underline"
                            >
                                삭제
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <button 
                onClick={handleCheckout} 
                className="mt-6 w-full bg-black text-white py-2 rounded"
            >
                구매
            </button>
        </div>
    );
}
