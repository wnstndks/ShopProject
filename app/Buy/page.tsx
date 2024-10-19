export default function Buy() {
    const orders = [
      { id: 1, productName: '상의 1', price: '29,000', date: '2024-10-15', status: '배송 중', image: '/images/shirt1.jpg' },
      { id: 2, productName: '바지 2', price: '49,000', date: '2024-10-13', status: '배송 완료', image: '/images/pants2.jpg' },
      { id: 3, productName: '신발 3', price: '79,000', date: '2024-10-10', status: '배송 중', image: '/images/shoes3.jpg' },
    ];
  
    return (
      <div className="container mx-auto p-4 mt-24"> {/* 상단 여백 추가 */}
            <h1 className="text-3xl font-bold mb-8 text-center">구매내역</h1> {/* 중앙 정렬 및 여백 조정 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <img
                src={order.image}
                alt={order.productName}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold">{order.productName}</h2>
              <p className="text-gray-700">구매 가격: {order.price}원</p>
              <p className="text-gray-500">구매 날짜: {order.date}</p>
              <p className={`text-${order.status === '배송 중' ? 'yellow' : 'green'}-500`}>배송 상태: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  