import React from "react";
import "./About.css";
import imageThree from "../../Images/About_us.svg";

export default function About() {
  return(
  <div>

  <div className="InfoDiv">
  <div>
  <span className = "InfoWhy"> Our </span>
  <span className = "InfoWhy_Goal"> Goal </span>
  <h2 className = "InfoWhy_Text"> The goal of our web app is to forecast acid rain and photochemical smog, atmospheric events which negatively impact the health of humans and the environment. With the causes of said events being largely attributed to human activities, the app also aims to be an educational tool, creating awareness by making lifestyle suggestions catered to the air quality of the location the user inputs. We wanted our app to not be just a dashboard displaying numbers grabbed from an API, but rather an inferring tool capable of making abstractions out of data. </h2>
  </div>
   <img className="AboutImage" src={imageThree}/>
  </div>


 
  <section className="FeaturesSection">
    <span className = "TheCreators"> The  </span>
  <span className = "TheCreators_Creators"> Creators </span>
  <span className = "TheCreators_Rest">of Aeolus</span>
        <div className="WhatsNew">
          <div className = "InfoCard1">
            <h3>Siddharth Duggal</h3>
          
          </div>
          <div className="InfoCard1">
            <h3>Rory <br/>James</h3>
            
          </div>
          <div className="InfoCard1">
            <h3>Angela <br/> Yang</h3>
           
          </div>
          <div className="InfoCard1">
            <h3>Avichal <br/> Pandey</h3>
           
          </div>
        </div>
      </section>
  
  </div>
  
  )
}