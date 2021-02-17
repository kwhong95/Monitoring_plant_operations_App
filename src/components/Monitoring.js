import {Card, Typography, Row, Col} from "antd";
import Trend from 'react-trend';

import monitorData from '../monitoring.json';

const Monitoring = () => {

    return (
        <Card
            title="발전소 모니터링"
            style={{ height: '25vh' }}
            extra={
                <div>
                    <div style={{ borderBottom: "2px solid #177DDC" }} />
                    <Typography>동향</Typography>
                </div>
            }
        >
            <Row style={{ textAlign: "center", height: '100%' }}>
                {monitorData.Monitoring.map((data, index) => (
                    <Col span={4} key={index} >
                        <Typography>{data.title}</Typography>
                        <Trend
                            data={data.acc}
                            width={100}
                            height={50}
                            gradient={["#177DDC"]}
                            autoDraw
                            smooth
                        />
                        <Typography>실시간 : {data.cur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{data.unit}</Typography>
                    </Col>
                ))}
            </Row>

        </Card>
    )
}

export default Monitoring;