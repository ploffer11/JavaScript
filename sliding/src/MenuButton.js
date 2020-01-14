import React, { Component } from 'react';
import "./MenuButton.css";

export class MenuButton extends Component {
    render() {
        return (
            <div>
                <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
            </div>
        );
    }
}

export default MenuButton;