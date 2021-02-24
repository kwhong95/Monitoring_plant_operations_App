import {Button, Layout, PageHeader} from 'antd'
import 'antd/dist/antd.dark.css';
import ContentLayout from "./components/ContentLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsPerRegion from "./components/DetailsPerRegion";

const { Header, Content } = Layout

function App() {

  return (
      <Router>
          <Layout className="root" style={{ minHeight: "100vh" }}>
            <Header>
                <PageHeader
                    title="발전소 운영 모니터링"
                    extra={[
                       <Button>메인페이지로 가기</Button>
                    ]}
                />
            </Header>
              <Content style={{ overflowY: "scroll" }}>
                  <Route exact path="/" component={ContentLayout} />
                  <Route exact path="/:id" component={DetailsPerRegion} />
              </Content>
          </Layout>
      </Router>
  );
}

export default App;
