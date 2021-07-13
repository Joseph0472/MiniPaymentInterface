import React from "react";
import { Link } from 'react-router-dom'
import Hamburger from "../assets/hamburger.png"
import BackArror from "../assets/back.png"


export const Header = (nextPage) => {
    var icon: string = "";
    var headerTitle: string = "";

    // It can be refactoried if more pages coming using switch.
    if(nextPage.navto === "/menu") {
        icon = Hamburger;
        headerTitle = "Register card form";
    } else {
        icon = BackArror;
        headerTitle = "Menu";
    }
    return (
        <div className="Header" id="nav">
            <Link className="Icon" to={nextPage.navto} >
                <img src={icon}/>
            </Link>
            <div className="Headertext">{headerTitle}</div>
        </div>
    )
}  