const SearchBar = ()=> {

    return (
        <div>
            <label htmlFor="pokemon-search">Encuentra tu Pokemon:</label>
                <input type="search" id="pokemon-search" name="poke-search" />
            <button>Buscar</button>
        </div>
    );

}

export default SearchBar;