import { useState } from "react";

import { useDispatch } from "react-redux";

import Navigation from "../../components/Navigation/Navigation.jsx";
import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx";
import { filterPokemonsByOrigin, filterPokemonsByType, SearchPokemonsByName, sortPokemonsByAttack, sortPokemonsByName, updateLoadingValue } from "../../redux/actions/pokemonsActions.js";
import "./HomePage.css"

const HomePage = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");

    const handleSort = (event) => {
        const sortName = event.target.getAttribute("name");
        if (sortName === "sortByName") {
            dispatch(sortPokemonsByName(event.target.value));
        } else {
            dispatch(sortPokemonsByAttack(event.target.value));
        }
    };

    const handleFilter = (event) => {
        const filterOrigin = event.target.getAttribute("name");
        if (filterOrigin === "filterByOrigin") {
            dispatch(filterPokemonsByOrigin(event.target.value));
        } else {
            dispatch(filterPokemonsByType(event.target.value));
        }
    };

    const handleSearch = (searchTerm) => {
        // dispatch(SearchPokemonsByName(searchTerm));
        // dispatch(updateLoadingValue(true))
    };

    return (
        <div className="homeContainer">
            <header className="page-title">
                <h1>Pokemon Explorer</h1>
            </header>
            <nav className="nav-container">
                <Navigation
                    handleSort={handleSort}
                    handleFilter={handleFilter}
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                />
            </nav>
            <section className="pokemon-component">
                <PokemonCards />
            </section>
        </div>
    );
};

export default HomePage;
