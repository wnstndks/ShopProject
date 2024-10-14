export default function Login() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-md w-96"> {/* 패딩을 10으로 늘림 */}
          <h1 className="text-3xl font-bold text-center mb-6">로그인</h1> {/* 제목 크기 증가 */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                사용자 이름 또는 이메일
              </label>
              <input
                type="text"
                id="username"
                placeholder="이메일 또는 사용자 이름 입력"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호 입력"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              로그인
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="/register" className="text-blue-600 hover:underline">
              회원가입
            </a>
            <span className="mx-2">|</span>
            <a href="/reset-password" className="text-blue-600 hover:underline">
              비밀번호 재설정
            </a>
          </div>
          {/* 소셜 로그인 옵션 (선택적) */}
          <div className="mt-6 text-center">
            <p className="mb-2">또는</p>
            <button className="w-full bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 transition">
              Google로 로그인
            </button>
            <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition mt-2">
              Facebook으로 로그인
            </button>
          </div>
        </div>
      </div>
    );
  }
  