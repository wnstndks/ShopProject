export default function Clothes(){
    return(
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">상의</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 상품 카드 예시 */}
            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4">
                    <img 
                        src={`/images/shirt${index + 1}.jpg`} 
                        alt={`상의 ${index + 1}`} 
                        className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <h2 className="text-lg font-semibold">상의 {index + 1}</h2>
                    <p className="text-gray-700">$39.99</p>
                </div>
            ))}
        </div>
    </div>
    )
}