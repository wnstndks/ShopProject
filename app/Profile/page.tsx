export default function Profile() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-center">프로필</h1>
  
          {/* 프로필 이미지 */}
          <div className="flex justify-center mb-6">
            <img
              src="/img/arsenal.jpg"  // 사용자의 프로필 이미지 경로
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
          </div>
  
          {/* 사용자 정보 */}
          <div className="mb-4">
            <p className="text-gray-600 text-sm">이름</p>
            <p className="text-lg font-medium text-gray-900">홍길동</p> {/* 예시 이름 */}
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-sm">이메일</p>
            <p className="text-lg font-medium text-gray-900">hong@example.com</p> {/* 예시 이메일 */}
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-sm">전화번호</p>
            <p className="text-lg font-medium text-gray-900">010-1234-5678</p> {/* 예시 전화번호 */}
          </div>
  
          {/* 개인정보 수정 페이지로 이동하는 버튼 */}
          <button
            className="w-full bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 hover:bg-gray-800 transition-colors duration-300"
            type="button"
          >
            <a href="/EditProfile">개인정보 수정</a> {/* 개인정보 수정 페이지 링크 */}
          </button>
        </div>
      </div>
    );
  }
  