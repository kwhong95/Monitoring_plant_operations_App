import React from 'react'
import {Card, Table, Typography} from "antd"
import { details } from '../details.json'
import { Link } from 'react-router-dom';

const Details = () => {

    const columns = [
        {
            title: "지역",
            dataIndex: "region",
            key: "region",
            render: text => <Link to="PP1">{text}</Link>
        },
        {
            title: "현재 출력(kW)",
            dataIndex: "curOut",
            key: "curOut",
            render: text => <Typography>
                {text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
        },
        {
            title: "예상 출력(kw)",
            dataIndex: "expOut",
            key: "expOut",
            render: text => <Typography>
                {text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
        },
        {
            title: "예상 대비 실제",
            dataIndex: "CurVsExp",
            key: "CurVsExp",
            render: text => <Typography>{text}%</Typography>
        },
        {
            title: "마지막 조사",
            dataIndex: "LSurvey",
            key: "LSurvey",
            render: text => <Typography>{text}일전</Typography>
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