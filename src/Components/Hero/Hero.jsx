import React from "react";
import {Link} from 'react-router-dom';
import imageOne from "../../Images/Main_image.svg";

const Hero = () => {
  return (
    <div>
    <div className="HeroSection">
    <img className="HeroImage" src={imageOne}/>
      <div className="HeroSection_text">
      <h1 className="Heading">Get to know the air you breathe</h1>
      <h2 className="SubHeading">Enter your city below to know everything about your city's pollution level</h2>
      <a href="#PollutionInput"><button className="HeroSection_button" type="button">Enter your city name here?</button></a>
      </div>
    </div>
    </div>
  );
}

export default Hero;