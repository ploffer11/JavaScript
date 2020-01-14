import React, { Component } from 'react';
import LightningCounter from './LightningCounter';
import "./Lightning.css";

export class LightningCounterDisplay extends Component {
    render() {
        let divStyle = {
            textAlign: "center",
            color: "#999",
            borderRadius: 10,
            margin: "0 auto"
        };
        return (
            <div style={divStyle} class="basic">
                <LightningCounter />
                <p>You know what?</p>
                <p>Lightning strikes 100 times a second on Earth.</p>
            </div>
        );
    }
}

export default LightningCounterDisplay;