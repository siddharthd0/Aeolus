import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import imageOne from "../../Images/Main_image.svg";
import imageTwo from "../../Images/Send_message.svg";
import './Home.css';

export default function Home() {
   const [{email, isValid}, setEmail] = useState({
     email: "",
     isValid: false
   });
   const [name, setName] = useState("");
   const [message, setMessage] = useState("");
  return (
    <main>
      <section className="HeroSection">
        <img className="HeroImage" src={imageOne}/>
        <div className="HeroSection_text">
          <h1 className="Heading">Get to know the air you breathe</h1>
          <h2 className="SubHeading">Know when to stay in and when to breathe without worry</h2>
          <Link to="/"><button className="HeroSection_button" type="button">What's polluting the air?</button></Link>
        </div>
      </section>
      <section className="FeatureSection">
        <h2 className="Section_heading" >What's new</h2>
        <div className="WhatsNew">
          <div className = "InfoCard">
            <h3>Different Information</h3>
            <p className="FeatureSection_detail" >Not just another air quality app. Aeolus synthesizes data to predict acid rain and photochemical smog</p>
          </div>
          <div className="InfoCard">
            <h3>Understandable Information</h3>
            <p className="FeatureSection_detail" >We tell you what to do instead of throwing numbers at you</p>
          </div>
          <div className="InfoCard">
            <h3>More Information</h3>
            <p className="FeatureSection_detail" >Get to know more with the wide array of data we offer which is in an easily understandable format</p>
          </div>
        </div>
      </section>
      <section className="ContactSection">
          <h2 className = "Section_heading">Let's Connect</h2>
        <div className="ContactSection_main">
          <form className="Contact_div">
              <div className="ContactForm">
                <label className="ContactSection_labels" >Your Email</label>
                <input className="ContactSection_input" type="email" onChange={(event)=>{
                   setEmail((previousState)=>{
                      return({
                        email: event.target.value,
                        isValid: previousState.isValid
                      })
                   });
                }} onBlur={(event)=>{
                  if(event.target.value.includes("@") && event.target.value.length >= 8){
                     setEmail((previousState)=>{
                      return({
                        email: previousState.email,
                        isValid: true
                      })
                   });
                  }else{
                    setEmail((previousState)=>{
                      return({
                        email: previousState.email,
                        isValid: false
                      })
                   });
                  }
                }}></input>
                <label className="ContactSection_labels" onChange={(event)=>{
                   setName(event.target.value);
                }}>Your Name</label>
                <input className="ContactSection_input" type="text" onChange={(event)=>{
                   setName(event.target.value);
                }}></input>
            <a href="/"><button className="ContactForm_button" type="submit" onClick={(event)=>{
              event.preventDefault();
              console.log(email,name,message);
            }}>Send Now</button></a>
              </div>
              <div className="ContactForm_message">
                <label className="ContactSection_labels">Your Message</label>
                <textarea className="ContactForm_TextArea" onChange={(event)=>{
                   setMessage(event.target.value);
                }}/>
              </div>
          </form>
        <img className="ContactSection_image" src={imageTwo}/>
        </div>
      </section>
    </main>
  );
}

