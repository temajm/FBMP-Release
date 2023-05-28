import React from "react";
import {Typography} from "antd"

export default class P1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Typography.Text {...this.props} style={{
                fontSize: "var(--text-size-paragraph-1)",
                textUnderlineOffset: this.props?.underline ? 2 : "auto"
            }}>
                {this.props.children}
            </Typography.Text>
        );
    }
}