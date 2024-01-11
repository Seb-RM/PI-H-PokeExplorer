import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../../redux/actions/pokemonsActions.js";
import "./PokemonCards.css"
import Pagination from "../Pagination/Pagination.jsx";

const PokemonCards = () => {

    const dispatch = useDispatch();

    const { pokemonsList, loading, error } = useSelector((state) => {
        return state.pokemonStates;
    });
    
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    if (loading) {
    return <p>Cargando...</p>;
    }

    if (error) {
    return <p>Error: {error}</p>;
    }

    const elementsPerPage = 12;
    const totalElements = pokemonsList.length;
    const totalPages = Math.ceil(totalElements / elementsPerPage);

    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    
    const visiblePokemons = pokemonsList.slice(startIndex, endIndex);

    return (
      <div>
        <h1>Esto es la sección Pokemon Cards</h1>
        <div className="cardsContainer">
          {visiblePokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              nombre={pokemon.nombre}
              imagen={pokemon.imagen}
              tipos={pokemon.tipos}
            />
          ))}
        </div>
        <Pagination
            pages={totalPages}
            setCurrentPage={setCurrentPage}
        />
      </div>
    );
};

export default PokemonCards;
