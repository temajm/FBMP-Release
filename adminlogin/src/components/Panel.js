import React from "react";

export default class Panel extends React.Component{
    constructor(props) {
        super(props);
    }
    renderPanel = () => { return null; }

    render() {
        return(
            <div className={`panel-${this.props.title}`}>
                {this.renderPanel()}
            </div>
        )
    }
}