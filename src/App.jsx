import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">React useState 練習</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="請輸入名字"
          className="border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Submit
        </button>
      </form>

      {submittedName && (
        <p className="mt-4 text-lg">Hello, {submittedName} 👋</p>
      )}
    </div>
  );
}

export default App;
