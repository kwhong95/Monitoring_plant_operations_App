import { useState } from 'react'
import {Layout, PageHeader, Menu} from 'antd'
import { DashboardOutlined, AreaChartOutlined, GlobalOutlined } from '@ant-design/icons'
import 'antd/dist/antd.dark.css';
import ContentLayout from "./components/ContentLayout";

const { Header, Content } = Layout

function App() {

  return (
      <Layout className="root" style={{ minHeight: "100vh" }}>
        <Header>
            <PageHeader
                avatar={{ src: "https://www.flaticon.com/svg/vstatic/svg/183/183236.svg?token=exp=1613532693~hmac=720c3f955407339a131e937e7e978ee9" }}
                title="발전소 운영 모니터링"
            />
        </Header>
          <Content style={{ overflowY: "scroll" }}>
              <ContentLayout />
          </Content>
      </Layout>
  );
}

export default App;
