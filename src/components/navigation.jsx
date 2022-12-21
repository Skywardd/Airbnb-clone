import React from "react";
import logo from "../images/logo.png"


function Navigation() {
    return (
        <div>
            <nav>
                <img className="logo-img" src={logo} alt="logo"></img>
            </nav>
        </div>
    )
}

export default Navigation;