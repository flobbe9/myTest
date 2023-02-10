import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./NavBarDropDown.css";
import Test from "../test/Test.tsx";
import ReactPage from "../reactPage/ReactPage.tsx";
import { changeColorOnMouseOver } from "./NavBarEvents.tsx";

export default function NavBarDropDown(props) {
    // links change color on hover
    changeColorOnMouseOver(document.getElementsByClassName("NavBarDropDown-element"), "bisquit", "black");

    return (
        <div className="NavBarDropDown">
            <Router>
                <Link className="NavBarDropDown-element" to="/">
                    Home
                </Link>

                <Link className="NavBarDropDown-element" to="/jobs">
                    Jobs
                </Link>

                <Link className="NavBarDropDown-element" to="/contact">
                    Contact
                </Link>

                <Link  className="NavBarDropDown-element" to="/reactPage">
                    React
                </Link>

                <Routes>
                    {/* <Route path="/jobs" element={<Test/>}/>
                    <Route path="/contact" element={<h1>Contact</h1>} />
                    <Route path="/reactPage" element={<ReactPage/>} />
                    <Route path="/" element={<h1>Home</h1>} /> */}
                </Routes>
            </Router>
        </div>
    )
}