import React from 'react'
import {useNavigate } from "react-router-dom";
import "./navstyle.css";
const Details = (props) => {
    const navigate =useNavigate();
    const countrypage=()=>{
        navigate(`/`);
    }
  return (
    <div>
    <button type="button" className="button" onClick={countrypage}> <i className="arrow left"></i>Back</button>
    <br/>
    <br/>
    <br/>
    <img src={`${props.image}`} alt="Avatar" className="countryFlag"/>
    <h3 className='name'>{props.country_name}</h3>
    <p className='dd'>
        <div className='text'>
        <b>NativeName:</b>{props.NativeName}<br/>
        <br/>
        <b>Population:</b>{props.Population}<br/>
        <br/>
        <b>Region:</b>{props.Region}<br/>
        <br/>
        <b>Sub Region:</b>{props.subregion}<br/>
        <br/>
        <b>Capital:</b>{props.Capital}<br/>
        <br/>
        <br/>
        <br/>
        <b>Borders:</b>{props.Borders}<br/><br/>
        </div>

    </p>
    <p className='pp'>
    <div className='text'>
        <b>TopLevelDomin:{props.tld}</b><br/>
        <br/>
        <b>currencies:</b>{props.currencies}<br/>
        <br/>
        <b>Languages:</b>{props.languages}<br/>
        </div>
    </p>
    </div>
  )
}
export default Details;
