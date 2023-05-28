import React from "react"

import {Input, theme} from "antd";

import "./InputLine.scss"
import Split from "./Split";
import Static from "../Static";

export default class InputLine extends React.Component {
    token = {}
    constructor(props) {
        super(props);

    }

    render() {
        //this.props.bordered = false;
        return(<div className={"input-type-line"}>
            {this.props?.type === "password" ? <Input.Password bordered={false} {...this.props} /> : <Input bordered={false} {...this.props} />}
            <div className={"line"} style={{
                outlineColor: Static.tokenTheme.colorPrimary
            }} />
        </div>)
    }
}