import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./NavBarDropDown.css";

const navBarDropDownElements = document.getElementsByClassName("NavBarDropDown-element");

export default function NavBarDropDown(props) {
    // links change color on hover
    // useEffect(() => 
        // changeColorOnMouseOver(navBarDropDownElements, "grey", "black"));

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