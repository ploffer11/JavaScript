import React, { Component } from "react";
import "./IPAddress";
import "./IPAddress.css";

let xhr;
class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "...",
            location: "...",
        };

        xhr = undefined;
        this.processRequest = this.processRequest.bind(this);
    }

    // 컴포넌트가 렌더링 된 직후 실행
    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            this.setState({
                ip_address: response.ip,
                location: `${response.country} ${response.city}`,
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.ip_address}</h1>
                <p>Maybe you are in {this.state.location}</p>
            </div>

        );
    }
}

export default IPAddressContainer;