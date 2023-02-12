import React, { useEffect } from "react";
import "./NavBar.css";
import { setBackgroundColorOfClass, setDisplayOfClass } from "./NavBarEvents.tsx";
import DropDown from "./DropDown.tsx";


const navBarItemClass = document.getElementsByClassName("NavBar-item");
const navBarDropDownItemClass = document.getElementsByClassName("NavBar-DropDown-item");


export default function NavBar(props) {

    useEffect(() => {
        // add event listeners
        addEventListeners();
    });
    
    return ( 
        <div>
            <nav className="NavBar">
                <ul className="NavBar-container">
                    <li className="NavBar-item">
                    Home
                    </li>

                    <li className="NavBar-item">
                        About
                    </li>

                    <li className="NavBar-item">
                        Career
                    </li>
                </ul>
            </nav>

            <ul className="NavBar-DropDown-container">
                <li className="NavBar-DropDown-item">
                    <DropDown />
                </li>

                <li className="NavBar-DropDown-item">
                    <DropDown />
                </li>

                <li className="NavBar-DropDown-item">
                    <DropDown />
                </li>
            </ul>
        </div>
    )
}


function addEventListeners() {
    
    // NavBar-element change color 
    setBackgroundColorOfClass(navBarItemClass, "mouseover", "white");
    setBackgroundColorOfClass(navBarItemClass, "mouseout", "bisque");

    // NavBarDropDown display
    setDisplayOfClass(navBarItemClass, "mouseover", "inline-flex", navBarDropDownItemClass);
    setDisplayOfClass(navBarItemClass, "mouseout", "none", navBarDropDownItemClass);
    
    setDisplayOfClass(navBarDropDownItemClass, "mouseover", "inline-flex", navBarDropDownItemClass);
    setDisplayOfClass(navBarDropDownItemClass, "mouseout", "none", navBarDropDownItemClass);
}