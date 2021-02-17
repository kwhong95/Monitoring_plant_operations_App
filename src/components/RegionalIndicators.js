import {Card, Row, Col, Typography} from "antd";
import { ResponsiveBullet } from '@nivo/bullet'
import { ridata } from '../regionalIndicators.json';

const RegionalIndicators = () => {

    const data = [
        {
            "id": "NG 총 유량[K]",
            "ranges": [
                0,
                0.5,
                1,
                1.5,
                2,
                2.5
            ],
            "measures": [
                1.3
            ],
            "markers": [
                2
            ]
        },
        {
            "id": "GD 열 소비율[K]",
            "ranges": [
                0,
                0.5,
                1,
                1.5,
                2,
                2.5
            ],
            "measures": [
                1.1
            ],
            "markers": [
                2
            ]
        },
    ]

    return (
        <Card
            title="지역별 지표(실시간)"
        >
            <Row>
                {ridata.map((ridata, index) => (
                    <Col span={8} key={index}>
                        <Typography>{ridata.title}</Typography>
                        <Typography
                            style={{ fontSize: "1.1em", fontWeight: 'bold', marginTop: '20px' }}
                        >{ridata.cur}{ridata.unit}</Typography>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col span={24} style={{ height: '40vh'}}>
                    <ResponsiveBullet
                        data={data}
                        margin={{ top: 50, right: 30, bottom: 20, left: 30 }}
                        layout="vertical"
                        spacing={70}
                        titleAlign="center"
                        titleOffsetX={-25}
                        titleOffsetY={-30}
                        measureSize={0.7}
                        rangeColors="#101010"
                        measureColors="#177DDC"
                        markerColors="#252b6e"
                    />
                </Col>
            </Row>
        </Card>
    )

}

export default RegionalIndicators;