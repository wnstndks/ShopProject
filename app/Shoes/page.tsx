export default function Shoes(){
    return(
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">신발</h1>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 상품 카드 예시 */}
            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4">
                    <img 
                        src={`/images/shoes${index + 1}.jpg`} 
                        alt={`신발 ${index + 1}`} 
                        className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <h2 className="text-lg font-semibold">신발 {index + 1}</h2>
                    <p className="text-gray-700">$49.99</p>
                </div>
            ))}
        </div>
    </div>
    )
}