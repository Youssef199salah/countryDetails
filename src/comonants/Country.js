import React from "react";
import "./navstyle.css";
import country_data from "./country_data";
// import Image from "../images/german.png"
import { Link,useNavigate } from "react-router-dom";

const Country = (props) => {
    const navigate =useNavigate();
    const countrydetails=()=>{
        navigate(`/CountryDetails/${props.country_name}`);
    }
  return (
    
      <div class="card" onClick={countrydetails}>
        <img src={`${props.image}`} alt="Avatar" />
        <div class="container">
          <h4>
            <b>{props.country_name}</b>
          </h4>
          <br />
          <div class="details">
            <p>
              <b>Population:</b> {props.Population}
              <br />
              <b>Region:</b> {props.Region}
              <br />
              <b>Capital:</b> {props.Capital}
              <br />
            </p>
          </div>
        </div>
      </div>
  );
};
export default Country;
