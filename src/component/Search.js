import React from "react";
import logo from "../logo/icon.svg";

import "../App.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <label htmlFor="header-search">
        <span style={{ marginTop: "30px" }} className="visually-hidden">
          Search
        </span>
      </label>

      <input
        className="textSize"
        style={{ width: "350px", height: "20px" }}
        type="text"
        id="header-search"
        placeholder="Search here"
        name="s"
        //   onChange={(e) => handleChange(e.target.value)}
      />

      <button className="buttonIcon">
        <img src={logo} />
      </button>
    </div>
  );
};

export default SearchBar;
