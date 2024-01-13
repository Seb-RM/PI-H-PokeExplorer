import PropTypes from "prop-types";

const SearchBar = ({ handleSearch, setSearchTerm, searchTerm }) => {

    return (
        <div>
            <label htmlFor="pokemon-search">Encuentra tu Pokemon:</label>
            <input
                type="search"
                id="pokemon-search"
                name="poke-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch(searchTerm)}>Buscar</button>
        </div>
    );
};

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;
