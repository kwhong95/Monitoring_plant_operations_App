import {Card, Col, Row} from "antd";
import Monitoring from "./Monitoring";

const ContentLayout = () => {
    return (
        <Row>
            <Col span={24}>
                <Card
                    title="발전소 모니터링"
                >
                    <Monitoring />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="지역별 지표(실시간)"
                >

                </Card>
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