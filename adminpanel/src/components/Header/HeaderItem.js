import React from "react"

export default class HeaderItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    toObject = () => {
        return {
            label: this.render(),
            key: this.props?.key
        }
    }

    render() {
        return(
            <span>
                {this.props?.icon}
                {this.props?.text}
            </span>
        )
    }
}