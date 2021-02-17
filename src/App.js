import { useState } from 'react'
import {Layout, PageHeader, Menu} from 'antd'
import { DashboardOutlined, AreaChartOutlined, GlobalOutlined } from '@ant-design/icons'
import 'antd/dist/antd.dark.css';
import ContentLayout from "./components/ContentLayout";

const { Header, Sider, Content } = Layout

function App() {
    const [collapsed, setCollapsed] = useState(false);

    const handleSider = () => {
        setCollapsed(!collapsed);
    }

  return (
      <Layout className="root" style={{ minHeight: "100vh" }}>
        <Header>
            <PageHeader
                avatar={{ src: "https://www.flaticon.com/svg/vstatic/svg/183/183236.svg?token=exp=1613532693~hmac=720c3f955407339a131e937e7e978ee9" }}
                title="발전소 운영 모니터링"
            />
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={handleSider}>
              <Menu defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item
                      key="1"
                      icon={<DashboardOutlined />}>
                      운영 대시보드
                  </Menu.Item>
                  <Menu.Item
                      key="2"
                      icon={<AreaChartOutlined />}
                  >실시간 지표</Menu.Item>
                  <Menu.Item
                      key="3"
                      icon={<GlobalOutlined />}
                  >지역 세부사항</Menu.Item>
              </Menu>
          </Sider>
          <Content style={{ overflowY: "scroll" }}>
              <ContentLayout />
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
