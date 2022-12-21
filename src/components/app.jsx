import React from "react";
import Navigation from "./navigation";
import Hero from "./hero"
import Card from "./card";
import db from "../db"

 
function App(){

    return(
        <>
            <Navigation />
            <Hero />
            <div className="cards">
            {db.map((exp, index)=>{
               return <Card key={index} imgPath={exp.img} raiting={exp.raiting} country= {exp.country} info={exp.info} price={exp.price} openSpots= {exp.openSpots} />
                
            })}
            </div>

        </>
    )
}

export default App;