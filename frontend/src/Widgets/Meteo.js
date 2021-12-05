import axios from "axios";
import React, { useState } from "react";
import './Meteo.css';

const APIKEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_URL_ICON = "http://openweathermap.org/img/wn/"; //http://openweathermap.org/img/wn/10d@2x.png

export default function Meteo() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState([]);

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) {
      return;
    }
    const toArray = [];
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
        const res = await axios.get(url);
        toArray.push(res.data);
        setResult(toArray);
        console.log(res);
    }catch (e) {
        console.log(e)
    };
  }

  var getHTMLElementFromIcon = async (icon) =>{
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }


  return (
    <div className="widgMeteo">
        <div className="titremeteo">Today's Meteo</div>
            <div className="policemeteo">
      <form onSubmit={getWeather} className="form">
        <div>
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Entrez une ville"/>
        </div>
      </form>
    
      {result.map((data) => {
          return(
            <><div>{data.weather[0].main}</div>
            <div>{data.weather[0].description}</div>
            <img src={getHTMLElementFromIcon(data.weather[0].icon)} /> 
            <div>Temperature: {" "}{Math.round(data.main.temp - 273.15)} °C</div>
            <div> High: {" "}{Math.round(data.main.temp_max - 273.15)} °C</div>
            <div>Low: {" "}{Math.round(data.main.temp_min - 273.15)} °C</div></>
          );
      })}
       </div> 
    </div>
  );
}