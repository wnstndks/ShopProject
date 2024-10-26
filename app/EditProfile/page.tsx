export default function EditProfile() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-6 text-center">개인정보 수정</h1>
          
          <div className="mb-4">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-black py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              placeholder="이름"
            />
          </div>
          
          <div className="mb-4">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-black py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="email"
              type="text"
              placeholder="이메일"
            />
          </div>
          
          <div className="mb-4">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-black py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="phone"
              type="tel"
              placeholder="전화번호"
            />
          </div>
          
          <div className="mb-6">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-black py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="비밀번호 변경"
            />
          </div>
          
          <button
            className="w-full bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            저장
          </button>
          
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-gray-500 hover:text-black">
              비밀번호를 잊으셨습니까?
            </a>
          </div>
        </div>
      </div>
    );
  }
  