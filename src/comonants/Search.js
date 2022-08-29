import React, { useEffect, useState } from "react";
import "./navstyle.css";
//import SearchIcon from '@mui/icons-material/Search';
const Search = (props) => {
  
  return (
    <div className="searchBar">
      <form class="nosubmit">
        <input
          class="nosubmit"
          type="search"
          placeholder="Search for a country..."
          value={props.text}
          onChange={props.onChangeHandelar}
        />
      </form>
      {/* {JSON.stringify(props.suggest)} */}
    </div>
  );
};
export default Search;
