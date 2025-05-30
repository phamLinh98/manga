import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { envConfig } from "../../config/envConfig";

const MangaChapter: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [chap, setChap] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(envConfig.API_URL_CHAPTER);
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        console.log("data", data);
        setChap(data);
      } catch (err: any) {
        console.error(`Error fetching chapters: ${err.message}`);
      }
    };

    fetchChapters();
  }, []);

  const currentChapter = chap?.["conan"]["chapters"] || [];
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
        <h1 className="text-lg font-semibold">{id} Chap</h1>
        <div className="w-16" /> {/* placeholder để cân đối */}
      </header>

      {/* Nội dung truyện */}
      <main className="flex-1 overflow-y-auto px-2 py-4 space-y-4 flex justify-center items-center flex-col">
        {currentChapter ? (
          currentChapter.map((chap: any, index: number) => (
            <div key={index} className="rounded-lg shadow-md mb-1">
              <li
                key={chap.id}
                className="p-4 hover:bg-gray-50 transition flex flex-wrap gap-2"
              >
                {chap.chapter.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Chapter ${chap.chapter} - Image ${index + 1}`}
                  />
                ))}
              </li>
            </div>
          ))
        ) : (
          <p>Đang tải...</p>
        )}
      </main>
    </div>
  );
};

export default MangaChapter;
