import React from "react";
import web from "../src/Images/19362653.jpg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";


const Home = () => {
    return(
        <>
    <Common name="Grow your Business with" 
    imgsrc={web}
    visit="/service"
    btname="Get Started"/>
    </>
    )
}
   export default Home;