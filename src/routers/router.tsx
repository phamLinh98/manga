import { createBrowserRouter } from "react-router-dom";
import { ContentComponent } from "../components/Content";
import { LayoutListComponent } from "../components/Layout";
import { MangaComponent } from "../components/list-manga/Manga";
import MangaChapter from "../components/list-manga/MangaChapter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutListComponent />,
    children: [
      {
        index: true, // Thêm index route
        element: <ContentComponent />,
      },
      {
        path: "/home",
        element: <ContentComponent />,
      },
      {
        path: "/danh-sach-chuong",
        children: [
          {
            path: ":path",
            element: <MangaComponent />,
          },
        ],
      },
      {
        path: "truyen/:path/:id",
        element: <MangaChapter />,
      }
    ],
  },
]);
