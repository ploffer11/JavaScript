import React, { Component } from 'react';
import "./History.css";

export class History extends Component {
    render() {
        return (
            <div class="history">
                <p class="day">{this.props.day}</p>
                <p class="text">{this.props.text}</p>
            </div>
        );
    }
}

export default History;