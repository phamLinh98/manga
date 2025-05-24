import { createBrowserRouter } from "react-router-dom";
import StoryDetail from "../components/list-manga/MangaDetail";
import { ContentComponent } from "../components/Content";
import { LayoutListComponent } from "../components/Layout";

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
        element: <StoryDetail />,
      },
    ],
  },
]);
