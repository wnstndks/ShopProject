export default function Buy() {
  const orders = [
    { id: 1, productName: '상의 1', price: '29,000', date: '2024-10-15', status: '배송 중', image: '/img/fs4.jpg' },
    { id: 2, productName: '바지 2', price: '49,000', date: '2024-10-13', status: '배송 완료', image: '/img/fs2.jpg' },
    { id: 3, productName: '신발 3', price: '79,000', date: '2024-10-10', status: '배송 중', image: '/img/fs1.jpg' },
  ];

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">구매내역</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <img
              src={order.image}
              alt={order.productName}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold mb-1">{order.productName}</h2>
            <p className="text-gray-700 text-sm mb-1">가격: {order.price}원</p>
            <p className="text-gray-500 text-xs mb-1">구매일: {order.date}</p>
            <p className={`text-sm font-medium ${order.status === '배송 중' ? 'text-yellow-500' : 'text-green-500'}`}>
              {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
