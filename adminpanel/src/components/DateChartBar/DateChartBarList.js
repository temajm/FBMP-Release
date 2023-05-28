import React from "react";

import "./DateChartBarList.scss"

export default class DateChartBarList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let children = [];
        const list = [];
        const listNumbers = [];
        const listTexts = [];
        const listCounts = [];

        if(Array.isArray(this.props.items)){
            children = this.props.items;
        }

        for (let i = 0; i < children.length; i++) {
            listNumbers.push(<div className={"number"} style={i === 0 ? {marginTop: 0} : {}}>{i + 1}</div>)
            listTexts.push(<div className={"text"} style={i === 0 ? {marginTop: 0} : {}}>{children[i].text}</div>)
            listCounts.push(<div className={"count"} style={i === 0 ? {marginTop: 0} : {}}>{children[i].count}</div>)
            //list.push(<DateChartBarListItem number={i + 1} count={children[i].count}>{children[i].text}</DateChartBarListItem>)
        }

        return(<div className={"date-chart-bar-list"}>
            {list}
            <div className={"numbers"}>{listNumbers}</div>
            <div className={"texts"}>{listTexts}</div>
            <div className={"counts"}>{listCounts}</div>
        </div> )
    }
}