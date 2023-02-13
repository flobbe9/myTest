import React from "react";
import { Link } from "react-router-dom";
import "./DropDown.css";


export default function DropDown(props) {

    return (
        <div className="DropDown-container">
            <Link className="DropDown-item" to="/home">
                Home
            </Link>

            <Link className="DropDown-item" to="/jobs">
                Jobs
            </Link>

            <Link className="DropDown-item" to="/contact">
                Contact
            </Link>
        </div>
    )
}