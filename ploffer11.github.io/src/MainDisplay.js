import React, { Component } from 'react';
import Hexagon from './Hexagon';
import HexagonDisplay from './HexagonDisplay';
import LightningCounterDisplay from "./LightningCounterDisplay";
import HistoryDisplay from "./HistoryDisplay";

export class MainDisplay extends Component {
    constructor(props) {
        super(props);

        this.changeMainState = this.changeMainState.bind(this);

        this.pages = {
            "Hexagon": <HexagonDisplay change={this.changeMainState} />,
            "Lightning": <LightningCounterDisplay />,
            "History": <HistoryDisplay />
        };

        this.state = {
            page: "Hexagon"
        };

    }

    changeMainState(_page) {
        this.setState({
            page: _page
        });
    }

    render() {

        let divStyle = {
            height: "100%",
            width: "100%"
        };

        if (this.pages.hasOwnProperty(this.state.page)) {
            return (
                <div style={divStyle}>
                    {this.pages[this.state.page]}
                </div>
            );
        }

        else {
            console.log("WTF MainDisplay GOES WRONG!");
            console.log(this.state.page);
            return (
                <div>
                    <p>Error! Check the console</p>
                </div>
            );
        }
    }
}

export default MainDisplay;