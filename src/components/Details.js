import React from 'react'
import {Card, Table} from "antd"
import { details } from '../details.json'
import Trend from 'react-trend';

const Details = () => {

        const [test1, test2, test3] = details.map(data => data.trends);



    const columns = [
        {
            title: "지역",
            dataIndex: "region",
            key: "region",
            render: text => <a>{text}</a>
        },
        {
            title: "현재 출력(kW)",
            dataIndex: "curOut",
            key: "curOut"
        },
        {
            title: "예상 출력(kw)",
            dataIndex: "expOut",
            key: "expOut"
        },
        {
            title: "예상 대비 실제",
            dataIndex: "CurVsExp",
            key: "CurVsExp"
        },
        {
            title: "동향",
            dataIndex: "trends",
            key: "trends",
            render: () =>
                <Trend
                    autoDraw
                    smooth
                    data={test1}
                    width={100}
                    height={100}
                    gradient={[ '#fff' ]}
                />
        },
        {
            title: "마지막 조사",
            dataIndex: "LSurvey",
            key: "LSurvey"
        }
        ]



    return (
        <Card
            title="세부사항(전 지역)"
        >
            <Table
                columns={columns}
                dataSource={details}
            />
        </Card>
    )
}

export default Details;