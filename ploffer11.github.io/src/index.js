import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import MainDisplay from './MainDisplay';

let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <MainDisplay />
    </div>
    , destination
);