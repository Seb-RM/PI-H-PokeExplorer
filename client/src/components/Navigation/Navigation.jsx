import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar.jsx";
import SortingButtons from "../SortingButtons/SortingButtons.jsx"
import FilteringButtons from "../FilteringButtons/FilteringButtons.jsx";

const Navigation = ({ handleSort, handleFilter, handleSearch, setSearchTerm, searchTerm }) => {
    return (
        <div>
            <FilteringButtons handleFilter={handleFilter} />
            <SortingButtons handleSort={handleSort} />
            <SearchBar handleSearch={handleSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Link to={"/pokemonForm"}>
                <button>Crea tu Pokemon!!</button>
            </Link>
        </div>
    );
};

Navigation.propTypes = {
    handleSort: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default Navigation;