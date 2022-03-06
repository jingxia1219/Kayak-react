import fetchJsonp from "fetch-jsonp";
import { useState, useContext } from "react";
import "./Airline.css";
import AllianceContext from "./AllianceContext";
// var axios = require('axios');

function Airline() {
  const ctx = useContext(AllianceContext);
  const [airlines, setAirlines] = useState([]);
  fetchJsonp("https://www.kayak.com/h/mobileapis/directory/airlines/homework", {
    jsonpCallbackFunction: "invalidCallbackFunctionName"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      setAirlines(json);
    })
    .catch(function (ex) {
      console.log("parsing failed", ex);
    })
    const mappedAirline =airlines.filter( el=>  ctx.alliances.includes(el.alliance)).map((el, idx) => {
    return (
      <div className='airline-list' key={idx}>
         <img className='airline-logo' src={`https://www.kayak.com${el.logoURL}`} alt="airline-logo" />
        <span className='airline-name'>{el.name}</span>
      </div>
    );
  });
  return <div className='airline-list-container'>{mappedAirline}</div>;
}

export default Airline;
