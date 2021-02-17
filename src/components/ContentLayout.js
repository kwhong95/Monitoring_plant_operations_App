import {Card, Col, Row} from "antd";
import Monitoring from "./Monitoring";
import RegionalIndicators from "./RegionalIndicators";

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
                <Card
                    title="세부사항(전 지역)"
                >

                </Card>
            </Col>
        </Row>
    )
}

export default ContentLayout;