import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { envConfig } from "../../config/envConfig";
import { Button, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const MangaChapter: React.FC = () => {
  const { path, id } = useParams<{ path: any; id: any }>();

  const navigate = useNavigate();

  const currentId = parseInt(id, 10);

  const nextChapter = () => {
    navigate(`/truyen/${path}/chap/${currentId + 1}`);
  }

  const prevChapter = () => {
    navigate(`/truyen/${path}/chap/${currentId - 1}`);
  }

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
    console.log("Done");
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
      </div>
    );
  }

  
  const maxLengthChap = chap?.[path]?.chapters.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-800 p-4 flex justify-center items-center shadow-md">
      <h1 className="text-lg font-semibold">Chap {id} </h1>
      </header>

      {/* Nội dung truyện */}
      <main className="flex-1 px-2 py-4 space-y-4 flex justify-center items-center flex-col">
      <div className="overflow-y-auto w-full flex flex-col items-center">
        {currentChapter && currentChapter[id - 1]?.chapter ? (
          currentChapter[id - 1].chapter.map((image: string, index: number) => (
        <div key={index} className="rounded-lg shadow-md mb-1">
          <img
            src={image}
            alt={`Chapter ${id} - Image ${index + 1}`}
            className="mx-auto"
            style={{ width: "100%", maxWidth: "800px", height: "auto" }}
          />
        </div>
          ))
        ) : (
          <p>Đang tải...</p>
        )}
      </div>
      <div className="flex space-x-1" style={{ marginTop: "5px", marginBottom:"5px" }}>
        <Button 
        type="primary" 
        danger 
        disabled={currentId === 1}
        style={{ marginRight: "5px", color: "white"}} 
        onClick={prevChapter}>
          Chap trước
          </Button>
        <Button 
          type="primary"  
          onClick={nextChapter} 
          disabled={currentId === maxLengthChap}
          style={{ color: "white" }}
        >
          Chap Sau
        </Button>
      </div>
      </main>
    </div>
  );
};

export default MangaChapter;
