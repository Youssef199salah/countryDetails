import React, { useState, useEffect } from "react";
import "./navstyle.css";
//import country_data from "../data/country_data";
import country_data from "./country_data";
import Country from "./Country";
import Search from "./Search";

const Countries = () => {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcountry(data);
      });
  }, []);

  return (
    <>
      <Search />
      <ul className="countryrow ">
        {country.map((item) => (
          <Country
            country_name={item.name.common}
            Population={item.population}
            Capital={item.capital}
            Region={item.region}
            image={item.flags.png}
          />
        ))}
      </ul>
    </>
  );
};
export default Countries;
