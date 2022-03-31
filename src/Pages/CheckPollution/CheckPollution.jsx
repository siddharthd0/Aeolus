import React, { useState, useEffect, useCallback } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./CheckPollution.css";
import Hero from '../../Components/Hero/Hero.jsx';
import imageOne from "../../Images/Main_image.svg";
export default function CheckPollution() {
  let navigate = useNavigate();
  //base variables
  const [formInput, setFormInput] = useState("");
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  //pollutant variables
  const [hno3, setHno3] = useState("");
  const [so2, setSo2] = useState("");
  const [no2, setNo2] = useState("");
  const [pan, setPan] = useState("");
  const [o3, setO3] = useState("");
  const [uv, setUV] = useState("");
  const [pm25, setPm25]= useState("");
  const [pm10, setPm10]= useState("");
  const [acidRain, setAcidRain]= useState(0);
  const [photoChemicalSmog, setPhotoChemicalSmog]= useState("");
  //API Keys
  const geoCodeAPIKey = process.env['GEOCODEAPIKEY'];
  const planetosAPIKey = process.env['PLANETOSAPIKEY'];
  const weatherBitAPIKey = process.env['WEATHERBITAPIKEY'];

  const fetchGeoAPI = useCallback((query) => {
    let latitude = "";
    let longitude = "";
    if (query === "" || query === undefined) {
      query = "London";
    }
    //Geocoding API
    fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=${query}&accept-language=en&polygon_threshold=0.0`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
        "x-rapidapi-key": `${geoCodeAPIKey}`
      }
    })
      .then(response => {
        return response.json();
      }).then(data => {
        setLat(data[0].lat);
        latitude = data[0].lat;
        setLong(data[0].lon);
        longitude = data[0].lon;
        setLocation(data[0].display_name);
        //console.log(lat, long)
        //copernicus atmospheric monitoring API
        fetch(`https://api.planetos.com/v1/datasets/cams_nrt_forecasts_global/point?apikey=${planetosAPIKey}&lat=${latitude}&origin=dataset-details&lon=${longitude}`, {mode:'cors'}).then(response => {
          return response.json();
        }).then(data => {
          setHno3(data.entries[0].data.tc_hno3);
          // setNo2(data.entries[0].data.tc_no2);
          setPan(data.entries[0].data.tc_pan);
          setSo2(data.entries[0].data.tcso2);
          setO3(data.entries[0].data.gtco3);
          setUV(data.entries[0].data.uvbed);
          //weatherbit api
          fetch(`https://api.weatherbit.io/v2.0/current/airquality?&lat=${latitude}&lon=${longitude}&key=${weatherBitAPIKey}`).then(res => {
            return res.json();
          }).then(data => {
              setPm10(data.data[0].pm10);
              setPm25(data.data[0].pm25);
              setNo2(data.data[0].no2);
              
          }).catch(err => {
            console.log(err);
          });
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, [])

  useEffect(() => {
    fetchGeoAPI()
  }, [fetchGeoAPI]);

  useEffect(()=>{
    setAcidRain(0);
    hno3 > 0.0000214  ? setAcidRain(prevValue=>prevValue+3): (hno3 > 0.00000221  ? setAcidRain(prevValue=>prevValue+2) : setAcidRain(prevValue=>prevValue+1));
          
          so2 > 0.0000125 ?setAcidRain(prevValue=>prevValue+3): (so2 > 0.000000592 ? setAcidRain(prevValue=>prevValue+2) : setAcidRain(prevValue=>prevValue+1));
          
  },[hno3,so2]);

   useEffect(()=>{
    setPhotoChemicalSmog(0);
    hno3 > 0.0000214  ? setPhotoChemicalSmog(prevValue=>prevValue+3): (hno3 > 0.00000221  ? setPhotoChemicalSmog(prevValue=>prevValue+2) : setPhotoChemicalSmog(prevValue=>prevValue+1));

    pan > 0.00000693  ? setPhotoChemicalSmog(prevValue=>prevValue+3): (pan > 0.000000769  ? setPhotoChemicalSmog(prevValue=>prevValue+2) : setPhotoChemicalSmog(prevValue=>prevValue+1));

    uv > 0.0261  ? setPhotoChemicalSmog(prevValue=>prevValue+3): (uv > 0.000771  ? setPhotoChemicalSmog(prevValue=>prevValue+2) : setPhotoChemicalSmog(prevValue=>prevValue+1));
    
    o3 > 0.00774  ? setPhotoChemicalSmog(prevValue=>prevValue+3): (o3 > 0.00611  ? setPhotoChemicalSmog(prevValue=>prevValue+2) : setPhotoChemicalSmog(prevValue=>prevValue+1));
       
          
  },[hno3,o3]);

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleLocSubmit = (e) => {
    e.preventDefault();
    fetchGeoAPI(formInput);
  }

  return (
    <div>
      <div className="HeroSection">
    <img className="HeroImage" src={imageOne}/>
      <div className="HeroSection_text">
      <h1 className="Heading">Get to know the air you breathe</h1>
      <h2 className="SubHeading">Enter your city below to know everything about your city's pollution level</h2>
      <form onSubmit={handleLocSubmit}>
        <input placeholder = "Put your city name here"className="PollutionInput" onChange={handleInputChange}></input>
        <button type="submit" className="PollutionButton">Check Now</button>
      </form>
      
      </div>
    </div>
      <h1 className = "DataText_1">
      <span id="DataOfHeading" >Data of   </span>
      <span className = "DataText_2">{location}  </span>
      </h1>
      



      <div>
        <div className="CardHolder">
          <div>
            <h3 className="CardTitle">Location</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                <span className="GeoLabel"> Your </span>
                <span className="GeoLabel_Special"> location </span>
                <span> is </span>
                <span className="GeoLabel_Output">{location}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">Latitude</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> latitude </span>
                <span> is </span>
                <span className="GeoLabel_Output">{lat}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">Longitude</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> longitude </span>
                <span> is </span>
                <span className="GeoLabel_Output">{long}</span>
              </p>
            </div>
          </div>
          
          {console.log(acidRain)}

          <div>
            <h3 className="CardTitle">Acid Rain</h3>
            <div className={acidRain>4?"InfoCard_Pollution_high":(acidRain> 2 ? "InfoCard_Pollution_mid" : "InfoCard_Pollution" )}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special">Acid Rain risk</span>
                <span> is </span>
                <span className="GeoLabel_Output">{acidRain>4?"high":(acidRain> 2 ? "moderate" : "low" )}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">Sulphur Dioxide Levels</h3>
            <div className={so2 > 0.0000125 ?"InfoCard_Pollution_high": (so2 > 0.000000592 ? "InfoCard_Pollution_mid" : "InfoCard_Pollution")}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> SO2 Levels </span>
                <span> are </span>
                <span className="GeoLabel_Output">{so2} kg m ** 2</span><br/><strong>
                {so2 > 0.0000125  ? "high": (so2 > 0.000000592  ? "moderate" : "low")}</strong>
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">Safety Measures for High Levels</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                Cover up plants<br/>
                Cover up marble statues<br/>
                Petition your government to regulate sulphur dioxide and nitrogen oxide emissions
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">PM2.5 Levels</h3>
            <div className={pm25 > 150  ?"InfoCard_Pollution_high": (pm25 > 50  ? "InfoCard_Pollution_mid" : "InfoCard_Pollution")}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> PM2.5 Levels </span>
                <span> are </span>
                <span className="GeoLabel_Output">{pm25} µg/m³</span>
                <br/><strong>
                {pm25 > 150  ? "high": (pm25 > 50  ? "moderate" : "low")}</strong>
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">PM10 Levels</h3>
            <div className={pm10 > 255  ?"InfoCard_Pollution_high": (pm10 > 55  ? "InfoCard_Pollution_mid" : "InfoCard_Pollution")}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> PM10 Levels </span>
                <span> are </span>
                <span className="GeoLabel_Output">{pm10} µg/m³</span>
                <br/><strong>
                {pm10 > 255  ? "high": (pm10 > 55  ? "moderate" : "low")}</strong>
              </p>
            </div>
          </div>



          <div>
            <h3 className="CardTitle">Safety Measures for High Levels</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                Carry an inhaler if you have asthma <br/>
                Carry tissues to blow your nose <br/>
                Avoid strenuous activity<br/>
                Wear a mask
              </p>
            </div>
          </div>



          <div>
            <h3 className="CardTitle">Nitrogen Dioxide Levels</h3>
            <div className={no2 > 0.0000145  ?"InfoCard_Pollution_high": (no2 > 0.00000222  ? "InfoCard_Pollution_mid" : "InfoCard_Pollution")}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> NO2 Levels </span>
                <span> are </span>
                <span className="GeoLabel_Output">{no2} kg / m ** 2</span>
                <br/><strong>
                {no2 > 0.0000145  ? "high": (no2 > 0.00000222  ? "moderate" : "low")}</strong>
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">Nitric Acid Levels</h3>
            <div className={hno3 > 0.0000214  ?"InfoCard_Pollution_high": (hno3 > 0.00000221  ? "InfoCard_Pollution_mid" : "InfoCard_Pollution")}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> HNO3 Levels </span>
                <span> are </span>
                <span className="GeoLabel_Output">{hno3} kg m ** 2</span>
                <br/><strong>
                {hno3 > 0.0000214  ? "high": (hno3 > 0.00000221  ? "moderate" : "low")}</strong>
              </p>
            </div>
          </div>



          <div>
            <h3 className="CardTitle">Safety Measures for High Levels</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                Keep children indoors<br/>
                Carry an inhaler if you have asthma
              </p>
            </div>
          </div>
        </div>





        <div className="CardHolder_2">
          <div>
            <h3 className="CardTitle">Ozone levels</h3>
            <div className={o3 > 0.00774  ?"InfoCard_Pollution_high": (o3 > 0.00611  ? "InfoCard_Pollution_mid" : "InfoCard_Pollution")}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> O3 level</span>
                <span> is </span>
                <span className="GeoLabel_Output">{o3} kg m ** 2</span>
                <br/><strong>
                {o3 > 0.00774  ? "high": (o3 > 0.00611  ? "moderate" : "low")}</strong>
              </p>
            </div>
          </div>
          <div>
            <h3 className="CardTitle">Safety Measures</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                Children, elderly, and people with reduced vitamin intake should stay indoors
              </p>
            </div>
          </div>

          <div>
            <h3 className="CardTitle">Photochemical Smog</h3>
            <div className={photoChemicalSmog>8?"InfoCard_Pollution_high":(photoChemicalSmog> 4 ? "InfoCard_Pollution_mid" : "InfoCard_Pollution" )}>
              <p className="GeoLabel">
                <span className="GeoLabel"> The </span>
                <span className="GeoLabel_Special"> photochemical smog </span>
                <span> risk is </span>
                <span className="GeoLabel_Output">{photoChemicalSmog>8?"high":(photoChemicalSmog> 4 ? "moderate" : "low" )}</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="CardTitle">Safety Measures</h3>
            <div className="InfoCard_Pollution">
              <p className="GeoLabel">
                Wear a mask<br/>
                Carry an inhaler if you have asthma<br/>
                Get your lungs checked by a doctor<br/>
                Petition your government to require catalytic converters in cars
              </p>
            </div>
          </div>


        </div>



      </div>
    </div>
  );
}