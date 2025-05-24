import React from 'react';
import { Layout, theme } from 'antd';
import { HeaderComponent } from './Header';
import { ContentComponent } from './Content';
import { Footer } from 'antd/es/layout/layout';

const headerItems = [
  {
    key: '1',
    label: 'Trang chủ',
  },
  {
    key: '2',
    label: 'Đang theo dõi',
  },
  {
    key: '3',
    label: 'Lịch sử',
  },
]

const LayoutListComponent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
     <HeaderComponent headerItems={headerItems}/>
      <ContentComponent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      <Footer style={{ textAlign: 'center' }}>
        App truyentranh
      </Footer>
    </Layout>
  );
};

export default LayoutListComponent;