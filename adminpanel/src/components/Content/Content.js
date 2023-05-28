import React from "react";
import {Layout} from "antd";

import "./Content.scss"
import Chart from "../Chart";
import ContentRouter from "./ContentRouter";

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(<Layout.Content>
            <ContentRouter>
                {this.props.children}
            </ContentRouter>
        </Layout.Content>)
    }
}