import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Details from "./Details";
export const CountryDetails = () => {
    const param = useParams();
    const [details, setdetails] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${param.name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setdetails(data);
      });
  }, []);
  return (
    <div>
    {details.map((item) => {
        const nativeName = Object.values(item.name.nativeName);
        const tld  = item?.tld?.join(" , ")
        const languages =Object.values(item.languages).join(" , ");
        const currencies =Object.values(item.currencies)
       // const Borders =item?.borders?.join(" , ");
        //console.log(item.borders);

        return(
            <Details
               // Borders = {Borders}
                country_name={item.name.common}
                NativeName={nativeName[0].common}
                tld={tld}
                currencies={currencies[0].name}
                languages={languages}
                Population={item.population}
                Capital={item.capital}
                Region={item.region}
                subregion={item.subregion}
                image={item.flags.png}
            />
        )
        
    }
        )}
        
    </div>)
}
