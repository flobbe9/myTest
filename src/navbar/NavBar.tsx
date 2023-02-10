import React, { useEffect } from "react";
import "./NavBar.css";
import { changeBackgroundColorOnMouseOver } from "./NavBarEvents.tsx";
import NavBarDropDown from "./NavBarDropDown.tsx";

const navBarElements = document.getElementsByClassName("NavBar-element");

export default function NavBar(props) {
    // NavBar-element mouseover
    useEffect(() => changeBackgroundColorOnMouseOver(navBarElements, "white", "bisque"))

    return ( 
        <nav className="NavBar">
            <ul className="NavBar-elements">
                <li className="NavBar-element">
                    Home
                </li>
                <li className="NavBar-element">
                    About
                </li>
                <li className="NavBar-element">
                    Career
                </li>
            </ul>
        </nav>
    )
}
