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
            {this.props?.type === "password" ? <Input.Password ref={this.props?.refInput ? this.props.refInput : null} bordered={false} {...this.props} /> : <Input ref={this.props?.refInput ? this.props.refInput : null} bordered={false} {...this.props} />}
            <div className={"line"} style={{
                borderColor: Static.tokenTheme.colorPrimary
            }} />
        </div>)
    }
}