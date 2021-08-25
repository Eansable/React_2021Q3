import React from "react";
import './search.css';

export function SearchBar() {
  return (<form className="search">
    <input type="text" className="search__text" /> 
    <input type="button" value="Search" className="search__button" />
  </form>)
}