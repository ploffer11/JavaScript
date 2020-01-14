import React, { Component } from 'react';
import "./Hexagon.css"

export class Hexagon extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.change(this.props.text);
    }

    render() {
        let hexagonStyle = {
            width: "325px",
            height: "325px",
            margin: this.props.margin,
            display: this.props.display,
            position: "relative",
        };

        return (
            <div style={hexagonStyle} className="hexagon">
                <a onClick={this.handleClick}
                    ref={(ref) => this.ref = ref}>{this.props.text}</a>
                <img src="hexagon.png" width="100%" height="100%" />
            </div >
        );
    }
}

export default Hexagon;