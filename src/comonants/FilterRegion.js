import React, { useEffect, useState } from 'react'
import Country from './Country';

 const FilterRegion = (props) => {
    const [select,setSelect]=useState();
    //e=>setSelect(e.target.value.toLowerCase())
  return (
    
    <div >
         <select value={select} onChange={(e)=>{
            props.onAddRegion(e.target.value.toLowerCase())
         }} className='FilterBar'>
          <option>filter by region</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
    </div>
  )
}
export default FilterRegion
