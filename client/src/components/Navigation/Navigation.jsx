import { useState } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar.jsx";
import SortingButtons from "../SortingButtons/SortingButtons.jsx"
import FilteringButtons from "../FilteringButtons/FilteringButtons.jsx";

import "./Navigation.css";

const Navigation = ({ handleSort, handleFilter, handleSearch, setSearchTerm, searchTerm, handleClearSearch }) => {

  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleIsDisplayed = () => {
    setIsDisplayed(!isDisplayed);
  };

  let visibilityClass =""; 
  let arrowClass = ""

  if(isDisplayed){
    visibilityClass = "visible"
    arrowClass = "arrow-up"
  } else {
    visibilityClass = "invisible";
    arrowClass = "arrow"
  }

  return (
    <div className="option-container">
      <div className={visibilityClass}>
        <FilteringButtons handleFilter={handleFilter} />
        <SortingButtons handleSort={handleSort} />
        <SearchBar
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          handleClearSearch={handleClearSearch}
        />
        <Link
          to={"/pokemonForm"}
          className="create-button"
          style={{ textDecoration: "none" }}>
          <button>Crea tu Pokemon!!</button>
        </Link>
      </div>
      <div className={ arrowClass } onClick={toggleIsDisplayed}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  handleSort: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleClearSearch: PropTypes.func.isRequired,
};

export default Navigation;