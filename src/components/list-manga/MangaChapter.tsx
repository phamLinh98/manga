const images = [
  "https://i.pinimg.com/736x/22/0d/d1/220dd175d616c675422ccfc4a19d4de8.jpg",
  "https://i.pinimg.com/736x/22/0d/d1/220dd175d616c675422ccfc4a19d4de8.jpg",
];

export default function MangaChapter() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-800 p-4 flex justify-between items-center shadow-md">
        <button
          className="text-sm bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
          onClick={() => window.history.back()}
        >
          ← Quay lại
        </button>
        <h1 className="text-lg font-semibold">Naruto Chap 883</h1>
        <div className="w-16" /> {/* placeholder để cân đối */}
      </header>

      {/* Nội dung truyện */}
      <main className="flex-1 overflow-y-auto px-2 py-4 space-y-4 flex justify-center items-center flex-col">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg shadow-md mb-1">
            <img
              src={src}
              alt={`Trang ${index + 1}`}
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </main>
    </div>
  );
}
