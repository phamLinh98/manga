import { createBrowserRouter } from "react-router-dom";
import { ContentComponent } from "../components/Content";
import { LayoutListComponent } from "../components/Layout";
import { MangaComponent } from "../components/list-manga/Manga";

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
        path: "/danh-sach-chuong/:path",
        element: <MangaComponent />,
      },
    ],
  },
]);
