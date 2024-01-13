import { useState } from "react";

import { useDispatch } from "react-redux";

import Navigation from "../../components/Navigation/Navigation.jsx";
import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx";
import { filterPokemonsByOrigin, filterPokemonsByType, SearchPokemonsByName, sortPokemonsByAttack, sortPokemonsByName } from "../../redux/actions/pokemonsActions.js";

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
    console.log(searchTerm)
    const handleSearch = (searchTerm) => {
        console.log(searchTerm)
        dispatch(SearchPokemonsByName(searchTerm));
    };

    return (
        <div className="homeContainer">
            <header></header>
            <nav>
                <Navigation
                    handleSort={handleSort}
                    handleFilter={handleFilter}
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                />
            </nav>
            <section>
                <PokemonCards />
            </section>
        </div>
    );
};

export default HomePage;
