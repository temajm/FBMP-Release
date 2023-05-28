import React from "react"
import "./ContentRouter.scss"

export default class ContentRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        let children = [];

        if(!Array.isArray(this.props.children) && typeof this.props.children === "object"){
            children = [this.props.children];
        }
        if(Array.isArray(this.props.children)){
            children = this.props.children;
        }

        for (let i = 0; i < children.length; i++) {
            if(children.key === this.props?.activePanel) {
                return children;
            }
        }

        return null;
    }

}