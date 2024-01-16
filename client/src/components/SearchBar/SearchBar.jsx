import PropTypes from "prop-types";

import "./SearchBar.css"

const SearchBar = ({ handleSearch, setSearchTerm, searchTerm, handleClearSearch }) => {

    return (
        <div className="search-container">
            <label htmlFor="pokemon-search">Encuentra tu Pokemon:</label>
            <input
                type="search"
                id="pokemon-search"
                name="poke-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value || "")}
                placeholder="Ingresa un nombre."
            />
            <div className="search-buttons">
                <button onClick={() => handleSearch(searchTerm)} id="search-button">
                    Buscar
                </button>
                <button
                    id="clean-search-button"
                    onClick={() => handleClearSearch()}>
                    Limpiar búsqueda.
                </button>
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    handleClearSearch: PropTypes.func.isRequired,
};

export default SearchBar;
