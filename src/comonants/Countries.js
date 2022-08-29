import React, { useState, useEffect } from "react";
import "./navstyle.css";
//import country_data from "../data/country_data";
import country_data from "./country_data";
import Country from "./Country";
import Search from "./Search";
import FilterRegion from "./FilterRegion";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [text, setText] = useState([]);
    const [suggest, setSuggest] = useState([]);
    const [region, setRegion] = useState(null);

    const textMatch = new RegExp(text, "gi");

    const onChangeHandelar = (e) => {
        const searchTerm = e.target.value;
        setText(searchTerm);
        if (searchTerm.length > 0) {
            const filteredCountries = countries.filter((country) => {
                return country.name.common.match(textMatch);
            });
            setSuggest(filteredCountries);
        } else {
            setSuggest(countries);
        }
    };

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCountries(data);
                setSuggest(data)
            });
    }, []);
    const getRegion =(region)=>{
        if(region=='filter by region'){
            fetch("https://restcountries.com/v3.1/all")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCountries(data);
                setSuggest(data)
            });
        }else{
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSuggest(data);
                
            });
        
        }
        
    }
    return (
        <><div className="filterAndSearch">
        <Search text={text} onChangeHandelar={onChangeHandelar} suggest={suggest}/>
        <FilterRegion onAddRegion={getRegion}/>
        </div>
            <ul className="countryrow ">
                {suggest?.map((item) => (
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
