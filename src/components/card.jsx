import React from "react" ;
import star from "../images/star.png"

function Card(props){
 return(
  <div className="card--section">
   {props.openSpots===0 &&<div className="badge"> SOLD OUT</div>}
   <img src={props.imgPath} alt="experierence-img" />
   <div className="card--raiting">
   <img className="raiting--star" src={star} alt="star"/>
   <p className = "raiting--prg" >{props.raiting}  </p> 
   <p className = "raiting--prg grey">{props.country}</p>
   </div>
   <p className="card--info">{props.info}</p>
   <p className="card--info price"><strong>{props.price} </strong>/ person</p>
  </div>

 )
}

export default Card;