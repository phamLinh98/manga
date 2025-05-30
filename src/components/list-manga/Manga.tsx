import { useEffect, useState } from "react";
import StoryDetail from "./MangaDetail";
import { useParams } from "react-router";
import { envConfig } from "../../config/envConfig";

export const MangaComponent: React.FC = () => {
  const [chapters, setChapters] = useState([]);
  const path = useParams();
  const pathString = Object.values(path).join("/");

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(envConfig.API_URL_CHAPTER);
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        setChapters(data);
      } catch (err: any) {
        throw new Error(`Error fetching chapters: ${err.message}`);
      }
    };

    fetchChapters();
  }, []);

  const getObjectByPath = (path: any) => {
    return chapters[path];
  };

  const chapter = getObjectByPath(pathString); 

  return <StoryDetail currentChapter={chapter} />; // Truyền xuống nếu cần
};
