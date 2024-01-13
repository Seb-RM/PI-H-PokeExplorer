import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar.jsx";
import SortingButtons from "../SortingButtons/SortingButtons.jsx"
import FilteringButtons from "../FilteringButtons/FilteringButtons.jsx";

const Navigation = ({ handleSort, handleFilter }) => {
    return (
        <div>
            <FilteringButtons handleFilter={handleFilter} />
            <SortingButtons handleSort={handleSort} />
            <SearchBar/>
            <Link to={"/pokemonForm"}>
                <button>Crea tu Pokemon!!</button>
            </Link>
        </div>
    );
};

Navigation.propTypes = {
    handleSort: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
};

export default Navigation;