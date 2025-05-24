import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router";
import {useShared} from "../ContextData";
interface ListProps {
  listManga?: {
    index: number;
    title: string;
    image: string;
    path: string;
  }[];
}

export const ListComponent: React.FC<ListProps> = ({ listManga }) => {
  const navigate = useNavigate();
  const { setSharedData } = useShared(); // ✅ Dùng context

  const seeListChapter = (path: string) => {
    setSharedData(path); // ✅ Lưu path vào context
    navigate(`/danh-sach-chuong/${path}`);
  };

  return (
    <Row gutter={[8, 8]}>
      {listManga?.map((manga, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            size="small"
            hoverable
            style={{ width: 180, margin: "0 auto" }}
            cover={<img src={manga.image} alt={manga.title} />}
            onClick={() => seeListChapter(manga.path)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  cursor: "pointer",
                  margin: "0 auto",
                  textAlign: "center",
                  display: "block",
                }}
              >
                {manga.title}
              </span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
