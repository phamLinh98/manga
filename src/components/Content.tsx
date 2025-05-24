import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import { ListComponent } from "./list-manga/List";

interface ContentProps {
  colorBgContainer: any;
  borderRadiusLG: any;
}

const listManga = [
  {
    index: 1,
    title: "One Piece",
    image: "https://i.pinimg.com/736x/31/61/a0/3161a00b8833bbf5c77e0801722342cc.jpg",
  },
  {
    index: 2,
    title: "Naruto Shippuden",
    image: "https://i.pinimg.com/736x/e7/5b/eb/e75bebe5ddc766ee2524eee6c8dc50c0.jpg",
  },
  {
    index: 3,
    title: "Attack on Titan",
    image: "https://i.pinimg.com/736x/4a/03/bd/4a03bd9e55e6fa6e0cacb9b03985259b.jpg",
  },
  {
    index: 4,
    title: "Yugioh",
    image: "https://i.pinimg.com/736x/40/97/51/40975117349aef16c5d062c05714a4f1.jpg",
  },
  {
    index:5,
    title: "Dragon Ball",
    image: "https://i.pinimg.com/736x/d5/33/c6/d533c6e88f4e0efa606dfcd05d406491.jpg",
  },
  {
    index: 6,
    title: "Conan",
    image: "https://i.pinimg.com/736x/4b/09/dc/4b09dc55f42b895505ee1f95f7b0f685.jpg",
  },
  {
    index:7,
    title: "Assassination Classroom",
    image: "https://i.pinimg.com/736x/fd/0f/e6/fd0fe676765c6e187c8284d089f44a9e.jpg",
  },
  {
    index: 8,
    title: "Kindaichi",
    image: "https://i.pinimg.com/736x/fd/1d/43/fd1d4375b2cd6656f97716104a983c7a.jpg",
  }
]

export const ContentComponent = ({
  colorBgContainer,
  borderRadiusLG,
}: ContentProps) => {
  return (
    <Content style={{ padding: "0 55px" }}>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "Home" }, { title: "List truyện" }]}
      />
      <div
        style={{
          padding: 24,
          minHeight: 530,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       <ListComponent listManga={listManga}/>
      </div>
    </Content>
  );
};
