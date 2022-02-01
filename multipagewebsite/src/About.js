import React from "react";
import web from "../src/images/img3.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";



const About = () => {
    return( 
        <>
    <Common
      name="Welcome to about page"
      imgsrc={web}
      visit="/contact"
      btname="Contact Now"


    />


   </> 
   );
};

export default About;