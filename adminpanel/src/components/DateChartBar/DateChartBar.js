import React from "react"
import {Card, Tabs, Typography} from "antd";

import "./DateChartBar.scss"

import {DatePicker} from "antd"
import DateChartBarList from "./DateChartBarList";

import ChartBar from "./Chart.js";

export default class DateChartBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(<Card className={"chart-date"} title={<div className={"title"}>
            <Tabs style={{marginRight: 32}} items={[
                {
                    label: "День",
                    key: "day"
                },
                {
                    label: "Неделя",
                    key: "week"
                },
                {
                    label: "Месяц",
                    key: "mouth"
                },
            ]} />
            <DatePicker placeholder={"Выберите дату"} />
        </div>}>
            <div className={"preTitle"}>
                Статистика обращений
            </div>
            <div className={"content"}>
                <div className={"chart"}>
                    <ChartBar />
                </div>
                <div className={"rate-requests"}>
                    <div className={"title"}>
                        <Typography.Title level={5}>Рейтинг обращений</Typography.Title>
                    </div>
                    <DateChartBarList items={[{
                        text: "Постамат №0001",
                        count: 5
                    }, {
                        text: "Постамат №0002",
                        count: 5
                    },
                        {
                            text: "Постамат №0003",
                            count: 5
                        }]} />
                </div>
            </div>
        </Card>)
    }
}