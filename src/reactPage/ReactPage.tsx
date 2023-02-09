// import logo from './logo.svg';
import React from "react";
import './ReactPage.css';

export default function ReactPage(props) {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />   */}
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"/>
        </div>
    )
}