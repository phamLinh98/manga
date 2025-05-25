import { Breadcrumb, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { ListComponent } from "./list-manga/List";
import { theme } from 'antd';
import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';

export const ContentComponent:React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch("https://my.api.mockaroo.com/list?key=ed51a920");
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        setList(data);
      } catch (err: any) {
        throw new Error(`Error fetching chapters: ${err.message}`);
      }
    };

    fetchChapters();
  }, []);

  if (!list) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
      </div>
    );
  }

 //Mock logic
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
       <ListComponent listManga={list}/>
      </div>
    </Content>
  );
};
