import { Col, Row} from "antd";
import Monitoring from "./Monitoring";
import RegionalIndicators from "./RegionalIndicators";
import Details from "./Details";
import DetailsPerRegion from "./DetailsPerRegion";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const ContentLayout = () => {
    return (
        <Router>
            <Route exact path="/" render={() =>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <Monitoring/>
                    </Col>
                    <Col span={8}>
                        <RegionalIndicators/>
                    </Col>
                    <Col span={16}>
                        <Details/>
                    </Col>
                </Row>
            }/>
            <Route path='/PP1' component={DetailsPerRegion} />
        </Router>
    )
}

export default ContentLayout;