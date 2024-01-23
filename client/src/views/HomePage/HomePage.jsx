import { useState } from "react";

import { useDispatch } from "react-redux";

import Navigation from "../../components/Navigation/Navigation.jsx";
import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx";
import { fetchPokemons, filterPokemonsByOrigin, filterPokemonsByType, SearchPokemonsByName, sortPokemonsByAttack, sortPokemonsByName, updateLoadingValue } from "../../redux/actions/pokemonsActions.js";

import "./HomePage.css"

const HomePage = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [ sortingButtonClass, setSortingButtonClass] =useState({  sortNameAsc: "",
                                                                    sortNameDesc: "",
                                                                    sortAttackAsc: "",
                                                                    sortAttackDesc: ""
                                                                });                                                        
    // const handleSort = (event) => {
    //     console.log(event)
    //     const sortName = event.target.getAttribute("name");
    //     console.log(sortName)
    //     if (sortName === "sortByName") {
    //         dispatch(sortPokemonsByName(event));
    //     } else {
    //         dispatch(sortPokemonsByAttack(event.target.value));
    //     }
    // };

    const handleSortByName = (event) => {
        if(event==="asc"){
            setSortingButtonClass({ 
                sortNameAsc: "sortB-active", 
                sortNameDesc: "",
                sortAttackAsc: "",
                sortAttackDesc: ""
            });
        }
        if (event === "desc") {
            setSortingButtonClass({
                sortNameAsc: "",
                sortNameDesc: "sortB-active",
                sortAttackAsc: "",
                sortAttackDesc: ""
            });
        }
        dispatch(sortPokemonsByName(event));
    }

    const handleSortByAttack = (event) => {
        if (event === "asc") {
            setSortingButtonClass({
                sortNameAsc: "",
                sortNameDesc: "",
                sortAttackAsc: "sortB-active",
                sortAttackDesc: ""
            });
        }
        if (event === "desc") {
            setSortingButtonClass({
                sortNameAsc: "",
                sortNameDesc: "",
                sortAttackAsc: "",
                sortAttackDesc: "sortB-active"
            });
        }
        dispatch(sortPokemonsByAttack(event));
    };

    const handleFilter = (option) => {
        // const filterOrigin = event.target.getAttribute("name");
        if (option === "api" || option === "database") {
            dispatch(filterPokemonsByOrigin(option));
        } else {
            dispatch(filterPokemonsByType(option));
        }
        setSortingButtonClass({sortNameAsc:"", sortNameDesc:"", sortAttackAsc:"", sortAttackDesc:""})
    };

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() !== "") {
            dispatch(SearchPokemonsByName(searchTerm));
            dispatch(updateLoadingValue(true));
        }
    };

    const handleClearSearch = () => {
        dispatch(fetchPokemons());
        dispatch(updateLoadingValue(true));
        setSearchTerm("");
    };

    const handleButtonClass = (event) => {
        console.log(event);
    }

    return (
        <div className="homeContainer">
        <header className="page-title">
            <h1>Pokemon Explorer</h1>
        </header>
        <nav className="nav-container">
            <Navigation
            handleSortByName={handleSortByName}
            handleSortByAttack={handleSortByAttack}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleClearSearch={handleClearSearch}
            handleButtonClass={handleButtonClass}
            sortingButtonClass={sortingButtonClass}
            />
        </nav>
        <section className="pokemon-component">
            <PokemonCards />
        </section>
        </div>
    );
};

export default HomePage;
