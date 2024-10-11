// components/ProductCard.tsx
const ProductCard: React.FC<{ product: { id: number; name: string; price: string; image: string } }> = ({ product }) => {
    return (
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-500">{product.price} 원</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            장바구니에 담기
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  