import React, { Component } from 'react';

export class Lightning extends Component {
    render() {
        let lightningStyle = {
            width: "200px",
            height: "200px",
            background: this.props.background,
            clipPath: "polygon(30% 60%, 45% 50%, 25% 85%, 67% 33%, 50% 45%, 70% 10%)",
            WebkitClipPath: "polygon(30% 60%, 45% 50%, 25% 85%, 67% 33%, 50% 45%, 70% 10%)",
            display: "inline-block"
        };

        return (
            <div style={lightningStyle}></div>
        );
    }
}

export default Lightning;