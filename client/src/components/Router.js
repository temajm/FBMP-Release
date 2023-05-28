import React from "react";

export default class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let children = [];
        if(typeof this.props.children === "object" && !Array.isArray(this.props.children)){
            children = [this.props.children];
        }else if(this.props.children?.length > 0) {
            children = [...this.props.children];
        }

        for (let i = 0; i < children.length; i++) {
            if(children[i]?.title === this.props.activePanel) {
                return children[i];
            }
        }

        return null;
    }
}