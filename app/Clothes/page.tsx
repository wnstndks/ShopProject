'use client'

import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ClothesItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function Clothes() {
    const [clothes, setClothes] = useState<ClothesItem[]>([]);
    const [sortBy, setSortBy] = useState<'price' | 'name'>('price');

    useEffect(() => {
        // 실제 애플리케이션에서는 API 호출을 통해 데이터를 가져옵니다.
        const mockClothes: ClothesItem[] = [
            { id: 1, name: "티셔츠", price: 20000, image: "/api/placeholder/150/200" },
            { id: 2, name: "셔츠", price: 30000, image: "/api/placeholder/150/200" },
            { id: 3, name: "후드티", price: 40000, image: "/api/placeholder/150/200" },
        ];
        setClothes(mockClothes);
    }, []);

    const sortedClothes = [...clothes].sort((a, b) => 
        sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name)
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">상의</h1>
            
            <div className="mb-4">
                <Select onValueChange={(value) => setSortBy(value as 'price' | 'name')}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="정렬 기준" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="price">가격순</SelectItem>
                        <SelectItem value="name">이름순</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedClothes.map((item) => (
                    <Card key={item.id}>
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={item.image} alt={item.name} className="w-full h-auto" />
                            <p className="mt-2">가격: {item.price}원</p>
                        </CardContent>
                        <CardFooter>
                            <Button>상세 보기</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}