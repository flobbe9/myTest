import React, { useEffect } from "react";
import "./NavBar.css";
import { setBackgroundColorOfClass, setDisplayOfClass } from "./NavBarEvents.tsx";


const navBarElementClass = document.getElementsByClassName("NavBar-element");
const navBarDropDownClass = document.getElementsByClassName("NavBarDropDown");


export default function NavBar(props) {

    useEffect(() => {
        // add event listeners
        addEventListeners();
    });

    
    return ( 
        <nav className="NavBar">
            <ul className="NavBar-elements">
                <li className="NavBar-element">
                    Home
                </li>
                <li id="NavBar-element-about" className="NavBar-element">
                    About
                </li>
                <li id="NavBar-element-career" className="NavBar-element">
                    Career
                </li>
            </ul>
        </nav>
    )
}


function addEventListeners() {
    
    // NavBar-element change color 
    setBackgroundColorOfClass(navBarElementClass, "mouseover", "white");
    setBackgroundColorOfClass(navBarElementClass, "mouseout", "bisque");

    // NavBarDropDown display
    setDisplayOfClass(navBarElementClass, "mouseover", "inline", navBarDropDownClass);
    setDisplayOfClass(navBarElementClass, "mouseout", "none", navBarDropDownClass);
}