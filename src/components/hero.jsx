import React from "react";
import grid from "../images/grid.png"

function Hero(){
    return (
        <section className="header--section">
            <img className="grid--img" src={grid} alt="grid" />
            <h1 className="header--title"> Online Experiences</h1> 
            <p className="header--prg">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;