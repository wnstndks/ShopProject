'use client';

import Link from 'next/link';

export default function Shoes() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-8 text-center">슈즈</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                    <Link key={index} href={`Shoes/${index + 1}`} className="group border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={`/img/fs${index + 1}.jpg`}
                            alt={`슈즈 ${index + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-medium group-hover:text-black text-gray-800 transition-colors">
                                슈즈 {index + 1}
                            </h2>
                            <p className="text-gray-500">$39.99</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
