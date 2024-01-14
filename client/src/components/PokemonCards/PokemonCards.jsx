import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPokemons, updatePokemons } from "../../redux/actions/pokemonsActions.js";
import "./PokemonCards.css"
import Pagination from "../Pagination/Pagination.jsx";
import LoadingCards from "../LoadingCards/LoadingCards.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

const PokemonCards = () => {

    const dispatch = useDispatch();

    const { updatedList, loading, error, filteredPokemons } = useSelector((state) => {
        return state.pokemonStates;
    });
    
    const [currentPage, setCurrentPage] = useState(1);
    const [ elementsPerPage ] = useState(12);

    const pokemonsList = updatedList;

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    useEffect(() => {
      dispatch(updatePokemons(filteredPokemons));
    }, [dispatch, filteredPokemons]);

    if (loading) {
    return <LoadingCards/>
    }

    if (error) {
    return <ErrorPage error={error}/>
    }

    const totalElements = pokemonsList.length;
    const totalPages = Math.ceil(totalElements / elementsPerPage);
    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const visiblePokemons = pokemonsList.slice(startIndex, endIndex);

    return (
      <div>

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
