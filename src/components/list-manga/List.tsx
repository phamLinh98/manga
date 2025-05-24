import { Card, Col, Row } from "antd";

interface ListProps {
  listManga?: {
    index: number;
    title: string;
    image: string;
  }[];
}

export const ListComponent: React.FC<ListProps> = ({ listManga }) => {
  return (
    <Row gutter={[8, 8]}>
      {listManga?.map((manga, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            size="small"
            hoverable
            style={{ width: 180, margin: "0 auto" }}
            cover={
              <img src={manga.image} alt={manga.title} />
            }
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span onClick={() => {}} style={{ cursor: "pointer", margin: "0 auto", textAlign: "center", display: "block" }}>
                {manga.title}
              </span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
