/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import LoadingCards from "../LoadingCards/LoadingCards.jsx";
import { fetchPokemons, updatePokemons } from "../../redux/actions/pokemonsActions.js";

import "./PokemonCards.css";

const PokemonCards = () => {

  const dispatch = useDispatch();

  const { updatedList, loading, error, filteredPokemons } = useSelector((state) => {
      return state.pokemonStates;
  });

  const  [currentPage, setCurrentPage] = useState(1);
  const [ elementsPerPage ] = useState(12);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(updatePokemons(filteredPokemons.length > 0 ? filteredPokemons : updatedList));
    setCurrentPage(1);  
  }, [dispatch, filteredPokemons]);
  
  if (loading) {
    return <LoadingCards/>
  }
  
  if (error) {
    return <ErrorPage error={error}/>
  }
  
  const pokemonsList =  updatedList;

  const totalElements = pokemonsList.length;
  const totalPages = Math.ceil(totalElements / elementsPerPage);
  const endIndex = currentPage * elementsPerPage;
  const startIndex = endIndex - elementsPerPage;
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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </div>
  );
};


export default PokemonCards;
