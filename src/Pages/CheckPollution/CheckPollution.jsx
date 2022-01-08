import React, {useState} from "react";
import "./CheckPollution.css"
// import imageOne from "../../Images/Main_image.svg";
import Hero from '../../Components/Hero/Hero.jsx';



export default function CheckPollution() {

  const geoCodeAPIKey="cccbc4a8fee5d9ba9bbbd911b2e54fde";

  function fetchGeoAPI(key, query) {
    //works correctly
     return fetch(`http://api.positionstack.com/v1/forward?access_key=${key}&query=${query}`).then(response => {
       return response.json().then(data => {
         console.log(data);
     });
  }

  const [formInput, setFormInput] = useState("");
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  };
  
  const handleLocSubmit = (e) => {
    e.preventDefault();
    let data = fetchGeoAPI(geoCodeAPIKey, formInput);
    
    setLat(data["data"][0]["latitude"]);
    setLong(data["data"][0]["longitude"]);
    setLocation(lat);
  }

  return (
      <div>
      <Hero/>
      <p className = "AreaText"> Enter your area to find out what your air quality looks like!</p>
      <form onSubmit={handleLocSubmit}>
        <input className = "PollutionInput" onChange={handleInputChange}></input>
        <button type="submit" className = "PollutionButton">Check Now</button>
      </form>
      <p className = "PollutionOutput">{location}</p>
      

      </div>
      

  );
}