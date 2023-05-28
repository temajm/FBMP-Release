import React from "react"

import "./Dashboard.scss"
import Chart from "../../components/Chart";
import DateChartBar from "../../components/DateChartBar/DateChartBar";

export default class DashboardPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(<div className={"Dashboard"}>
            <DateChartBar />
        </div>)
    }
}