export default function ClothesInfo() {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4">상품명</h1>
            <img src="/images/product.jpg" alt="상품 이미지" className="w-full h-64 object-cover mb-4 rounded-md" />
            <p className="text-lg text-gray-600 mb-2">상세 설명: 이 상품은 최고의 품질을 자랑합니다.</p>
            <p className="text-2xl font-bold mb-4">가격: 20,000 원</p>
            <div className="mb-4">
                <label htmlFor="size" className="block mb-2">사이즈 선택:</label>
                <select id="size" className="border rounded p-2">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="block mb-2">수량:</label>
                <input type="number" id="quantity" min="1" defaultValue="1" className="border rounded p-2 w-16" />
            </div>
            <button className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors">
                장바구니에 추가
            </button>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">리뷰</h2>
                <p className="text-gray-500">★★★★★ (4.5)</p>
            </div>
        </div>
    );
}
