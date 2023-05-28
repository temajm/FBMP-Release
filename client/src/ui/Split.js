import React from "react";
import PropTypes from "prop-types"
import "./Split.scss"

export default class Split extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.orientation === "h" ? {
                width: this.props.size
            } : {
                height: this.props.size
            }}>

            </div>
        );
    }
}

Split.propTypes = {
    size: PropTypes.number,
    orientation: PropTypes.oneOf(["v", "h"]),
}

Split.defaultProps = {
    size: '8',
    orientation: "v"
}