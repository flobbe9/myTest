import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./DropDown.css";

const navBarDropDownElements = document.getElementsByClassName("DropDown-element");

export default function DropDown(props) {
    // links change color on hover
    // useEffect(() => 
        // changeColorOnMouseOver(navBarDropDownElements, "grey", "black"));

    return (
        <div className="DropDown-container">
            <Router>
                <Link className="DropDown-item" to="/">
                    Home
                </Link>

                <Link className="DropDown-item" to="/jobs">
                    Jobs
                </Link>

                <Link className="DropDown-item" to="/contact">
                    Contact
                </Link>

                <Link  className="DropDown-item" to="/reactPage">
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