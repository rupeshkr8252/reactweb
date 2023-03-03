import React from "react";
import web from "../src/Images/19362653.jpg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";


const Home = () => {
    return(
        <>
    <Common name="You can Enjoy Our Website" 
    imgsrc={web}
    visit="/service"
    btname="Event"/>
    </>
    )
}
   export default Home;