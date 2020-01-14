import React, { Component } from 'react';
import Hexagon from "./Hexagon";

export class HexagonDisplay extends Component {
    render() {
        return (
            <div>
                <Hexagon margin="0 auto 0 auto" display="block" text="Lightning" change={this.props.change} />
                <Hexagon margin="-100px 0px 0px 0px" display="inline-block" text="Technique" change={this.props.change} />
                <Hexagon margin="-100px 0px 0px -65px" display="inline-block" text="History" change={this.props.change} />
            </div>
        );
    }
}

export default HexagonDisplay;