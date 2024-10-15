export default function Footer() {
  return (
    <footer className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 text-sm mb-2">© 2024 My Zara. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};
