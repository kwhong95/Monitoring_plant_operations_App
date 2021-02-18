import {Row, Col, Card, Typography, Table, Descriptions} from "antd"
import { useParams } from 'react-router-dom'
import { details } from '../details.json'

const DetailsPerRegion = () => {
    const { id } = useParams();

    const Models = details.map((data, idx) => data.models[idx]);
    console.log(Models);

    const columns = [
        {
            title: "모델",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "지난 24시간의 예상 대비 실제",
            dataIndex: "CVETrends",
            key: "CVETrends",
        },
        {
            title: "예상 대비",
            dataIndex: "CurVsExp",
            key: "CurVsExp",
        },
        {
            title: "용량",
            dataIndex: "MoC",
            key: "MoC",
        }
    ]

    return(
        <Card
            title={`지역 세부사항`}
        >
            <Row>
                <Col>
                    <Descriptions
                        title={id}
                        layout="vertical"
                        bordered
                    >
                        <Descriptions.Item
                            label="모델 정보"
                        >
                            <Table
                                columns={columns}
                                dataSource={Models}
                            />
                        </Descriptions.Item>
                        <Descriptions.Item
                            label="시설 지도"
                        >
                            Map
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={8}>

                </Col>
            </Row>

        </Card>
    )
}

export default DetailsPerRegion;