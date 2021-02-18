import {Row, Col, Card, Typography, Table, Descriptions} from "antd"
import { useParams } from 'react-router-dom'
import { details } from '../details.json'
import GoogleMap from "./GoogleMap";

const DetailsPerRegion = () => {
    const { id } = useParams();

    const Models = details.map((data, idx) => data.models[idx]);

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
            render: text => <Typography>{text}%</Typography>
        },
        {
            title: "용량",
            dataIndex: "MoC",
            key: "MoC",
            render: text => <Typography>
                {text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}kW
            </Typography>
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
                            <GoogleMap />
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