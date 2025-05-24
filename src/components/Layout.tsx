import React from "react";
import { Layout } from "antd";
import { HeaderComponent } from "./Header";
import { Footer } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router";
import { DataProviderContext } from "./ContextData";

export const LayoutListComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <HeaderComponent
        headerItems={[
          {
            key: "1",
            label: "Trang chủ",
            onClick: () => {
              navigate("/home");
            },
          },
          {
            key: "2",
            label: "Đang theo dõi",
          },
          {
            key: "3",
            label: "Lịch sử",
          },
        ]}
      />
      <DataProviderContext>
       <Outlet />
      </DataProviderContext>
      <Footer style={{ textAlign: "center" }}>App truyentranh</Footer>
    </Layout>
  );
};
