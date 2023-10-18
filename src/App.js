import React from "react";
import './style.css';
import './util.css';
import { Dashboard } from "./components/Dashboard";
import { Chart } from "./components/Chart";
import { Products } from "./components/Products";
import { DataBoxContainer } from "./components/DataBoxContainer";
import { WelcomeName } from "./components/WelcomeName";

export const App = () => (
    <div id="container" className="flex">
        <Dashboard />
        <div className="main-section flex flex-column">
            <WelcomeName />
            <DataBoxContainer />
            <div className="middle-section flex justify-around">
                <Chart />
                <img className="pie-chart" src="https://uploads-ssl.webflow.com/646e0f45b9fc32b4f21c50a3/646e0f45b9fc32b4f21c5263_your%20productivity%20img%202.png" style={{width: '300px'}}></img>
            </div>
            <Products />
        </div>
    </div>
)