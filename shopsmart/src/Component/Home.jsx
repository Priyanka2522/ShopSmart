import React from "react";
import Navbar from "./Navbar";
import Ecommerce from "../assets/Images/E-Commerce011.jpg"



const Home = () => {
    return (
        
        <div className="home">
        <Navbar/>
        <img src={Ecommerce} style={{width:"100%", height:"auto"}}></img>
               
         
         
        </div>
        
        
    )
}


export default Home;