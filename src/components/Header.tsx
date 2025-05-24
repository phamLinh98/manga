import { Menu } from "antd"
import { Header } from "antd/es/layout/layout"

interface HeaderProps {
  headerItems:any[];
}

export const HeaderComponent: React.FC<HeaderProps> = ({ headerItems }) => {
  return  <Header
  style={{
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }}
>
  <div className="demo-logo" />
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['1']}
    items={headerItems}
    style={{ flex: 1, minWidth: 0 }}
  />
</Header>
}