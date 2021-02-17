import {Card, Col, Row} from "antd";
import Monitoring from "./Monitoring";
import RegionalIndicators from "./RegionalIndicators";
import Details from "./Details";

const ContentLayout = () => {
    return (
        <Row>
            <Col span={24}>
                <Monitoring />
            </Col>
            <Col span={8}>
                <RegionalIndicators />
            </Col>
            <Col span={16}>
                <Details />
            </Col>
        </Row>
    )
}

export default ContentLayout;