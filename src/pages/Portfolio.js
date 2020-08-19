import React from "react";
import "./Portfolio.css";
import Card from "./Servicecard";
import Cardinfo from "./Servicecardinfo.js";


const appcardstyle ={
  display: 'flex',
    justifyContent: 'center',
   flexWrap: 'wrap'
}

const ncard = (val) => {
  return(
   <Card
   key = {val.id}
   cardimage={val.cardimage}
   cardinfo={val.cardname}
   cardtopic={val.cardtopic}
 />
 )
 }


const Portfolio = () => {
  return (
   <>
   <div style={appcardstyle}>

   {Cardinfo.map(ncard)}
   </div>
  </>  
  )
}

export default Portfolio;