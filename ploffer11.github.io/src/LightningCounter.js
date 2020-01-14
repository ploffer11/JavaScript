import React, { Component } from 'react';
import Lightning from "./Lightning";
import "./Lightning.css";


export class LightningCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            background: "yellow"
        };
        // componentDidMount안의 setInterval에 함수 전달할 때 binding이 안되는걸 막음 
        // timerTick이 일급 객체라는 사실을 잊지 말자
        this.timerTick = this.timerTick.bind(this);
    }
    timerTick() {
        // 변수값을 비동기로 바꾸는 함수, 바꾼 후 Component의 render를 호출함 (componentDidMount 실행됨)
        this.setState({
            strikes: this.state.strikes + 1
        });
    }
    // Component가 렌더링된 직후 실행되는 함수
    componentDidMount() {
        setInterval(this.timerTick, 10);
    }
    render() {
        if (this.state.background === "yellow")
            this.state.background = "white";
        else
            this.state.background = "yellow";

        return (
            <div class="strike">
                <Lightning background={this.state.background} />
                <br />
                <p>{this.state.strikes}</p>
            </div>
        );
    }
}

export default LightningCounter;
