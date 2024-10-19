export default function Header() {
  return (
    // 헤더 배경과 하단 줄을 없애고 텍스트를 검정색으로 변경
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-8">
            {/* "My Zara" 사이즈 크게, 텍스트 색상 검정으로 변경 */}
            <div className="text-6xl font-bold text-black">
              <a href="/">Your Zara</a>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/Clothes" className="text-black hover:text-blue-500 transition duration-300">상의</a></li>
                <li><a href="/Outer" className="text-black hover:text-blue-500 transition duration-300">아우터</a></li>
                <li><a href="/Pants" className="text-black hover:text-blue-500 transition duration-300">하의</a></li>
                <li><a href="/Shoes" className="text-black hover:text-blue-500 transition duration-300">신발</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* 검색창 길이와 위치 조정 */}
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
              style={{ marginLeft: '-20px' }}
            />
            {/* 버튼 배경 색 제거 및 텍스트 색상 검정으로 변경 */}
            <button className="text-black px-4 py-2 rounded-md hover:text-blue-600 transition duration-300">
              <a href="/Login">Login</a>
            </button>
            <button className="text-black px-4 py-2 rounded-md hover:text-blue-600 transition duration-300">
              <a href="/Wish">Wish</a>
            </button>
            <button className="text-black px-4 py-2 rounded-md hover:text-blue-600 transition duration-300">
              <a href="/Cart">Cart</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
