import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { envConfig } from "../../config/envConfig";

const MangaChapter: React.FC = () => {
  const { path, id } = useParams<{ path: any; id: any }>();

  const [chap, setChap] = useState<Record<string, { chapters: { chapter: string[] }[] }> | null>(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(envConfig.API_URL_CHAPTER);
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        setChap(data);
      } catch (err: any) {
        console.error(`Error fetching chapters: ${err.message}`);
      }
    };

    fetchChapters();
  }, []);

  const currentChapter = chap?.[path]?.chapters || [];
  if (currentChapter.length > 0) {
    console.log("currentChapter", currentChapter[0].chapter);
  } else {
    console.log("No chapters available");
  }
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
        <h1 className="text-lg font-semibold">Chap {id} </h1>
        <div className="w-16" /> {/* placeholder để cân đối */}
      </header>

      {/* Nội dung truyện */}
      <main className="flex-1 overflow-y-auto px-2 py-4 space-y-4 flex justify-center items-center flex-col">
        {currentChapter && currentChapter[id - 1]?.chapter ? (
          currentChapter[id - 1].chapter.map((image: string, index: number) => (
            <div key={index} className="rounded-lg shadow-md mb-1">
              <img
                src={image}
                alt={`Chapter ${id} - Image ${index + 1}`}
                className="mx-auto"
              />
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
