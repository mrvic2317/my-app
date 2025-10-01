export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-6">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio 🚀
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          學習 React 的第一個 Demo – Hero 區塊
        </p>

        {/* Button */}
        <a
          href="#faq"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          開始探索
        </a>
      </div>
    </div>
  );
}
