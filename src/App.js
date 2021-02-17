import {Layout, PageHeader} from 'antd'
import 'antd/dist/antd.dark.css';

const { Header, Sider, Content } = Layout

function App() {
  return (
      <Layout>
        <Header>
            <PageHeader
                title="발전소 운영 모니터링"
            />
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
  );
}

export default App;
