import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { envConfig } from "../../config/envConfig";
import { Button, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const MangaChapter: React.FC = () => {
  const { path, id } = useParams<{ path: any; id: any }>();

  const navigate = useNavigate();

  const currentId = parseInt(id, 10);

  useEffect(() => {
    localStorage.setItem("currentId", currentId.toString());
  }, [currentId]);

  const nextChapter = () => {
    navigate(`/truyen/${path}/chap/${currentId + 1}`);
  };

  const prevChapter = () => {
    navigate(`/truyen/${path}/chap/${currentId - 1}`);
  };

  const [chap, setChap] = useState<Record<
    string,
    {
      title: string;
      chapters: {
        title: any;
        chapter: string[];
      }[];
    }
  > | null>(null);

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
        throw new Error(`Error fetching chapters: ${err.message}`);
      }
    };

    fetchChapters();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentChapter = chap?.[path]?.chapters || [];
  if (currentChapter.length > 0) {
    console.log("Đã cập nhật");
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
      </div>
    );
  }

  const maxLengthChap = chap?.[path]?.chapters.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <main className="flex-1 px-2 py-4 space-y-4 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {chap?.[path]?.title} - chap {currentId}
        </h1>
        <div className="overflow-y-auto w-full flex flex-col items-center">
          {currentChapter && currentChapter[id - 1]?.chapter ? (
            currentChapter[id - 1].chapter.map(
              (image: string, index: number) => (
                <div key={index} className="rounded-lg shadow-md mb-1">
                  <img
                    src={image}
                    alt={`Chapter ${id} - Image ${index + 1}`}
                    className="mx-auto"
                    style={{ width: "100%", maxWidth: "800px", height: "auto" }}
                  />
                  <h1 className="text-2xl font-bold mb-4 text-center">
                  {chap?.[path]?.title} - chap {currentId}
                  </h1>
                </div>
              )
            )
          ) : (
            <p>Đang tải...</p>
          )}
        </div>
        <div
          className="flex space-x-1"
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          <Button
            type="primary"
            danger
            disabled={currentId === 1}
            style={{ marginRight: "5px", color: "white" }}
            onClick={prevChapter}
          >
            Chap trước
          </Button>
          <Select
            value={`Chap ${currentId}`}
            style={{ width: 120 }}
            onChange={(value) => {
              navigate(`/truyen/${path}/chap/${value}`);
            }}
            options={
              chap?.[path]?.chapters
                .map((chapter, index) => ({
                  value: index + 1,
                  label: `Chap ${index + 1}: ${chapter.title || "No Title"}`,
                }))
                .reverse() || []
            }
          />
          <Button
            type="primary"
            onClick={nextChapter}
            disabled={currentId === maxLengthChap}
            style={{ marginLeft: "5px", color: "white" }}
          >
            Chap Sau
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MangaChapter;
