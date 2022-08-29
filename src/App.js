import logo from './logo.svg';
import './App.css';
import Navbar from './comonants/Navbar';
import  Countries from './comonants/Countries'
import Country from './comonants/Country';
import Search from './comonants/Search';
import {Route,Routes} from 'react-router-dom';
import { CountryDetails } from './comonants/CountryDetails';
import FilterRegion from './comonants/FilterRegion';
function App() {
  //console.log(country_data.]);
  // return (
  //   
  // );

  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Countries/>}/>
      <Route path="/CountryDetails/:name" element={<CountryDetails/>}/>
    </Routes>
    </>
    
  );
}

export default App;
