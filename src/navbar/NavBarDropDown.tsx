import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./NavBarDropDown.css";
import Test from "../test/Test.tsx";
import ReactPage from "../reactPage/ReactPage.tsx";

export default function NavBarDropDown(props) {
    return (
        <div className="NavBarDropDown">
            <Router>
                <Link className="NavBarDropDown-element" to="/">
                    Home
                </Link><br />

                <Link className="NavBarDropDown-element" to="/jobs">
                    Jobs
                </Link><br />

                <Link className="NavBarDropDown-element" to="/contact">
                    Contact
                </Link><br />

                <Link  className="NavBarDropDown-element" to="/reactPage">
                    React page
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